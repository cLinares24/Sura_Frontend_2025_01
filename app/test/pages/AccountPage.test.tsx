import { render, screen } from "@testing-library/react";
import Home from "../../../app/account/page";
import { vi } from "vitest";

// MOCK del componente EXACTAMENTE con la misma ruta
vi.mock("../../../components/molecules/AccountComponent", () => ({
  __esModule: true,
  default: () => <div data-testid="account-component">Mock Account</div>,
}));

describe("Home Page (Account)", () => {
  it("renderiza el AccountComponent", () => {
    render(<Home />);
    const account = screen.getByTestId("account-component");
    expect(account).toBeInTheDocument();
  });
});
