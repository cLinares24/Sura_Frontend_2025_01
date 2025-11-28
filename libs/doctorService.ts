import { apiFetch } from "./singletonFetch";

export const registerDoctorService = (body: any) => {
    console.log("El body para el medico es: ", body)
  return apiFetch("/medicos/registro", "POST", body);
};
