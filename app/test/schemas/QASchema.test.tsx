import { describe, it, expect } from "vitest";
import { qaSchema } from "../../../schemas/qa"; // ajusta la ruta real
import { ZodError } from "zod";

describe("qaSchema", () => {
  it("valida datos correctos", () => {
    const data = {
      correo: "juan@example.com",
      nombre: "Juan Pérez",
      observaciones: "Estas son observaciones válidas",
    };
    expect(() => qaSchema.parse(data)).not.toThrow();
  });

  it("falla si el correo es inválido", () => {
    const data = {
      correo: "juanexample.com",
      nombre: "Juan Pérez",
      observaciones: "Estas son observaciones válidas",
    };
    try {
      qaSchema.parse(data);
    } catch (e) {
      const err = e as ZodError;
      expect(err.issues[0].message).toBe("Correo electrónico inválido");
    }
  });

  it("falla si el nombre es muy corto", () => {
    const data = {
      correo: "juan@example.com",
      nombre: "Ju",
      observaciones: "Estas son observaciones válidas",
    };
    try {
      qaSchema.parse(data);
    } catch (e) {
      const err = e as ZodError;
      expect(err.issues[0].message).toBe("Debe ingresar el nombre completo");
    }
  });

  it("falla si las observaciones son muy cortas", () => {
    const data = {
      correo: "juan@example.com",
      nombre: "Juan Pérez",
      observaciones: "Corto",
    };
    try {
      qaSchema.parse(data);
    } catch (e) {
      const err = e as ZodError;
      expect(err.issues[0].message).toBe(
        "Las observaciones debe tener al menos 10 caracteres"
      );
    }
  });

  it("falla si varios campos son inválidos", () => {
    const data = {
      correo: "juanexample.com",
      nombre: "Ju",
      observaciones: "Corto",
    };
    try {
      qaSchema.parse(data);
    } catch (e) {
      const err = e as ZodError;
      const messages = err.issues.map((issue) => issue.message);
      expect(messages).toContain("Correo electrónico inválido");
      expect(messages).toContain("Debe ingresar el nombre completo");
      expect(messages).toContain(
        "Las observaciones debe tener al menos 10 caracteres"
      );
    }
  });
});
