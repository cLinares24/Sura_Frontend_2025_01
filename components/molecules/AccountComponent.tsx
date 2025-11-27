"use client";

import { useEffect, useState } from "react";
import { useProfile } from "@/hooks/useProfile";
import AccountCards from "@/components/atoms/AccountCards"; // ← nombre corregido
// Si el archivo realmente se llama AccountCard, cámbialo a singular.

export default function AccountComponent() {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const storedId = localStorage.getItem("id");
    setUserId(storedId);
  }, []);

  // Si no hay userId aún, pasamos string vacío
  const { profile, loading, error } = useProfile(userId ?? "");

  if (!userId) return <p>Cargando tu información…</p>;
  if (loading) return <p>Cargando perfil...</p>;
  if (error) return <p>Error: {error}</p>;

  // 👉 Esta función se ejecuta cuando guardas cambios en SweetAlert
  const handleUpdate = (updatedData: any) => {
    console.log("Datos actualizados:", updatedData);

    // Puedes actualizar el estado local así:
    Object.assign(profile, updatedData);

    // O enviar los datos al backend:
    // await axios.put(`/api/usuarios/${userId}`, updatedData)
  };

  return (
    <div className="w-full flex justify-center py-10">
      <AccountCards profile={profile} onUpdate={handleUpdate} />
    </div>
  );
}
