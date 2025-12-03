// app/test/components/CardCarrousel.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import CardCarrousel from "../../../components/molecules/CardsCarrouselComponent";

// Mock de next/link para que renderice los children directamente
vi.mock("next/link", () => {
  return {
    default: ({ children, href }: any) => <div>{children}</div>,
  };
});

describe("CardCarrousel", () => {
  const props = {
    title: "Departamento Salud",
    text: "Mejora tu bienestar",
    linkText: "Saber más",
  };

  it("Renderiza correctamente título, texto y botón", () => {
    render(<CardCarrousel {...props} />);

    // Verifica el título
    expect(screen.getByText(props.title)).toBeInTheDocument();

    // Verifica el texto
    expect(screen.getByText(props.text)).toBeInTheDocument();

    // Verifica el botón
    expect(screen.getByText(props.linkText)).toBeInTheDocument();
  });

  it("El botón tiene el texto por defecto si no se pasa linkText", () => {
    render(<CardCarrousel title="T1" text="T2" />);

    expect(screen.getByText("Leer más")).toBeInTheDocument();
  });
});
