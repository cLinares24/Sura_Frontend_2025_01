// /libs/specialitiesService.ts
import { apiFetch } from "./singletonFetch";

export const getSpecialitiesService = () => {
  return apiFetch("/citas/especialidades", "GET");
};

export const createSpecialityService = (body: { nombre: string }) => {
  return apiFetch("/citas/especialidades", "POST", body);
};
