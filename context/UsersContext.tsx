"use client";
import { createContext, useState, useContext, ReactNode } from "react";

export interface UserDTO {
  cedula: string;
  genero: "M" | "F";
  nombre: string;
  correo: string;
  contrasena: string;
  contrasena2: string;
  rol: "A" | "U"; // Admin, User
}

interface UsersContextProps {
  usuarios: UserDTO[];
  agregarUsuario: (u: UserDTO) => void;
  editarUsuario: (u: UserDTO) => void;
  eliminarUsuario: (cedula: string) => void;
}

const UsersContext = createContext<UsersContextProps | null>(null);
export const useUsuarios = () => useContext(UsersContext)!;

export const UsersProvider = ({ children }: { children: ReactNode }) => {
  const [usuarios, setUsuarios] = useState<UserDTO[]>([
    {
      cedula: "101010",
      genero: "M",
      nombre: "Carlos Gómez",
      correo: "carlos@example.com",
      contrasena: "123",
      contrasena2: "123",
      rol: "A",
    },
    {
      cedula: "202020",
      genero: "F",
      nombre: "Laura Martínez",
      correo: "laura@example.com",
      contrasena: "abc",
      contrasena2: "abc",
      rol: "U",
    },
    {
      cedula: "303030",
      genero: "M",
      nombre: "José Rodríguez",
      correo: "jose@example.com",
      contrasena: "xyz",
      contrasena2: "xyz",
      rol: "U",
    },
  ]);

  const agregarUsuario = (u: UserDTO) =>
    setUsuarios([...usuarios, u]);

  const editarUsuario = (editado: UserDTO) =>
    setUsuarios(
      usuarios.map((u) => (u.cedula === editado.cedula ? editado : u))
    );

  const eliminarUsuario = (cedula: string) =>
    setUsuarios(usuarios.filter((u) => u.cedula !== cedula));

  return (
    <UsersContext.Provider
      value={{ usuarios, agregarUsuario, editarUsuario, eliminarUsuario }}
    >
      {children}
    </UsersContext.Provider>
  );
};
