import { useState, useEffect } from "react";
import { editUserService } from "@/libs/authService";
import Swal from "sweetalert2";

export function useEditUser(onSuccess: () => void) {
  const [loading, setLoading] = useState(false);

  const updateUser = async (data: any) => {
    const userId = Number(localStorage.getItem("id"));

    try {
      setLoading(true);
      await editUserService(userId, data);
      Swal.fire({ icon: "success", title: "Perfil actualizado" });
      onSuccess(); // ← refresca el perfil
    } catch (e: any) {
      Swal.fire({
        icon: "error",
        title: "Error al actualizar",
        text: e.message || "No se pudo actualizar el usuario",
      });
    } finally {
      setLoading(false);
    }
  };

  return { updateUser, loading };
}
