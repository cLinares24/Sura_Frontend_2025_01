import { apiFetch } from "./singletonFetch";

export const registerDoctorService = (body: any) => {
    // console.log("El body para el medico es: ", body)
  return apiFetch("/medicos/registro", "POST", body);
};


export const getDoctorsBySpecialityService = (id_especialidad: number) => {
  return apiFetch(`/medicos/especialidad/${id_especialidad}`, "GET");
};
