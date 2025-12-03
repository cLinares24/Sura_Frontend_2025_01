import { z } from "zod";

export const registerSchema = z
  .object({
    nombre: z
      .string()
      .min(3, { message: "El nombre debe tener al menos 3 caracteres" }),

    cedula: z
      .string()
      .min(7, { message: "La cédula debe tener al menos 7 dígitos" })
      .regex(/^\d+$/, { message: "La cédula solo debe contener números" }),

    correo: z
      .string()
      .email({ message: "Ingresa un correo electrónico válido" }),

    contrasena: z
      .string()
      .min(6, { message: "La contraseña debe tener mínimo 6 caracteres" }),

    contrasena2: z.string({
      
    }),

    genero: z.enum(["masculino", "femenino"], {
      message: "Debes seleccionar un género válido",
    }),
  })
  .refine((d) => d.contrasena === d.contrasena2, {
    message: "Las contraseñas no coinciden",
    path: ["contrasena2"],
  });


  export type RegisterSchemaType = z.infer<typeof registerSchema>