import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import RegisterPage from "../../register/page";

// Mock del router de Next.js (necesario si RegisterComponent usa useRouter o usePathname)
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
  }),
  usePathname: () => "/register",
}));


vi.mock("../../../components/molecules/RegisterComponent", () => ({
  __esModule: true,
  default: () => (
    <div data-testid="register-component">Mock Register Component</div>
  ),
}));

describe("Register Page", () => {
  test("Renderiza el RegisterComponent", () => {
    render(<RegisterPage />);

    expect(screen.getByTestId("register-component")).toBeInTheDocument();
  });
});
