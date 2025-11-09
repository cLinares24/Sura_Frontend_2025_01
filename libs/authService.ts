import { BiBody } from "react-icons/bi"
import { apiFetch } from "./singletonFetch"

import { LoginDTO } from "@/interfaces/user"

export const loginService = (body: LoginDTO) => {

  return apiFetch('/auth/login', 'POST', body)
}
