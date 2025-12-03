import { render, screen } from "@testing-library/react";
import About from "../../about/page";
import { vi } from "vitest";

// Mock EXACTOS según las rutas reales
vi.mock("../../../components/organisms/AboutComponent", () => ({
  __esModule: true,
  default: () => <div data-testid="about-component">Mock About</div>,
}));

vi.mock("../../../components/organisms/Footer", () => ({
  __esModule: true,
  default: () => <div data-testid="footer-component">Mock Footer</div>,
}));

describe("About Page", () => {
  it("renderiza el AboutComponent", () => {
    render(<About />);
    expect(screen.getByTestId("about-component")).toBeInTheDocument();
  });

  it("renderiza el FooterComponent", () => {
    render(<About />);
    expect(screen.getByTestId("footer-component")).toBeInTheDocument();
  });
});
