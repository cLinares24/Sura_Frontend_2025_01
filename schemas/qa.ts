import { z } from 'zod'

export const qaSchema = z.object({
        correo: z.string().email({ message: "Correo electrónico inválido" }),
        nombre: z.string().min(3, { message: "Debe ingresar el nombre completo" }),
        observaciones: z.string().min(10, { message: "Las observaciones debe tener al menos 10 caracteres" }),
})
