import { apiFetch } from "./singletonFetch";

const BASE = "/notificaciones";

export const enviarConfirmacionService = (body: any) => {
  return apiFetch(`${BASE}/cita-confirmada`, "POST", body);
};

export const enviarRecordatorioService = (body: any) => {
  return apiFetch(`${BASE}/recordatorio`, "POST", body);
};

export const enviarCambioService = (body: any) => {
  return apiFetch(`${BASE}/cita-cambio`, "POST", body);
};

export const enviarCancelacionService = (body: any) => {
  return apiFetch(`${BASE}/cita-cancelada`, "POST", body);
};
