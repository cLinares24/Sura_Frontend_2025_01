// "use client";

// import { useState } from "react";
// import {
//   obtenerHorariosDisponibles,
//   crearCitaService,
//   eliminarCitaService,
// } from "@/libs/citasService";
// import { CrearCitaOutput } from "@/schemas/citas";

// export const useCitas = (idEspecialidad: number) => {
//   const [citas, setCitas] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);

//   const fetchCitas = async (fecha: string) => {
//     setLoading(true);
//     try {
//       const data = await obtenerHorariosDisponibles(idEspecialidad, fecha);
//       setCitas(data);
//     } catch (e) {
//       console.error("Error fetching citas:", e);
//     }
//     setLoading(false);
//   };

//   const crearCita = async (body: CrearCitaOutput) => {
//     await crearCitaService(body);
//     fetchCitas(body.fecha);
//   };

//   const eliminarCita = async (id_cita: number, fechaActual: string) => {
//     await eliminarCitaService(id_cita);
//     fetchCitas(fechaActual);
//   };

//   return { citas, loading, fetchCitas, crearCita, eliminarCita };
// };

// src/hooks/useCitas.ts
"use client";

import { useState } from "react";
import { getCitasDisponiblesService, crearCitaService } from "@/libs/citasService";
import { CrearCitaInput, CrearCitaOutput } from "@/schemas/citas";

export const useCitas = (idEspecialidad: number) => {
  const [citas, setCitas] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCitas = async (fecha: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getCitasDisponiblesService(idEspecialidad, fecha);
      setCitas(data || []);
    } catch (e: any) {
      setError(e?.message || "Error cargando citas");
    }
    setLoading(false);
  };

  const crearCita = async (payload: Omit<CrearCitaInput, "id_usuario">) => {
    const idFromStorage = typeof window !== "undefined" ? localStorage.getItem("id") : null;
    if (!idFromStorage) throw new Error("Usuario no autenticado (id no encontrado).");
    const id_usuario = Number(idFromStorage);

    const body: CrearCitaOutput = {
      id_usuario,
      id_medico: payload.id_medico,
      id_especialidad: payload.id_especialidad,
      fecha: payload.fecha,
      hora: payload.hora,
    };

    return crearCitaService(body);
  };

  return { citas, loading, error, fetchCitas, crearCita, setCitas };
};
