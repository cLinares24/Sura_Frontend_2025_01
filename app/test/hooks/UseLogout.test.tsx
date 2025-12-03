import { describe, it, expect, vi, beforeEach, afterAll } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { AuthProvider } from "../../../context/AuthContext";

// 🔥 Mock de next/navigation COMPLETO (antes del hook)
const pushMock = vi.fn();
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));

// Ahora que next/navigation está mockeado, importamos el hook
import { useLogout } from "../../../hooks/useLogout";

// Guardamos localización real
const originalLocation = window.location;

beforeEach(() => {
  localStorage.clear();

  // mock de window.location
  Object.defineProperty(window, "location", {
    configurable: true,
    value: {
      ...originalLocation,
      href: "",
    },
  });

  pushMock.mockClear();
});

afterAll(() => {
  Object.defineProperty(window, "location", {
    configurable: true,
    value: originalLocation,
  });
});

describe("useLogout", () => {
  it("elimina token, user, rol y redirige a /", () => {
    localStorage.setItem("token", "123");
    localStorage.setItem("user", "Juan");
    localStorage.setItem("rol", "admin");

    const { result } = renderHook(() => useLogout(), {
      wrapper: AuthProvider,
    });

    act(() => {
      result.current.logout();
    });

    expect(localStorage.getItem("token")).toBeNull();
    expect(localStorage.getItem("user")).toBeNull();
    expect(localStorage.getItem("rol")).toBeNull();

    // 🔥 Tu redirección real
    expect(window.location.href).toBe("/");

    // 🔥 Y si usas router.push en el futuro, esto lo cubre también:
    expect(pushMock).not.toHaveBeenCalled(); // porque tu hook no usa push
  });
});
