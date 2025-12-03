import { describe, it, expect } from "vitest";
import { registerSchema } from "../../../schemas/register"; // ajusta la ruta real
import { ZodError } from "zod";

describe("registerSchema", () => {
  it("valida un registro correcto", () => {
    const data = {
      nombre: "Juan Pérez",
      cedula: "1234567",
      correo: "juan@example.com",
      contrasena: "123456",
      contrasena2: "123456",
      genero: "masculino",
    };
    expect(() => registerSchema.parse(data)).not.toThrow();
  });

  it("falla si el nombre es muy corto", () => {
    const data = { nombre: "Ju", cedula: "1234567", correo: "juan@example.com", contrasena: "123456", contrasena2: "123456", genero: "masculino" };
    try {
      registerSchema.parse(data);
    } catch (e) {
      const err = e as ZodError;
      expect(err.issues[0].message).toBe("El nombre debe tener al menos 3 caracteres");
    }
  });

  it("falla si la cédula es muy corta", () => {
    const data = { nombre: "Juan", cedula: "123", correo: "juan@example.com", contrasena: "123456", contrasena2: "123456", genero: "masculino" };
    try {
      registerSchema.parse(data);
    } catch (e) {
      const err = e as ZodError;
      expect(err.issues[0].message).toBe("La cédula debe tener al menos 7 dígitos");
    }
  });

  it("falla si la cédula contiene letras", () => {
    const data = { nombre: "Juan", cedula: "123abc456", correo: "juan@example.com", contrasena: "123456", contrasena2: "123456", genero: "masculino" };
    try {
      registerSchema.parse(data);
    } catch (e) {
      const err = e as ZodError;
      expect(err.issues[0].message).toBe("La cédula solo debe contener números");
    }
  });

  it("falla si el correo es inválido", () => {
    const data = { nombre: "Juan", cedula: "1234567", correo: "juanexample.com", contrasena: "123456", contrasena2: "123456", genero: "masculino" };
    try {
      registerSchema.parse(data);
    } catch (e) {
      const err = e as ZodError;
      expect(err.issues[0].message).toBe("Ingresa un correo electrónico válido");
    }
  });

  it("falla si la contraseña es muy corta", () => {
    const data = { nombre: "Juan", cedula: "1234567", correo: "juan@example.com", contrasena: "123", contrasena2: "123", genero: "masculino" };
    try {
      registerSchema.parse(data);
    } catch (e) {
      const err = e as ZodError;
      expect(err.issues[0].message).toBe("La contraseña debe tener mínimo 6 caracteres");
    }
  });

  it("falla si las contraseñas no coinciden", () => {
    const data = { nombre: "Juan", cedula: "1234567", correo: "juan@example.com", contrasena: "123456", contrasena2: "654321", genero: "masculino" };
    try {
      registerSchema.parse(data);
    } catch (e) {
      const err = e as ZodError;
      const messages = err.issues.map(issue => issue.message);
      expect(messages).toContain("Las contraseñas no coinciden");
    }
  });

  it("falla si el género es inválido", () => {
    const data = { nombre: "Juan", cedula: "1234567", correo: "juan@example.com", contrasena: "123456", contrasena2: "123456", genero: "otro" as any };
    try {
      registerSchema.parse(data);
    } catch (e) {
      const err = e as ZodError;
      expect(err.issues[0].message).toBe("Debes seleccionar un género válido");
    }
  });
});
