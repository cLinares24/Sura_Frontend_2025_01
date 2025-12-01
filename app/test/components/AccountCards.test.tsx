import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import AccountCard from "../../../components/atoms/AccountCards";
import Swal from "sweetalert2";

// Mock de Swal
vi.mock("sweetalert2", () => ({
  fire: vi.fn(),
}));

const profile = {
  nombre: "Juan Perez",
  cedula: "1054398870",
  correo: "juan@mail.com",
  genero: "masculino" as "masculino",
  rol: "paciente" as "paciente",
  fecha_registro: "2025-01-01T12:00:00.000Z",
};

const mockOnUpdate = vi.fn();

describe("AccountCard", () => {
  test("Renderiza correctamente los datos del perfil", () => {
    render(<AccountCard profile={profile} onUpdate={mockOnUpdate} />);

    // Buscar todos los <p> y verificar su contenido combinando el span y el texto
    expect(
      screen.getByText((content, element) =>
        element?.tagName === "P" && element.textContent?.includes(`Nombre: ${profile.nombre}`)
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText((content, element) =>
        element?.tagName === "P" && element.textContent?.includes(`Cédula: ${profile.cedula}`)
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText((content, element) =>
        element?.tagName === "P" && element.textContent?.includes(`Correo: ${profile.correo}`)
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText((content, element) =>
        element?.tagName === "P" && element.textContent?.includes(`Género: ${profile.genero}`)
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText((content, element) =>
        element?.tagName === "P" && element.textContent?.includes(`Rol: ${profile.rol}`)
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText((content, element) =>
        element?.tagName === "P" &&
        element.textContent?.includes(
          `Fecha de Registro: ${new Date(profile.fecha_registro).toLocaleString()}`
        )
      )
    ).toBeInTheDocument();
  });
});
