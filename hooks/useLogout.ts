"use client";

import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useAuth } from "@/context/AuthContext";

export const useLogout = () => {
  const router = useRouter();
  const { setUser } = useAuth();

  const logout = () => {
    // 1️⃣ Borrar localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("rol");

    // 2️⃣ Borrar cookies
    Cookies.remove("rol");
    Cookies.remove("id");

    // 3️⃣ Limpiar AuthContext
    setUser(null);

    // 4️⃣ Redirigir + recargar página completamente
    window.location.href = "/";   // ← Recarga REAL, funciona siempre
  };

  return { logout };
};
