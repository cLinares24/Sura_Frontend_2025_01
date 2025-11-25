"use client";

import { useEffect, useState } from "react";
import { useProfile } from "@/hooks/useProfile";

export default function AccountComponent() {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const storedId = localStorage.getItem("id");
    setUserId(storedId);
  }, []);

  // 🔥 Siempre llamamos el hook, aunque userId sea null
  const { profile, loading, error } = useProfile(userId ?? "");

  // Si aún no tenemos el ID, mostramos algo
  if (!userId) return <p>Cargando tu información…</p>;

  if (loading) return <p>Cargando perfil...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4 border rounded-md shadow">
      <h1 className="text-xl font-bold mb-4">Mi Perfil</h1>

      <p><strong>Nombre:</strong> {profile.nombre}</p>
      <p><strong>Cédula:</strong> {profile.cedula}</p>
      <p><strong>Correo:</strong> {profile.correo}</p>
      <p><strong>Género:</strong> {profile.genero}</p>
      <p><strong>Rol:</strong> {profile.rol}</p>
      <p><strong>Fecha de Registro:</strong> {new Date(profile.fecha_registro).toLocaleString()}</p>
    </div>
  );
}
