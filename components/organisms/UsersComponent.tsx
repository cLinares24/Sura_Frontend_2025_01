"use client";
import { UsersProvider } from "@/context/UsersContext";
import { UserList } from "../molecules/UserList";
import { useState } from "react";
import { useColumns } from "@/hooks/useColumns";
import { ColumnSelect } from "../atoms/ColumnSelect";
import { EditUserModal } from "../molecules/EditUserModal";

export default function App() {
  const [editar, setEditar] = useState<any | null>(null);
  const { columnas, setColumnas } = useColumns(1);
  return (
    <UsersProvider>
      <div className="w-full px-6 py-4 min-h-[90vh] bg-gradient-to-br from-[#f5f8ff] to-[#e1ffed]">
        <div className="flex justify-end mt-15 gap-2">
          {/* 🔘 BOTÓN PARA CAMBIAR LA VISTA */}
        <ColumnSelect value={columnas} onChange={setColumnas} />
        </div>

        <UserList onEdit={(u) => setEditar(u)} columnas={columnas} />

          {editar && (
                      <EditUserModal user={editar} onClose={() => setEditar(null)} />
                    )}
      </div>
    </UsersProvider>
  );
}
