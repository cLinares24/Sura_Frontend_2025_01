"use client";

import { useState } from "react";
import { useUsuarios } from "@/context/UsersContext";
import { UserCard } from "@/components/atoms/UserCard";
import { ConfirmDeleteModal } from "@/components/atoms/ConfirmDeleteModal";

export const UserList = ({
  onEdit,
  columnas, 
}: {
  onEdit: (u: any) => void;
  columnas: number;
}) => {
  const { usuarios, eliminarUsuario } = useUsuarios();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const pedirConfirmacion = (u: any) => {
    setSelectedUser(u);
    setModalOpen(true);
  };

  const confirmarEliminacion = () => {
    if (!selectedUser) return;

    eliminarUsuario(selectedUser.cedula);
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
    <div className="text-center">
      <h2 className="font-bold text-2xl text-[#0db26b]">Usuarios</h2>

      <div
        className="grid gap-4 mt-4"
        style={{
          gridTemplateColumns: `repeat(${columnas}, minmax(0, 1fr))`,
        }}
      >
        {usuarios.map((u) => (
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
