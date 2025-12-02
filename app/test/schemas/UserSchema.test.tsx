import { describe, it, expect } from "vitest";
import { userSchema } from "../../../schemas/user"; // ajusta la ruta real
import { ZodError } from "zod";

describe("userSchema", () => {
  it("valida un usuario correcto", () => {
    const data = {
      cedula: "1234567",
      genero: "masculino",
      nombre: "Juan Pérez",
      correo: "juan@example.com",
      rol: "paciente",
    };
    expect(() => userSchema.parse(data)).not.toThrow();
  });

  it("falla si la cédula es muy corta", () => {
    const data = { cedula: "123", genero: "masculino", nombre: "Juan", correo: "juan@example.com", rol: "paciente" };
    try {
      userSchema.parse(data);
    } catch (e) {
      const err = e as ZodError;
      expect(err.issues[0].message).toBe("La cédula debe tener al menos 7 caracteres");
    }
  });

  it("falla si la cédula contiene letras", () => {
    const data = { cedula: "123abc456", genero: "masculino", nombre: "Juan", correo: "juan@example.com", rol: "paciente" };
    try {
      userSchema.parse(data);
    } catch (e) {
      const err = e as ZodError;
      expect(err.issues[0].message).toBe("La cédula solo puede contener números");
    }
  });

  it("falla si el género es inválido", () => {
    const data = { cedula: "1234567", genero: "otro" as any, nombre: "Juan", correo: "juan@example.com", rol: "paciente" };
    try {
      userSchema.parse(data);
    } catch (e) {
      const err = e as ZodError;
      expect(err.issues[0].message).toBe("Debe seleccionar un género válido");
    }
  });

  it("falla si el nombre es muy corto", () => {
    const data = { cedula: "1234567", genero: "masculino", nombre: "Ju", correo: "juan@example.com", rol: "paciente" };
    try {
      userSchema.parse(data);
    } catch (e) {
      const err = e as ZodError;
      expect(err.issues[0].message).toBe("El nombre debe tener al menos 3 caracteres");
    }
  });

  it("falla si el correo es inválido", () => {
    const data = { cedula: "1234567", genero: "masculino", nombre: "Juan", correo: "juanexample.com", rol: "paciente" };
    try {
      userSchema.parse(data);
    } catch (e) {
      const err = e as ZodError;
      expect(err.issues[0].message).toBe("Debe ingresar un correo válido");
    }
  });

  it("falla si el rol es inválido", () => {
    const data = { cedula: "1234567", genero: "masculino", nombre: "Juan", correo: "juan@example.com", rol: "admin" as any };
    try {
      userSchema.parse(data);
    } catch (e) {
      const err = e as ZodError;
      expect(err.issues[0].message).toBe("Debe seleccionar un rol válido");
    }
  });
});
