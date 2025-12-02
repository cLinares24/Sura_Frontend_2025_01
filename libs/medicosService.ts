import { apiFetch } from "./singletonFetch";

export const getAllMedicosService = () => {
  return apiFetch("/admin/medicos", "GET");
};

export const deleteMedicoService = (id: number) => {
  return apiFetch(`/admin/medicos/${id}`, "DELETE");
};

export const createMedicoService = (body: any) => {
  console.log("Mandando")
  return apiFetch("/medicos/registro", "POST", body);
};

export const updateMedicoService = (id: number, body: any) => {
  return apiFetch(`/admin/medicos/${id}`, "PUT", body);
};
