import { render, screen } from "@testing-library/react";
import Departaments from "../../../app/departaments/page";
import { vi } from "vitest";

// Mock de los componentes según rutas reales
vi.mock("../../../components/organisms/DepartamentsComponent", () => ({
  __esModule: true,
  default: () => <div data-testid="departaments-component">Mock Departaments</div>,
}));

vi.mock("../../../components/organisms/Footer", () => ({
  __esModule: true,
  default: () => <div data-testid="footer-component">Mock Footer</div>,
}));

describe("Departaments Page", () => {
  it("renderiza el DepartamentsComponent", () => {
    render(<Departaments />);
    expect(screen.getByTestId("departaments-component")).toBeInTheDocument();
  });

  it("renderiza el FooterComponent", () => {
    render(<Departaments />);
    expect(screen.getByTestId("footer-component")).toBeInTheDocument();
  });
});
