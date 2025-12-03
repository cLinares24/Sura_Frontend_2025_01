import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useLogout } from "../../../hooks/useLogout"; // ajusta la ruta

// Mock de next/navigation
const pushMock = vi.fn();
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));

describe("useLogout", () => {
  beforeEach(() => {
    localStorage.clear();
    pushMock.mockClear();
  });

  it("elimina token, user y rol de localStorage y redirige", () => {
    // Configuramos localStorage
    localStorage.setItem("token", "123");
    localStorage.setItem("user", "Juan");
    localStorage.setItem("rol", "admin");

    const { result } = renderHook(() => useLogout());

    act(() => {
      result.current.logout();
    });

    expect(localStorage.getItem("token")).toBeNull();
    expect(localStorage.getItem("user")).toBeNull();
    expect(localStorage.getItem("rol")).toBeNull();

    expect(pushMock).toHaveBeenCalledTimes(1);
    expect(pushMock).toHaveBeenCalledWith("/");
  });
});
