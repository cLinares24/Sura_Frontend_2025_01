import { render, screen } from "@testing-library/react";
import Doctors from "../../../app/doctors/page";
import { vi } from "vitest";

// Mock de los componentes según rutas reales
vi.mock("../../../components/organisms/AdminBarComponent", () => ({
  __esModule: true,
  default: () => <div data-testid="adminbar-component">Mock AdminBar</div>,
}));

vi.mock("../../../components/organisms/DoctorComponent", () => ({
  __esModule: true,
  default: () => <div data-testid="doctor-component">Mock Doctor</div>,
}));

vi.mock("../../../components/organisms/Footer", () => ({
  __esModule: true,
  default: () => <div data-testid="footer-component">Mock Footer</div>,
}));

describe("Home Page", () => {
  it("renderiza el AdminBarComponent", () => {
    render(<Doctors />);
    expect(screen.getByTestId("adminbar-component")).toBeInTheDocument();
  });

  it("renderiza el DoctorComponent", () => {
    render(<Doctors />);
    expect(screen.getByTestId("doctor-component")).toBeInTheDocument();
  });

  it("renderiza el Footer", () => {
    render(<Doctors />);
    expect(screen.getByTestId("footer-component")).toBeInTheDocument();
  });
});
