// app/test/components/LoginComponent.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import LoginComponent from "../../../components/molecules/LoginComponent";

// Mock de next/link
vi.mock("next/link", () => {
  return {
    default: ({ children, href }: any) => <a href={href}>{children}</a>,
  };
});

// Mock del hook useLogin
vi.mock("../../../hooks/useLoginForm", () => ({
  useLogin: () => ({
    register: vi.fn(),
    handleSubmit: (onSubmit: any, onErrors: any) => (e: any) =>
      e.preventDefault(),
    errors: {},
    onSubmit: vi.fn(),
    onErrors: vi.fn(),
  }),
}));

describe("LoginComponent", () => {
  it("Renderiza correctamente título, inputs, botón y link", () => {
    render(<LoginComponent />);

    // Título principal
    expect(screen.getByText("Iniciar sesión")).toBeInTheDocument();

    // Inputs
    expect(
      screen.getByPlaceholderText("Ingresa tu correo electrónico")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Ingresa tu contraseña")
    ).toBeInTheDocument();

    // Botón enviar
    expect(screen.getByRole("button", { name: /enviar/i })).toBeInTheDocument();

    // Link de registro
    expect(screen.getByText("Regístrate")).toBeInTheDocument();
    expect(screen.getByText("Regístrate").closest("a")).toHaveAttribute(
      "href",
      "/register"
    );
  });
});
