"use client";
import { useUsers } from "@/context/UsersContext";
import { deleteUserService } from "@/libs/userService";

export function UserList({ onEdit, columnas }: any) {
  const { usuarios, loading, reloadUsers } = useUsers();

  if (loading) return <p>Cargando usuarios...</p>;

  async function handleDelete(id: number) {
    if (!confirm("¿Seguro que quieres eliminar este usuario?")) return;
    await deleteUserService(id);
    reloadUsers();
  }

interface Usuario {
  id_usuario: number;
  nombre: string;
  cedula: string;
  correo: string;
  rol: string;
}

return (
  <div className={`grid grid-cols-${columnas} gap-4 mt-6`}>
    {usuarios.map((u: Usuario) => (
      <div key={u.id_usuario} className="bg-white p-4 shadow rounded-lg">
        <h2 className="font-bold">{u.nombre}</h2>
        <p>Cédula: {u.cedula}</p>
        <p>Correo: {u.correo}</p>
        <p>Rol: {u.rol}</p>

        <div className="flex gap-3 mt-2">
          <button
            onClick={() => onEdit(u)}
            className="px-3 py-1 bg-blue-500 text-white rounded"
          >
            Editar
          </button>

          <button
            onClick={() => handleDelete(u.id_usuario)}
            className="px-3 py-1 bg-red-500 text-white rounded"
          >
            Eliminar
          </button>
        </div>
      </div>
    ))}
  </div>
);

}
