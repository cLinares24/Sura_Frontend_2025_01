import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import ButtonComponent from "../../../components/atoms/ButtonComponent";

describe("ButtonComponent", () => {
  test("Renderiza el botón con texto", () => {
    render(<ButtonComponent className="btn-class">Guardar</ButtonComponent>);
    
    const button = screen.getByText("Guardar");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("btn-class");
    expect(button).not.toBeDisabled();
    expect(button).toHaveAttribute("type", "button"); // default
  });

  test("Ejecuta onClick al hacer click", () => {
    const handleClick = vi.fn();
    render(
      <ButtonComponent className="btn-class" onClick={handleClick}>
        Guardar
      </ButtonComponent>
    );

    const button = screen.getByText("Guardar");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("Botón puede estar deshabilitado y tener type submit", () => {
    render(
      <ButtonComponent className="btn-class" disabled type="submit">
        Enviar
      </ButtonComponent>
    );

    const button = screen.getByText("Enviar");
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("type", "submit");
  });
});
