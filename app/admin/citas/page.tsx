"use client";

import React, { useEffect, useState } from "react";
import { useAdminCitas } from "@/hooks/useAdminCitas";
import { AdminCitasTable } from "@/components/molecules/AdminCitasTable";
import { openReprogramModal } from "@/components/atoms/ReprogramModal";
import AdminBarComponent from "@/components/organisms/AdminBarComponent";
import Footer from "@/components/organisms/Footer";

export default function AdminCitasPage() {
  const {
    citas,
    loading,
    fetchAllCitas,
    eliminarCita,
    reprogramarCita,
    confirmarCita,
    cancelarCita,
  } = useAdminCitas();

  const [selectedCita, setSelectedCita] = useState<any | null>(null);

  useEffect(() => {
    fetchAllCitas();
  }, []);

  const handleConfirm = async (cita: any) => {
    await confirmarCita(
      cita.id_cita,
      cita.correo,
      cita.nombre_usuario,
      cita.medico,
      cita.fecha,
      cita.hora
    );
  };

  const handleReprogram = async (cita: any) => {
    setSelectedCita(cita);

    const form = await openReprogramModal();
    if (!form) return;

    await reprogramarCita(
      cita.id_cita,
      { fecha: form.fecha, hora: form.hora, id_medico: cita.id_medico },
      {
        correo: cita.correo,
        nombre_usuario: cita.nombre_usuario,
        medico: cita.medico,
      }
    );
  };

  const handleCancel = async (cita: any) => {
    await cancelarCita(
      cita.id_cita,
      cita.correo,
      cita.nombre_usuario,
      cita.medico,
      cita.fecha,
      cita.hora
    );
  };

  const handleDelete = async (id_cita: number) => {
    await eliminarCita(id_cita);
  };

  return (
    <section>
      <div className="px-6 pt-6 min-h-[90vh]">
        {" "}
        {/* Padding solo arriba y lados */}
        <AdminBarComponent />
        <h1 className="text-2xl font-bold text-[#9155A7] mb-4 mt-20">
          Panel de Citas (Admin)
        </h1>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <AdminCitasTable
            citas={citas}
            onConfirm={handleConfirm}
            onReprogram={handleReprogram}
            onCancel={handleCancel}
            onDelete={handleDelete}
          />
        )}
      </div>

      {/* Footer fuera del padding */}
      <Footer />
    </section>
  );
}
