import { z } from 'zod'

export const qaSchema = z.object({

        email: z.string().email({ message: "Correo electrónico inválido" }),
        name: z.string().min(3, { message: "Debe ingresar el nombre completo" }),
        text: z.string().min(10, { message: "Las observaciones debe tener al menos 10 caracteres" }),

})