import { z } from "zod";

export const doctorScheme = z.object({
  cedula: z
    .string()
    .min(7, { message: "La cédula debe tener al menos 7 caracteres" })
    .regex(/^\d+$/, { message: "La cédula solo puede contener números" }),
  nombre: z
      .string()
      .min(3, { message: "El nombre debe tener al menos 3 caracteres" }),
  telefono: z
    .string()
    .min(10, { message: "Debe ingresar un teléfono válido" })
    .max(10, { message: "Debe ingresar un teléfono válido" })
    .regex(/^\d+$/, { message: "Debe ingresar un teléfono válido" }),
  correo: z.string().email({ message: "Debe ingresar un correo válido" }),
});

