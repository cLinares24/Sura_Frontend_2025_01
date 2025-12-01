// /hooks/useMedicos.ts
"use client";

import { useEffect, useState } from "react";
import { getAllMedicosService } from "@/libs/medicosService";

export const useMedico = () => {
  const [medicos, setMedicos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMedicos = async () => {
    try {
      const data = await getAllMedicosService();
      setMedicos(data);
    } catch (e: any) {
      setError(e.message || "Error cargando médicos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMedicos();
  }, []);

  return { medicos, loading, error, fetchMedicos };
};
