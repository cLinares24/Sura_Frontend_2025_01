import React from "react";
import { render, screen } from "@testing-library/react";
import { DepartmentCards } from "../../../components/atoms/DepartamentsCards";
import { vi } from "vitest";

// ---------------------- Mocks ----------------------

// Mock de framer-motion
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

// Mock de next/image
vi.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: any) => (
    <img src={src} alt={alt} {...props} />
  ),
}));

describe("DepartmentCards", () => {
  const props = {
    title: "Card de prueba",
    img: "/img/test.jpg",
    desc: "Descripción de prueba",
    index: 0,
  };

  test("Renderiza correctamente el título, la descripción y la imagen", () => {
    render(<DepartmentCards {...props} />);

    // Verifica título
    expect(screen.getByText(props.title)).toBeInTheDocument();

    // Verifica descripción
    expect(screen.getByText(props.desc)).toBeInTheDocument();

    // Verifica imagen
    const img = screen.getByAltText(props.title) as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain(props.img);
  });

  test("Aplica clases y estructura principal", () => {
    const { container } = render(<DepartmentCards {...props} />);
    const card = container.firstChild as HTMLElement;

    expect(card).toHaveClass("bg-white");
    expect(card).toHaveClass("rounded-2xl");
    expect(card).toHaveClass("shadow-lg");
  });
});
