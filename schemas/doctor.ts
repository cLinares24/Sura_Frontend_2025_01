

import { z } from "zod";

export const doctorSchema = z.object({
  nombre: z.string().min(1, "El nombre es obligatorio"),
  cedula: z.string().min(1, "La cédula es obligatoria"),
  correo: z.string().email("Correo inválido"),
  telefono: z.string().min(4, "El telefono debe tener 10 dígitos"),
  contrasena: z.string().min(4, "La contraseña es obligatoria"),
  id_especialidad: z.number(),
});

// ⬅ ESQUEMA DE CREAR MÉDICO (el que importa ahora)
export const doctorCreateSchema = z.object({
  nombre: z.string().min(1, "El nombre es obligatorio"),
  cedula: z.string().min(1, "La cédula es obligatoria"),
  correo: z.string().email("Correo inválido"),
  telefono: z.string().min(1, "El teléfono es obligatorio"),

id_especialidad: z
  .union([z.string(), z.number()])
  .refine((v) => String(v).length > 0, "Seleccione una especialidad")
  .transform((v) => Number(v))
  .refine((n) => !isNaN(n), "La especialidad debe ser un número"),


  contrasena: z.string().optional(),
});

// 🔥 clave: el input del form
export type DoctorCreateInput = z.input<typeof doctorCreateSchema>;

// 🔥 lo que sale después del transform
export type DoctorCreateOutput = z.infer<typeof doctorCreateSchema>;
