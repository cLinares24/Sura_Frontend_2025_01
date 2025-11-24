import { apiFetch } from "./singletonFetch";
import { QADTO } from "@/interfaces/QADTO";

export const sendQAService = (body: QADTO) => {
  return apiFetch("/dudas/", "POST", body);
};

export const getAllQAService = () => {
  return apiFetch("/dudas/", "GET");
};

export const deleteQAService = (id: number) => {
  return apiFetch(`/dudas/${id}`, "DELETE");
};
