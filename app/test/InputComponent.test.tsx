import React from "react"; 
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputComponents from "../../components/atoms/InputComponents";
import { vi } from "vitest";


describe("InputComponents", () => {
  test("Renderiza un input con label y placeholder", () => {
    render(
      <InputComponents
        label="Nombre"
        typeElement="text"
        placeHolder="Escribe tu nombre"
        registerName="nombre"
      />
    );

    // Verifica que el label se renderice
    expect(screen.getByText("Nombre")).toBeInTheDocument();

    // Verifica que el input se renderice con placeholder
    const input = screen.getByPlaceholderText("Escribe tu nombre");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
  });

  test("Renderiza un select con opciones", async () => {
    const listValues = [
      { value: "1", label: "Opción 1" },
      { value: "2", label: "Opción 2" },
    ];

    render(
      <InputComponents
        label="Selecciona"
        typeElement="select"
        placeHolder="Selecciona una opción"
        listValues={listValues}
        registerName="opcion"
      />
    );

    // Verifica que el label se renderice
    expect(screen.getByText("Selecciona")).toBeInTheDocument();

    // Verifica que el select y las opciones se rendericen
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    expect(screen.getByText("Opción 1")).toBeInTheDocument();
    expect(screen.getByText("Opción 2")).toBeInTheDocument();

    // Simula seleccionar una opción
    await userEvent.selectOptions(select, "2");
    expect((select as HTMLSelectElement).value).toBe("2");
  });

  test("Renderiza input con clase personalizada", () => {
    render(
      <InputComponents
        label="Correo"
        typeElement="email"
        placeHolder="example@mail.com"
        className="input-class"
        registerName="email"
      />
    );

    const input = screen.getByPlaceholderText("example@mail.com");
    expect(input).toHaveClass("input-class");
  });
});
