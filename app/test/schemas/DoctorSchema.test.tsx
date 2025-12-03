import { describe, it, expect } from "vitest";
import { doctorCreateSchema } from "../../../schemas/doctor"; // ajusta ruta real
import { ZodError } from "zod";

describe("doctorCreateSchema", () => {
  it("valida datos correctos", () => {
    const data = {
      nombre: "Juan Pérez",
      cedula: "123456",
      correo: "juan@example.com",
      telefono: "1234567890",
      id_especialidad: "3",
      contrasena: "1234",
    };

    expect(() => doctorCreateSchema.parse(data)).not.toThrow();
  });

  it("falla si el nombre está vacío", () => {
    try {
      doctorCreateSchema.parse({
        nombre: "",
        cedula: "123",
        correo: "a@a.com",
        telefono: "1",
        id_especialidad: "1",
      });
    } catch (e) {
      const err = e as ZodError;
      expect(err.issues[0].message).toBe("El nombre es obligatorio");
    }
  });

  it("falla si la cédula está vacía", () => {
    try {
      doctorCreateSchema.parse({
        nombre: "Juan",
        cedula: "",
        correo: "a@a.com",
        telefono: "1",
        id_especialidad: "1",
      });
    } catch (e) {
      const err = e as ZodError;
      expect(err.issues[0].message).toBe("La cédula es obligatoria");
    }
  });

  it("falla si el correo es inválido", () => {
    try {
      doctorCreateSchema.parse({
        nombre: "Juan",
        cedula: "123",
        correo: "correoInvalido",
        telefono: "1",
        id_especialidad: "1",
      });
    } catch (e) {
      const err = e as ZodError;
      expect(err.issues[0].message).toBe("Correo inválido");
    }
  });

  it("falla si el teléfono está vacío", () => {
    try {
      doctorCreateSchema.parse({
        nombre: "Juan",
        cedula: "123",
        correo: "juan@ejemplo.com",
        telefono: "",
        id_especialidad: "3",
      });
    } catch (e) {
      const err = e as ZodError;
      expect(err.issues[0].message).toBe("El teléfono es obligatorio");
    }
  });

  it("falla si no se selecciona una especialidad", () => {
    try {
      doctorCreateSchema.parse({
        nombre: "Juan",
        cedula: "123",
        correo: "a@a.com",
        telefono: "123",
        id_especialidad: "",
      });
    } catch (e) {
      const err = e as ZodError;
      expect(err.issues[0].message).toBe("Seleccione una especialidad");
    }
  });

  it("falla si la especialidad no es un número válido", () => {
    try {
      doctorCreateSchema.parse({
        nombre: "Juan",
        cedula: "123",
        correo: "a@a.com",
        telefono: "123",
        id_especialidad: "abc",
      });
    } catch (e) {
      const err = e as ZodError;
      expect(err.issues[0].message).toBe(
        "La especialidad debe ser un número"
      );
    }
  });

  it("permite que la contraseña sea opcional", () => {
    const data = {
      nombre: "Juan",
      cedula: "123",
      correo: "juan@example.com",
      telefono: "123456",
      id_especialidad: "2",
    };

    expect(() => doctorCreateSchema.parse(data)).not.toThrow();
  });
});
