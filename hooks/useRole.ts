"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const useRole = () => {
  const [rol, setRol] = useState<string | null>(null);

  const normalizeRole = (raw: string | null) => {
    if (!raw) return null;

    let v = raw.trim();

    // Quitar comillas simples o dobles
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1).trim();
    }

    // Eliminar comillas restantes
    v = v.replace(/^"+|"+$/g, "").replace(/^'+|'+$/g, "");

    return v || null;
  };

  useEffect(() => {
   const r = localStorage.getItem("rol");
    setRol(normalizeRole(r));;
  }, []);

  return { rol };
};
