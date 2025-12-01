// libs/userService.ts
// import { apiFetch } from "./api";
import { apiFetch } from "./singletonFetch";


export async function getAllUsersService(rol?: string) {
  const query = rol ? `?rol=${rol}` : "";
  return await apiFetch(`/admin/usuarios${query}`, "GET");
}

export async function editUserByIdService(id: number, data: any) {
  return await apiFetch(`/admin/usuarios/${id}`, "PUT", data);
}

export async function deleteUserService(id: number) {
  console.log("id de usuario: ", id)
  return await apiFetch(`/admin/usuarios/${id}`, "DELETE");
}
