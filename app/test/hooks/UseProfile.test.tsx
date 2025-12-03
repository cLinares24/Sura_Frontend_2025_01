import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act, waitFor } from "@testing-library/react";
import { useProfile } from "../../../hooks/useProfile";

// 🧪 Mock del servicio real
vi.mock("../../../libs/authService", () => ({
  getProfileByIdService: vi.fn(),
}));

import { getProfileByIdService } from "../../../libs/authService";

describe("useProfile", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("carga el perfil correctamente cuando userId es válido", async () => {
    const mockProfile = { id: "1", nombre: "Juan" };

    // mock resolved
    (getProfileByIdService as any).mockResolvedValue(mockProfile);

    const { result } = renderHook(() => useProfile("1"));

    // loading debe ser true al inicio
    expect(result.current.loading).toBe(true);

    // esperar a que cargue
    await waitFor(() => {
      expect(result.current.profile).toEqual(mockProfile);
    });

    expect(result.current.error).toBe("");
    expect(result.current.loading).toBe(false);

    // se debe haber llamado una vez
    expect(getProfileByIdService).toHaveBeenCalledOnce();
    expect(getProfileByIdService).toHaveBeenCalledWith("1");
  });

  it("maneja errores correctamente cuando el servicio falla", async () => {
    (getProfileByIdService as any).mockRejectedValue(
      new Error("Fallo al obtener perfil")
    );

    const { result } = renderHook(() => useProfile("99"));

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.error).toBe("Fallo al obtener perfil");
    });

    expect(result.current.profile).toBeNull();
    expect(result.current.loading).toBe(false);
  });

  it("no llama al servicio cuando userId es vacío", async () => {
    const { result } = renderHook(() => useProfile(""));

    // loading queda true porque no se ejecuta fetch
    expect(result.current.loading).toBe(true);

    expect(getProfileByIdService).not.toHaveBeenCalled();
  });
});
