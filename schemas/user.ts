// src/schemas/editUser.ts
import { z } from "zod";

export const userSchema = z.object({
  cedula: z
      .string()
      .min(7, { message: "La cédula debe tener al menos 7 caracteres" })
      .regex(/^\d+$/, { message: "La cédula solo puede contener números" }),
    genero: z.enum(["masculino", "femenino"], { message: "Debe seleccionar un género válido" }),
    nombre: z
      .string()
      .min(3, { message: "El nombre debe tener al menos 3 caracteres" }),
    correo: z.string().email({ message: "Debe ingresar un correo válido" }),
    rol: z.enum(["paciente"], {
  message: "Debe seleccionar un rol válido",
}),

});
