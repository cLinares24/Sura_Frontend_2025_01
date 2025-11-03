import { z } from 'zod'

export const loginScheme = z.object({
        user: z.string(),
       password: z.string()
          .min(4, { message: "Se requiere minimo 5 caracteres" })
})