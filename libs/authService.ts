import { BiBody } from "react-icons/bi"
import { apiFetch } from "./singletonFetch"

import { LoginDTO } from "@/interfaces/user"

export const loginService = (body: LoginDTO) => {

  return apiFetch('/usuarios/login', 'POST', body)
}

export const registerService = (body: LoginDTO) => {

  return apiFetch('/usuarios/registro', 'POST', body)
}

export const getProfileByIdService = (id: string) => {

  return apiFetch(`/usuarios/${id}`, 'GET', id)
}