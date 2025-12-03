// app/test/components/CardsCaringComponent.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CardHealth from "../../../components/molecules/CardsCaringComponent";

describe("CardHealth", () => {
  const props = {
    icon: <svg data-testid="icon-svg" />,
    title: "Salud Física",
    text: "Cuida tu cuerpo diariamente",
    link: "Ver más", // este prop no se renderiza
  };

  it("Renderiza correctamente el título, texto y el icono", () => {
    render(<CardHealth {...props} />);

    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.text)).toBeInTheDocument();
    expect(screen.getByTestId("icon-svg")).toBeInTheDocument();
  });
});
