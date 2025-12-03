import { render, screen } from "@testing-library/react";
import Contact from "../../contact/page";
import { vi } from "vitest";

// Mock de los componentes según rutas reales
vi.mock("../../../components/organisms/ContactComponent", () => ({
  __esModule: true,
  default: () => <div data-testid="contact-component">Mock Contact</div>,
}));

vi.mock("../../../components/organisms/Footer", () => ({
  __esModule: true,
  default: () => <div data-testid="footer-component">Mock Footer</div>,
}));

describe("Departaments Page", () => {
  it("renderiza el ContactComponent", () => {
    render(<Contact />);
    expect(screen.getByTestId("contact-component")).toBeInTheDocument();
  });

  it("renderiza el FooterComponent", () => {
    render(<Contact />);
    expect(screen.getByTestId("footer-component")).toBeInTheDocument();
  });
});
