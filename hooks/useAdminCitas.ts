// src/hooks/useAdminCitas.ts
"use client";

import { useState } from "react";
import { apiFetch } from "@/libs/singletonFetch"; // si necesitas endpoints admin genéricos
import { eliminarCitaService, reprogramarCitaService } from "@/libs/citasService";
import { enviarConfirmacionService, enviarCambioService, enviarCancelacionService } from "@/libs/notificacionesService";
import { ReprogramarCitaInput } from "@/schemas/citas";

/**
 * Nota: Aquí supongo que tienes un endpoint para listar todas las citas
 * (p.ej. GET /citas) — si no existe, agrega uno en backend que haga SELECT * FROM Citas JOIN Usuarios...
 */
export const useAdminCitas = () => {
  const [citas, setCitas] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAllCitas = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiFetch("/citas", "GET"); // backend necesita este endpoint
      setCitas(data || []);
    } catch (e: any) {
      setError(e?.message || "Error al cargar citas");
    }
    setLoading(false);
  };

  const eliminarCita = async (id_cita: number) => {
    await eliminarCitaService(id_cita);
    await fetchAllCitas();
  };

  const reprogramarCita = async (id_cita: number, payload: ReprogramarCitaInput, notificar: { correo: string; nombre_usuario: string; medico: string }) => {
    await reprogramarCitaService(id_cita, payload);
    // notificar al usuario del cambio
    await enviarCambioService({
      correo: notificar.correo,
      nombre_usuario: notificar.nombre_usuario,
      medico: notificar.medico,
      motivo: "reprogramada",
      nueva_fecha: payload.fecha,
      nueva_hora: payload.hora,
    });
    await fetchAllCitas();
  };

  const confirmarCita = async (id_cita: number, correo: string, nombre_usuario: string, medico: string, fecha: string, hora: string) => {
    await enviarConfirmacionService({ correo, nombre_usuario, fecha, hora, medico });
  };

  const cancelarCita = async (id_cita: number, correo: string, nombre_usuario: string, medico: string, fecha: string, hora: string) => {
    // eliminar primero
    await eliminarCitaService(id_cita);
    // notificar
    await enviarCancelacionService({ correo, nombre_usuario, fecha, hora, medico });
    await fetchAllCitas();
  };

  return {
    citas,
    loading,
    error,
    fetchAllCitas,
    eliminarCita,
    reprogramarCita,
    confirmarCita,
    cancelarCita,
    setCitas,
  };
};
