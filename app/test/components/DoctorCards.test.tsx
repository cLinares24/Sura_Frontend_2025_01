import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { DoctorCard } from "../../../components/atoms/DoctorCards";
import { Medico } from "@/context/DoctorsContext";

// ---------------------- MOCK ButtonComponent ----------------------
vi.mock("./ButtonComponent", () => ({
  default: ({ children, onClick, className }: any) => (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  ),
}));

describe("DoctorCard", () => {
  const mockMedico: Medico = {
    nombre: "Dr. Juan Perez",
    cedula: "1054398870",
    correo: "juan@example.com",
    telefono: "555-1234",
  };

  const mockOnEdit = vi.fn();
  const mockOnDelete = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("Renderiza correctamente los datos del médico", () => {
    render(
      <DoctorCard m={mockMedico} onEdit={mockOnEdit} onDelete={mockOnDelete} />
    );

    expect(screen.getByText("Dr. Juan Perez")).toBeInTheDocument();
    expect(screen.getByText("Cédula:")).toBeInTheDocument();
expect(screen.getByText(mockMedico.cedula)).toBeInTheDocument();

expect(screen.getByText("Correo:")).toBeInTheDocument();
expect(screen.getByText(mockMedico.correo)).toBeInTheDocument();

expect(screen.getByText("Teléfono:")).toBeInTheDocument();
expect(screen.getByText(mockMedico.telefono)).toBeInTheDocument();

  });

  test("Llama a onEdit al hacer click en el botón de editar", () => {
    render(
      <DoctorCard m={mockMedico} onEdit={mockOnEdit} onDelete={mockOnDelete} />
    );

    const buttons = screen.getAllByRole("button");
    const editButton = buttons[0]; // Primer botón -> Editar
    fireEvent.click(editButton);

    expect(mockOnEdit).toHaveBeenCalledTimes(1);
  });

  test("Llama a onDelete al hacer click en el botón de eliminar", () => {
    render(
      <DoctorCard m={mockMedico} onEdit={mockOnEdit} onDelete={mockOnDelete} />
    );

    const buttons = screen.getAllByRole("button");
    const deleteButton = buttons[1]; // Segundo botón -> Eliminar
    fireEvent.click(deleteButton);

    expect(mockOnDelete).toHaveBeenCalledTimes(1);
  });
});
