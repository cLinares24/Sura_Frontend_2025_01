"use client";

import { useState } from "react";
import { useUsers } from "../../context/UsersContext";
import { UserCard } from "../../components/atoms/UserCard";
import { ConfirmDeleteModal } from "../../components/atoms/ConfirmDeleteModal";
import { UserAdminDTO } from "@/interfaces/user";

export const UserList = ({
  onEdit,
  columnas,
}: {
  onEdit: (u: any) => void;
  columnas: number;
}) => {
  const { usuarios, eliminarUsuario } = useUsers();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const pedirConfirmacion = (u: any) => {
    setSelectedUser(u);
    setModalOpen(true);
  };

  const confirmarEliminacion = () => {
    if (!selectedUser) return;

    eliminarUsuario(selectedUser.id_usuario);
    setModalOpen(false);
  };

  if (usuarios.length === 0) {
    return (
      <div className="mt-4 p-6 bg-white shadow-xl rounded-xl text-center text-gray-500 flex flex-col items-center justify-center gap-2">
        <p className="italic">No hay usuarios registrados</p>
      </div>
    );
  }

  return (
    <div className="text-center mb-20">
      <div className="flex items-center gap-3  mb-3">
        <span className="w-1 h-9 bg-[#0db26b] rounded-full"></span>
        <h2 className="font-bold text-3xl text-[#0db26b]">Usuarios</h2>
      </div>

      <div
        className="grid gap-4 mt-4"
        style={{
          gridTemplateColumns: `repeat(${columnas}, minmax(0, 1fr))`,
        }}
      >
        {usuarios.map((u: UserAdminDTO) => (
          <UserCard
            key={u.cedula}
            u={u}
            onEdit={() => onEdit(u)}
            onDelete={() => pedirConfirmacion(u)}
          />
        ))}
      </div>

      <ConfirmDeleteModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={confirmarEliminacion}
        name={selectedUser?.nombre}
        title="Eliminar Usuario"
        message="¿Seguro que deseas eliminar "
        boton="Eliminar"
      />
    </div>
  );
};
