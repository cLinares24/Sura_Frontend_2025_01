// src/schemas/register.ts
import { z } from "zod";

export const registerSchema = z
  .object({
    cedula: z
      .string()
      .min(7, { message: "La cédula debe tener al menos 7 caracteres" })
      .regex(/^\d+$/, { message: "La cédula solo puede contener números" }),
    genero: z.enum(["M", "F"], { message: "Debe seleccionar un género válido" }),
    nombre: z
      .string()
      .min(3, { message: "El nombre debe tener al menos 3 caracteres" }),
    correo: z.string().email({ message: "Debe ingresar un correo válido" }),
    contrasena: z
      .string()
      .min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
    contrasena2: z.string(),
    rol: z.enum(["A", "U"]),
  })
  .refine((data) => data.contrasena === data.contrasena2, {
    message: "Las contraseñas no coinciden",
    path: ["contrasena2"],
  });
