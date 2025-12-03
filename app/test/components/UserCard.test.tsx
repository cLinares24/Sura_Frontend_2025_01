import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { vi } from "vitest";
import { UserCard } from "../../../components/atoms/UserCard";
import type { UserDTO } from "../../../context/UsersContext";

// Mock de ButtonComponent
vi.mock("../../../components/atoms/ButtonComponent", () => ({
  default: ({ children, onClick }: any) => (
    <button onClick={onClick}>{children}</button>
  ),
}));

const mockUser: UserDTO = {
  nombre: "Juan Pérez",
  cedula: "123456789",
  genero: "M",
  correo: "juan@example.com",
  rol: "A",
  contrasena: "123456",
  contrasena2: "123456",
};

describe("UserCard", () => {
  test("Renderiza correctamente los datos del usuario", () => {
    render(<UserCard u={mockUser} onEdit={() => {}} onDelete={() => {}} />);

    expect(screen.getByText(mockUser.nombre)).toBeInTheDocument();

    // Documento de Identidad
    const docP = screen.getByText(/Documento de Identidad:/i).closest("p");
    expect(docP).toHaveTextContent(`Documento de Identidad: ${mockUser.cedula}`);

    // Género
    const generoP = screen.getByText(/Género:/i).closest("p");
    expect(generoP).toHaveTextContent("Género: Masculino");

    // Correo
    const correoP = screen.getByText(/Correo:/i).closest("p");
    expect(correoP).toHaveTextContent(`Correo: ${mockUser.correo}`);

    // Rol
    const rolP = screen.getByText(/Rol:/i).closest("p");
    expect(rolP).toHaveTextContent("Rol: Administrador");
  });

  test("Llama a onEdit al hacer click en Editar", () => {
    const onEdit = vi.fn();
    render(<UserCard u={mockUser} onEdit={onEdit} onDelete={() => {}} />);

    fireEvent.click(screen.getAllByRole("button")[0]);
    expect(onEdit).toHaveBeenCalledTimes(1);
  });

  test("Llama a onDelete al hacer click en Eliminar", () => {
    const onDelete = vi.fn();
    render(<UserCard u={mockUser} onEdit={() => {}} onDelete={onDelete} />);

    fireEvent.click(screen.getAllByRole("button")[1]);
    expect(onDelete).toHaveBeenCalledTimes(1);
  });
});
