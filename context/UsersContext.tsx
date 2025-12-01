"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {
  getAllUsersService,
  editUserByIdService,
  deleteUserService,
} from "@/libs/userService";
import { UserAdminDTO } from "@/interfaces/user";

const UsersContext = createContext<any>(null);

export function UsersProvider({ children }: { children: React.ReactNode }) {
  const [usuarios, setUsuarios] = useState<UserAdminDTO[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadUsers() {
    setLoading(true);
    const data = await getAllUsersService();
    setUsuarios(data);
    setLoading(false);
  }

  async function editarUsuario(data: UserAdminDTO) {
    await editUserByIdService(data.id_usuario, {
      nombre: data.nombre,
      correo: data.correo,
      cedula: data.cedula,

      rol: data.rol,
    });
    await loadUsers();
  }

  async function eliminarUsuario(id: number) {
    await deleteUserService(id);
    await loadUsers();
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <UsersContext.Provider
      value={{ usuarios, loading, editarUsuario, eliminarUsuario, reloadUsers: loadUsers }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  return useContext(UsersContext);
}
