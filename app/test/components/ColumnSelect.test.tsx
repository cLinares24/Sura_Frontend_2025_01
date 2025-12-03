import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { ColumnSelect } from "../../../components/atoms/ColumnSelect";

describe("ColumnSelect", () => {
  test("Renderiza el select con el valor inicial", () => {
    render(<ColumnSelect value={2} onChange={() => {}} />);

    const select = screen.getByRole("combobox");

    expect(select).toBeInTheDocument();
    expect(select).toHaveValue("2");
  });

  test("Renderiza todas las opciones correctamente", () => {
    render(<ColumnSelect value={1} onChange={() => {}} />);

    const options = screen.getAllByRole("option");
    expect(options.length).toBe(4);

    expect(options[0]).toHaveTextContent("1 columna");
    expect(options[1]).toHaveTextContent("2 columnas");
    expect(options[2]).toHaveTextContent("3 columnas");
    expect(options[3]).toHaveTextContent("4 columnas");
  });

  test("Llama onChange con el número correcto al cambiar valor", () => {
    const mockFn = vi.fn();
    render(<ColumnSelect value={1} onChange={mockFn} />);

    const select = screen.getByRole("combobox");

    fireEvent.change(select, { target: { value: "3" } });

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith(3);
  });
});
