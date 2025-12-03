import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ConfirmDeleteModal } from "../../../components/atoms/ConfirmDeleteModal";
import { vi } from "vitest";

// ------------------- Mock de framer-motion -------------------
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

// ------------------- Mock de ModalPortal -------------------
vi.mock("../../../components/atoms/ModalPortal", () => ({
  default: ({ children }: any) => <div>{children}</div>,
}));

// ------------------- Mock de ButtonComponent -------------------
vi.mock("../../../components/atoms/ButtonComponent", () => ({
  default: ({ children, onClick }: any) => (
    <button onClick={onClick}>{children}</button>
  ),
}));

describe("ConfirmDeleteModal", () => {
  test("NO se renderiza cuando open = false", () => {
    const { container } = render(
      <ConfirmDeleteModal
        open={false}
        onClose={() => {}}
        onConfirm={() => {}}
      />
    );

    expect(container.firstChild).toBeNull();
  });

  test("Renderiza título y mensaje", () => {
    render(
      <ConfirmDeleteModal
        open={true}
        onClose={() => {}}
        onConfirm={() => {}}
        title="Eliminar elemento"
        message="¿Deseas continuar?"
      />
    );

    expect(screen.getByText("Eliminar elemento")).toBeInTheDocument();
    expect(screen.getByText("¿Deseas continuar?")).toBeInTheDocument();
  });

  test("Ejecuta onClose al presionar Cancelar", () => {
    const onClose = vi.fn();

    render(
      <ConfirmDeleteModal
        open={true}
        onClose={onClose}
        onConfirm={() => {}}
      />
    );

    fireEvent.click(screen.getByText("Cancelar"));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test("Ejecuta onConfirm al presionar Eliminar", () => {
    const onConfirm = vi.fn();

    render(
      <ConfirmDeleteModal
        open={true}
        onClose={() => {}}
        onConfirm={onConfirm}
      />
    );

    fireEvent.click(screen.getByText("Eliminar"));

    expect(onConfirm).toHaveBeenCalledTimes(1);
  });

  test("Muestra el nombre si se pasa como prop", () => {
    render(
      <ConfirmDeleteModal
        open={true}
        onClose={() => {}}
        onConfirm={() => {}}
        name="Producto X"
      />
    );

    expect(screen.getByText("Producto X")).toBeInTheDocument();
  });
});
