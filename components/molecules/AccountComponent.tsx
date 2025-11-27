// "use client";

// import { useEffect, useState } from "react";
// import { useProfile } from "@/hooks/useProfile";
// import AccountCard from "@/components/atoms/AccountCards";
// import { editUserService } from "@/libs/authService";

// export default function AccountComponent() {
//   const [userId, setUserId] = useState<number | null>(null);

//   useEffect(() => {
//     const storedId = localStorage.getItem("id");
//     if (storedId) setUserId(Number(storedId));
//   }, []);

//   // ❗ Siempre llamar hooks antes de returns condicionales
//   const { profile, loading, error } = useProfile(userId ? String(userId) : "");

//   // Ahora sí puedes poner los returns
//   if (userId === null) return <p>Cargando tu información…</p>;
//   if (loading) return <p>Cargando perfil...</p>;
//   if (error || !profile) return <p>Error: {error}</p>;

//   const handleUpdate = async (data: any) => {
//     try {
//       await editUserService(userId, data);
//       Object.assign(profile, data);
//       alert("Datos actualizados correctamente");
//     } catch (err: any) {
//       alert("Error actualizando usuario: " + err.message);
//     }
//   };

//   return (
//     <div className="w-full flex justify-center py-10">
//       <AccountCard profile={profile} onUpdate={handleUpdate} />
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { useProfile } from "@/hooks/useProfile";
import AccountCard from "@/components/atoms/AccountCards";
import { editUserService } from "@/libs/authService";

export default function AccountComponent() {
  const [userId, setUserId] = useState<string | null>(null);

  // Estado local del perfil editado
  const [localProfile, setLocalProfile] = useState<any>(null);

  // Obtener ID del Local Storage
  useEffect(() => {
    const storedId = localStorage.getItem("id");
    if (storedId) setUserId(storedId);
  }, []);

  // Cargar perfil original desde el backend
  const { profile, loading, error } = useProfile(userId ?? "");

  // Cuando llegue profile, sincronizarlo con el estado local
  useEffect(() => {
    if (profile) setLocalProfile(profile);
  }, [profile]);

  if (userId === null) return <p>Cargando tu información…</p>;
  if (loading) return <p>Cargando perfil...</p>;
  if (error || !localProfile) return <p>Error: {error}</p>;

  // 🔥 EDICIÓN DEL USUARIO (PUT)
  const handleUpdate = async (data: any) => {
    try {
      await editUserService(Number(userId), data);

      // Actualizar visualmente sin recargar la página
      setLocalProfile((prev: any) => ({ ...prev, ...data }));

    } catch (err: any) {
      alert("Error actualizando usuario: " + err.message);
    }
  };

  return (
    <div className="w-full flex justify-center py-10">
      <AccountCard profile={localProfile} onUpdate={handleUpdate} />
    </div>
  );
}
