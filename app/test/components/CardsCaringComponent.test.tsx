// app/test/components/CardHealth.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CardHealth from "../../../components/molecules/CardsCaringComponent";

describe("CardHealth", () => {
  const props = {
    icon: <svg data-testid="icon-svg" />,
    title: "Salud Física",
    text: "Cuida tu cuerpo diariamente",
    link: "Ver más",
  };

  it("Renderiza correctamente el título, texto y enlace", () => {
    render(<CardHealth {...props} />);

    // Verifica el título
    expect(screen.getByText(props.title)).toBeInTheDocument();

    // Verifica el texto
    expect(screen.getByText(props.text)).toBeInTheDocument();

    // Verifica el link
    expect(screen.getByText(`> ${props.link}`)).toBeInTheDocument();

    // Verifica que el icono está presente
    expect(screen.getByTestId("icon-svg")).toBeInTheDocument();
  });

  it("El enlace tiene href correcto", () => {
    render(<CardHealth {...props} />);
    const linkElement = screen.getByText(`> ${props.link}`);
    expect(linkElement).toHaveAttribute("href", "#");
  });
});
