import { z } from "zod";

export const editUserSchema = z.object({
  nombre: z.string().min(3, { message: "El nombre debe tener al menos 3 caracteres" }),
  cedula: z
    .string()
    .min(7, { message: "La cédula debe tener al menos 7 caracteres" })
    .regex(/^\d+$/, { message: "La cédula solo puede contener números" }),
  correo: z.string().email({ message: "Debe ingresar un correo válido" }),
  genero: z.enum(["masculino", "femenino"], {
    message: "Debe seleccionar un género válido",
  }),
});
