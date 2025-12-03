import { z } from "zod";

export const specialitySchema = z.object({
  nombre: z.string().min(1, "El nombre no puede estar vacío"),
});
