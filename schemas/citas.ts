// src/schemas/citas.ts
import { z } from "zod";

export const crearCitaSchema = z.object({
  id_usuario: z.number(),
  id_medico: z.number(),
  id_especialidad: z.number(),
  fecha: z.string().min(1),
  hora: z.string().min(1),
});

export const reprogramarCitaSchema = z.object({
  fecha: z.string().optional(),
  hora: z.string().optional(),
  id_medico: z.number().optional(),
});

export type CrearCitaInput = z.input<typeof crearCitaSchema>;
export type CrearCitaOutput = z.infer<typeof crearCitaSchema>;

export type ReprogramarCitaInput = z.input<typeof reprogramarCitaSchema>;
export type ReprogramarCitaOutput = z.infer<typeof reprogramarCitaSchema>;
