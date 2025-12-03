import { describe, it, expect } from "vitest";
import { doctorScheme } from "../../../schemas/doctor"; // ajusta la ruta real
import { ZodError } from "zod";

describe("doctorScheme", () => {
  it("valida datos correctos", () => {
    const data = {
      cedula: "1234567",
      nombre: "Juan Pérez",
      telefono: "1234567890",
      correo: "juan@example.com",
    };
    expect(() => doctorScheme.parse(data)).not.toThrow();
  });

  it("falla si la cédula es muy corta", () => {
    const data = {
      cedula: "123",
      nombre: "Juan Pérez",
      telefono: "1234567890",
      correo: "juan@example.com",
    };
    try {
      doctorScheme.parse(data);
    } catch (e) {
      const err = e as ZodError;
      expect(err.issues[0].message).toBe(
        "La cédula debe tener al menos 7 caracteres"
      );
    }
  });

  it("falla si la cédula contiene letras", () => {
    const data = {
      cedula: "123abc456",
      nombre: "Juan Pérez",
      telefono: "1234567890",
      correo: "juan@example.com",
    };
    try {
      doctorScheme.parse(data);
    } catch (e) {
      const err = e as ZodError;
      expect(err.issues[0].message).toBe(
        "La cédula solo puede contener números"
      );
    }
  });

  it("falla si el nombre es muy corto", () => {
    const data = {
      cedula: "1234567",
      nombre: "Ju",
      telefono: "1234567890",
      correo: "juan@example.com",
    };
    try {
      doctorScheme.parse(data);
    } catch (e) {
      const err = e as ZodError;
      expect(err.issues[0].message).toBe(
        "El nombre debe tener al menos 3 caracteres"
      );
    }
  });

  it("falla si el teléfono es inválido", () => {
    const invalidPhones = ["12345", "12345678901", "12345abcde"];
    for (const tel of invalidPhones) {
      try {
        doctorScheme.parse({
          cedula: "1234567",
          nombre: "Juan Pérez",
          telefono: tel,
          correo: "juan@example.com",
        });
      } catch (e) {
        const err = e as ZodError;
        expect(err.issues[0].message).toBe("Debe ingresar un teléfono válido");
      }
    }
  });

  it("falla si el correo es inválido", () => {
    const data = {
      cedula: "1234567",
      nombre: "Juan Pérez",
      telefono: "1234567890",
      correo: "juanexample.com",
    };
    try {
      doctorScheme.parse(data);
    } catch (e) {
      const err = e as ZodError;
      expect(err.issues[0].message).toBe("Debe ingresar un correo válido");
    }
  });

  it("falla si hay varios campos inválidos a la vez", () => {
    const data = {
      cedula: "123abc",
      nombre: "Ju",
      telefono: "12345abc",
      correo: "juanexample.com",
    };
    try {
      doctorScheme.parse(data);
    } catch (e) {
      const err = e as ZodError;
      const messages = err.issues.map((issue) => issue.message);
      expect(messages).toContain("La cédula debe tener al menos 7 caracteres");
      expect(messages).toContain("La cédula solo puede contener números");
      expect(messages).toContain("El nombre debe tener al menos 3 caracteres");
      expect(messages).toContain("Debe ingresar un teléfono válido");
      expect(messages).toContain("Debe ingresar un correo válido");
    }
  });
});
