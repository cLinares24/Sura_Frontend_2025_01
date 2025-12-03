import { render, screen } from "@testing-library/react";
import Specialities from "../../../app/specialities/page";
import { vi } from "vitest";

// Mock de los componentes según rutas reales
vi.mock("../../../components/organisms/AdminBarComponent", () => ({
  __esModule: true,
  default: () => <div data-testid="adminbar-component">Mock AdminBar</div>,
}));

vi.mock("../../../components/organisms/SpecialitiesComponent", () => ({
  __esModule: true,
  default: () => <div data-testid="specialities-component">Mock Specialities</div>,
}));

vi.mock("../../../components/organisms/Footer", () => ({
  __esModule: true,
  default: () => <div data-testid="footer-component">Mock Footer</div>,
}));

describe("Specialities Page", () => {
  it("renderiza el AdminBarComponent", () => {
    render(<Specialities />);
    expect(screen.getByTestId("adminbar-component")).toBeInTheDocument();
  });

  it("renderiza el SpecialitiesComponent", () => {
    render(<Specialities />);
    expect(screen.getByTestId("specialities-component")).toBeInTheDocument();
  });

  it("renderiza el Footer", () => {
    render(<Specialities />);
    expect(screen.getByTestId("footer-component")).toBeInTheDocument();
  });
});
