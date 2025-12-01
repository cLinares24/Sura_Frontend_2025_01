// // 
// import { z } from "zod";

// /* ============================================================
//    🟦 Schema general de un médico (para editar o mostrar)
//    ============================================================ */
// export const doctorSchema = z.object({
//   nombre: z.string().min(1, "El nombre es obligatorio"),
//   cedula: z.string().min(1, "La cédula es obligatoria"),
//   correo: z.string().email("Correo inválido"),
//   telefono: z.string().min(4, "El teléfono debe de tener 10 dígitos"),
//   contrasena: z.string().min(4, "La contraseña es obligatoria"),
//   id_especialidad: z.number(),
// });

// /* ============================================================
//    🟩 Schema para CREAR médico (formulario)
//    - el usuario envía id_especialidad como string
//    - Zod lo transforma a number
//    ============================================================ */
// export const doctorCreateSchema = z.object({
//   nombre: z.string().min(1, "El nombre es obligatorio"),
//   cedula: z.string().min(1, "La cédula es obligatoria"),
//   correo: z.string().email("Correo inválido"),
//   telefono: z.string().min(1, "El teléfono es obligatorio"),

//   id_especialidad: z
//     .string()
//     .min(1, "Seleccione una especialidad")
//     .transform((val) => Number(val))
//     .refine((n) => !isNaN(n), "La especialidad debe ser un número"),

//   contrasena: z.string().optional(),
// });

/* ============================================================
   🟨 Schema para editar médico
   ============================================================ */
export const doctorEditSchema = z.object({
  nombre: z.string().optional(),
  cedula: z.string().optional(),
  correo: z.string().email("Correo inválido").optional(),
  telefono: z.string().optional(),
});

// /* ============================================================
//    🟪 TIPOS (sin conflictos)
//    ============================================================ */

// // Valores EXACTOS que tiene un médico (útil en edición)
// export type DoctorFormValues = z.infer<typeof doctorSchema>;

// // 🎯 LO QUE ENTRA AL FORMULARIO (antes del transform)
// export type DoctorCreateInput = z.input<typeof doctorCreateSchema>;

// // 🎯 LO QUE SALE DEL RESOLVER (ya transformado → id_especialidad: number)
// export type DoctorCreateOutput = z.infer<typeof doctorCreateSchema>;

// // Para editar
// export type DoctorEditFormValues = z.infer<typeof doctorEditSchema>;


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
