"use client";
import { useState } from "react";
import { editUserByIdService } from "@/libs/userService";
import { useUsers } from "@/context/UsersContext";

export function EditUserModal({ user, onClose }: any) {
  const { reloadUsers } = useUsers();

  const [form, setForm] = useState({
    nombre: user.nombre,
    correo: user.correo,
    rol: user.rol,
  });

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit() {
    await editUserByIdService(user.id_usuario, form);
    reloadUsers();
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-[400px]">
        <h2 className="text-xl font-bold mb-4">Editar Usuario</h2>

        <input
          name="nombre"
          className="input"
          value={form.nombre}
          onChange={handleChange}
        />
        <input
          name="correo"
          className="input mt-2"
          value={form.correo}
          onChange={handleChange}
        />
        <input
          name="rol"
          className="input mt-2"
          value={form.rol}
          onChange={handleChange}
        />

        <div className="flex justify-end gap-3 mt-4">
          <button onClick={onClose} className="px-3 py-1 bg-gray-300 rounded">
            Cancelar
          </button>
          <button onClick={handleSubmit} className="px-3 py-1 bg-green-500 text-white rounded">
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}
