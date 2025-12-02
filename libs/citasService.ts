// import { apiFetch } from "./singletonFetch";
// import { CrearCitaOutput, ReprogramarCitaInput } from "@/schemas/citas";


// export const getCitasDisponiblesService = (id_especialidad: number, fecha: string) => {
//   return apiFetch(`/citas/disponibles/${id_especialidad}?fecha=${fecha}`, "GET");
// };

// export const crearCitaService = (body: CrearCitaOutput) => {
//   return apiFetch('/citas/', "POST", body);
// };

// export const eliminarCitaService = (id_cita: number) => {
//   return apiFetch(`/citas/citas/${id_cita}`, "DELETE");
// };

// export const reprogramarCitaService = (id_cita: number, body: ReprogramarCitaInput) => {
//   return apiFetch(`/citas/citas/${id_cita}/reprogramar`, "PUT", body);
// };

// export const confirmarCitaService = (id_cita: number) => {
//   return apiFetch(`/citas/citas/${id_cita}/confirmar`, "PUT");
// };


// src/libs/citasService.ts
import { apiFetch } from "./singletonFetch";
import { CrearCitaOutput, ReprogramarCitaInput } from "@/schemas/citas";

export const getCitasDisponiblesService = (id_especialidad: number, fecha: string) => {
  return apiFetch(`/citas/disponibles/${id_especialidad}?fecha=${fecha}`, "GET");
};

export const crearCitaService = (body: CrearCitaOutput) => {
  return apiFetch('/citas/', "POST", body);
};

export const eliminarCitaService = (id_cita: number) => {
  return apiFetch(`/citas/citas/${id_cita}`, "DELETE");
};

export const reprogramarCitaService = (id_cita: number, body: ReprogramarCitaInput) => {
  return apiFetch(`/citas/citas/${id_cita}/reprogramar`, "PUT", body);
};

export const confirmarCitaService = (id_cita: number) => {
  return apiFetch(`/citas/citas/${id_cita}/confirmar`, "PUT");
};


// ---------------------------------------------------------
// 🚀 NUEVOS SERVICIOS DE NOTIFICACIONES (NO REEMPLAZA NADA)
// ---------------------------------------------------------

export const correoConfirmacionService = (body: any) => {
  return apiFetch('/notificaciones/cita-confirmada', "POST", body);
};

export const correoRecordatorioService = (body: any) => {
  return apiFetch('/notificaciones/recordatorio', "POST", body);
};

export const correoCancelacionService = (body: any) => {
  return apiFetch('/notificaciones/cita-cancelada', "POST", body);
};

export const correoCambioService = (body: any) => {
  return apiFetch('/notificaciones/cita-cambio', "POST", body);
};
