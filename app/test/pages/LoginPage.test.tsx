import { render, screen } from "@testing-library/react";
import Home from "../../../app/login/page";
import { vi } from "vitest";

// MOCK del componente EXACTAMENTE con la misma ruta
vi.mock("../../../components/molecules/LoginComponent", () => ({
  __esModule: true,
  default: () => <div data-testid="login-component">Mock Login</div>,
}));

describe("Home Page (Login)", () => {
  it("renderiza el LoginComponent", () => {
    render(<Home />);
    const login = screen.getByTestId("login-component");
    expect(login).toBeInTheDocument();
  });
});
