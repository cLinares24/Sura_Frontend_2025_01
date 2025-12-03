import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useCarrousel } from "../../../hooks/useCarrousel";

describe("useCarrousel", () => {
  beforeEach(() => {
    vi.useFakeTimers(); // controlar los setTimeout
  });

  it("inicia en el slide 0", () => {
    const { result } = renderHook(() => useCarrousel(3));

    expect(result.current.currentIndex).toBe(0);
  });

  it("nextSlide avanza correctamente", () => {
    const { result } = renderHook(() => useCarrousel(3));

    act(() => {
      result.current.nextSlide();
    });

    expect(result.current.currentIndex).toBe(1);
  });

  it("prevSlide retrocede correctamente", () => {
    const { result } = renderHook(() => useCarrousel(3));

    act(() => {
      result.current.nextSlide(); // 0 → 1
      result.current.prevSlide(); // 1 → 0
    });

    expect(result.current.currentIndex).toBe(0);
  });

  it("prevSlide rota al último slide si está en 0", () => {
    const { result } = renderHook(() => useCarrousel(3));

    act(() => {
      result.current.prevSlide();
    });

    expect(result.current.currentIndex).toBe(2); // 0 → 2
  });

  it("nextSlide rota al primer slide si está en el último", () => {
    const { result } = renderHook(() => useCarrousel(3));

    act(() => {
      result.current.nextSlide(); // 0 → 1
      result.current.nextSlide(); // 1 → 2
      result.current.nextSlide(); // 2 → 0
    });

    expect(result.current.currentIndex).toBe(0);
  });

  it("auto-avanza después del delay", () => {
    const { result } = renderHook(() => useCarrousel(3, 5000));

    expect(result.current.currentIndex).toBe(0);

    // simular paso del tiempo
    act(() => {
      vi.advanceTimersByTime(5000);
    });

    expect(result.current.currentIndex).toBe(1);
  });

  it("reinicia el timeout cuando cambia currentIndex", () => {
    const { result } = renderHook(() => useCarrousel(3, 5000));

    // avanza manualmente antes del timeout
    act(() => {
      result.current.nextSlide(); // 0 → 1
    });

    expect(result.current.currentIndex).toBe(1);

    // si el timeout se reinicia, no debería avanzar hasta después de 5s NUEVOS
    act(() => {
      vi.advanceTimersByTime(4000); // Aún NO debe avanzar
    });

    expect(result.current.currentIndex).toBe(1);

    act(() => {
      vi.advanceTimersByTime(1000); // ahora sí completa 5000
    });

    expect(result.current.currentIndex).toBe(2);
  });
});
