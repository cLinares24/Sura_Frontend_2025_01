// src/schemas/register.ts
import { z } from "zod";

export const registerSchema = z
  .object({
    nombre: z.string().min(3),
    cedula: z.string().min(7).regex(/^\d+$/),
    correo: z.string().email(),
    contrasena: z.string().min(6),
    contrasena2: z.string(),
    genero: z.enum(["masculino", "femenino"], {
    message: "Debe seleccionar un género válido",
}),

  })
  .refine((d) => d.contrasena === d.contrasena2, {
    message: "Las contraseñas no coinciden",
    path: ["contrasena2"],
  });


