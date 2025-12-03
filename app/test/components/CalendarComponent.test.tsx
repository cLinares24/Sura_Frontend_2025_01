import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { CalendarComponent } from "../../../components/atoms/CalendarComponent";

// Mock del botón
vi.mock("../../components/atoms/ButtonComponent", () => ({
  __esModule: true,
  default: ({ children, onClick }: any) => (
    <button onClick={onClick}>{children}</button>
  ),
}));

describe("CalendarComponent", () => {
  test("Renderiza inputs de fecha, hora inicio y hora fin", () => {
    const { container } = render(<CalendarComponent onAdd={() => {}} />);

    const inputs = container.querySelectorAll("input");

    expect(inputs.length).toBe(3); // fecha, inicio, fin
  });

  test("No llama onAdd si falta algún campo", () => {
    const mockFn = vi.fn();
    render(<CalendarComponent onAdd={mockFn} />);

    const button = screen.getByText("Agregar");

    fireEvent.click(button);
    expect(mockFn).not.toHaveBeenCalled();
  });

  test("Llama onAdd con los valores correctos", () => {
    const mockFn = vi.fn();
    const { container } = render(<CalendarComponent onAdd={mockFn} />);

    const inputs = container.querySelectorAll("input");
    const fecha = inputs[0];
    const inicio = inputs[1];
    const fin = inputs[2];

    fireEvent.change(fecha, { target: { value: "2025-01-20" } });
    fireEvent.change(inicio, { target: { value: "08:00" } });
    fireEvent.change(fin, { target: { value: "12:00" } });

    const button = screen.getByText("Agregar");
    fireEvent.click(button);

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith({
      fecha: "2025-01-20",
      hora_inicio: "08:00",
      hora_fin: "12:00",
    });
  });

  test("Limpia los inputs después de agregar", () => {
    const mockFn = vi.fn();
    const { container } = render(<CalendarComponent onAdd={mockFn} />);

    const inputs = container.querySelectorAll("input");
    const fecha = inputs[0];
    const inicio = inputs[1];
    const fin = inputs[2];

    fireEvent.change(fecha, { target: { value: "2025-01-20" } });
    fireEvent.change(inicio, { target: { value: "09:00" } });
    fireEvent.change(fin, { target: { value: "10:00" } });

    const button = screen.getByText("Agregar");
    fireEvent.click(button);

    const refreshed = container.querySelectorAll("input");
    expect(refreshed[0].value).toBe("");
    expect(refreshed[1].value).toBe("");
    expect(refreshed[2].value).toBe("");
  });
});
