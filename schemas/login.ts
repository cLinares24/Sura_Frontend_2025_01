import { z } from 'zod'

export const loginScheme = z.object({
          correo: z.string().email({ message: "Debe ingresar un correo válido" }),
    contrasena: z
      .string()
      .min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
})