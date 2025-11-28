// import { z } from "zod";

// export const doctorScheme = z.object({
//   cedula: z
//     .string()
//     .min(7, { message: "La cédula debe tener al menos 7 caracteres" })
//     .regex(/^\d+$/, { message: "La cédula solo puede contener números" }),
//   nombre: z
//       .string()
//       .min(3, { message: "El nombre debe tener al menos 3 caracteres" }),
//   telefono: z
//     .string()
//     .min(10, { message: "Debe ingresar un teléfono válido" })
//     .max(10, { message: "Debe ingresar un teléfono válido" })
//     .regex(/^\d+$/, { message: "Debe ingresar un teléfono válido" }),
//   correo: z.string().email({ message: "Debe ingresar un correo válido" }),
// });

// /validations/doctorSchema.ts
import { z } from "zod";

export const doctorSchema = z.object({
  nombre: z.string().min(1, "El nombre es obligatorio"),
  cedula: z.string().min(1, "La cédula es obligatoria"),
  correo: z.string().email("Correo inválido"),
  telefono: z.string().min(4, "El telefono debe de tener 10 digitos"),
  contrasena: z.string().min(4, "La contraseña es obligatoria"),
  id_especialidad: z.number(),
});
