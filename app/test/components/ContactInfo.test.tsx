// app/test/components/ContactInfo.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ContactInfo from "../../../components/molecules/ContactInfo";

// Mock de framer-motion para tests
vi.mock("framer-motion", () => {
  return {
    motion: {
      div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    },
  };
});

describe("ContactInfo", () => {
  it("Renderiza correctamente todos los títulos y datos de contacto", () => {
    render(<ContactInfo />);

    // Secciones principales
    expect(screen.getByText("Información General")).toBeInTheDocument();
    expect(screen.getByText("Teléfonos")).toBeInTheDocument();
    expect(screen.getByText("Correo electrónico")).toBeInTheDocument();
    expect(screen.getByText("Dirección")).toBeInTheDocument();
    expect(screen.getByText("Horario de Atención")).toBeInTheDocument();
    expect(screen.getByText("Síguenos")).toBeInTheDocument();

    // Teléfonos
    expect(screen.getByText(/\(601\) 555 8899/)).toBeInTheDocument();
    expect(screen.getByText(/320 555 1122/)).toBeInTheDocument();

    // Correos
    expect(screen.getByText("contacto@medicicol.com")).toBeInTheDocument();
    expect(screen.getByText("citas@medicicol.com")).toBeInTheDocument();

    // Dirección
    expect(
      screen.getByText(/Universidad Autónoma de Manizales/)
    ).toBeInTheDocument();

    // Horarios
    expect(screen.getByText(/Lunes a Viernes/)).toBeInTheDocument();
    expect(screen.getByText(/Sábados/)).toBeInTheDocument();
    expect(screen.getByText(/Domingos y Festivos/)).toBeInTheDocument();

    // Redes sociales
    expect(screen.getByText("FB")).toBeInTheDocument();
    expect(screen.getByText("IG")).toBeInTheDocument();
    expect(screen.getByText("YT")).toBeInTheDocument();
  });
});
