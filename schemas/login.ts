import { z } from 'zod'

export const loginScheme = z.object({
        correo: z.string(),
       contrasena: z.string()
          .min(4, { message: "Se requiere minimo 5 caracteres" })
})