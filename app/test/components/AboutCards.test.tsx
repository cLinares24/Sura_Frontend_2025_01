import React from "react";
import { render, screen } from "@testing-library/react";
import AboutCards, { AboutCard } from "../../../components/atoms/AboutCards";
import { vi } from "vitest";

// ------------------- Mock de framer-motion -------------------
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

describe("AboutCards", () => {
  const mockData: AboutCard[] = [
    { title: "Card 1", desc: "Descripción 1" },
    { title: "Card 2", desc: "Descripción 2" },
    { title: "Card 3", desc: "Descripción 3" },
  ];

  test("Renderiza todas las tarjetas con título y descripción", () => {
    const { container } = render(<AboutCards data={mockData} />);

    // Verifica títulos
    mockData.forEach((card) => {
      expect(screen.getByText(card.title)).toBeInTheDocument();
    });

    // Verifica descripciones
    mockData.forEach((card) => {
      expect(screen.getByText(card.desc)).toBeInTheDocument();
    });

    // Verifica cantidad de tarjetas
    const cards = container.querySelectorAll(".rounded-2xl");
    expect(cards.length).toBe(mockData.length);
  });
});
