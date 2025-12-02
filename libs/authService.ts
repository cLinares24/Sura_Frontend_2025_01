import { BiBody } from "react-icons/bi"
import { apiFetch } from "./singletonFetch"
import Cookies from "js-cookie"
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

export const editUserService = (id_user: number, data: any) => {
  return apiFetch(`/usuarios/${id_user}`, 'PUT', data)
}
