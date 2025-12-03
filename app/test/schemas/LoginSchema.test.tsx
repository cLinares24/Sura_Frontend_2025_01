import { describe, it, expect } from "vitest";
import { loginScheme } from "../../../schemas/login";
import { ZodError } from "zod";

describe("loginScheme", () => {
  it("valida un login correcto", () => {
    const data = { correo: "juan@example.com", contrasena: "123456" };
    expect(() => loginScheme.parse(data)).not.toThrow();
  });

  it("falla si el correo no es válido", () => {
    const data = { correo: "juanexample.com", contrasena: "123456" };
    try {
      loginScheme.parse(data);
    } catch (e) {
      const err = e as ZodError;
      expect(err.issues[0].message).toBe("Debe ingresar un correo válido");
    }
  });

  it("falla si la contraseña es muy corta", () => {
    const data = { correo: "juan@example.com", contrasena: "123" };
    try {
      loginScheme.parse(data);
    } catch (e) {
      const err = e as ZodError;
      expect(err.issues[0].message).toBe("La contraseña debe tener al menos 6 caracteres");
    }
  });

  it("falla si ambos campos son inválidos", () => {
    const data = { correo: "juanexample.com", contrasena: "123" };
    try {
      loginScheme.parse(data);
    } catch (e) {
      const err = e as ZodError;
      const messages = err.issues.map(issue => issue.message);
      expect(messages).toContain("Debe ingresar un correo válido");
      expect(messages).toContain("La contraseña debe tener al menos 6 caracteres");
    }
  });
});
