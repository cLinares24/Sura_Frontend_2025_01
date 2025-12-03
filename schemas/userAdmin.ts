import { z } from "zod";

export const userAdminSchema = z.object({
  nombre: z.string().min(3),
  cedula: z.string().min(5),
  correo: z.string().email(),
  rol: z.enum(["paciente", "medico", "admin"]),
});
