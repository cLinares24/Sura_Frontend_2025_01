"use client";

import React from "react";
import { useRouter } from "next/navigation";   // ← 🟣 NUEVO
import { useCitas } from "@/hooks/useCitas";
import Swal from "sweetalert2";
import dayjs from "dayjs";
import { motion } from "framer-motion";

export default function DepartmentSchedulePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const idEspecialidad = Number(id);

  const router = useRouter();   // ← 🟣 NUEVO

  const [fecha, setFecha] = React.useState(dayjs().format("YYYY-MM-DD"));
  const { citas, loading, fetchCitas, crearCita } = useCitas(idEspecialidad);

  React.useEffect(() => {
    fetchCitas(fecha);
  }, [fecha, idEspecialidad]);

  const handleCrear = async (cita: any) => {
    await crearCita({
      id_medico: cita.id_medico,
      id_especialidad: idEspecialidad,
      fecha: cita.fecha,
      hora: cita.hora,
    });

    await fetchCitas(fecha);
    Swal.fire("Cita creada", "Tu cita fue agendada con éxito", "success");
  };

  return (
    <section className="p-6 max-w-4xl mx-auto">

      {/* --------------------------- */}
      {/* 🟣 BOTÓN PARA ADMIN CITAS */}
      {/* --------------------------- */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#9155A7]">
          Citas disponibles
        </h1>

        <button
          onClick={() => router.push("/admin/citas")}
          className="bg-[#9155A7] text-white px-4 py-2 rounded-md hover:bg-[#7b468e] transition text-sm"
        >
          Administrar Citas
        </button>
      </div>

      {/* Filtro por fecha */}
      <div className="mb-6">
        <label className="font-semibold text-sm text-gray-700">Seleccionar fecha</label>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          className="border p-2 rounded-md ml-2"
        />
      </div>

      {loading ? (
        <p className="text-gray-500">Cargando disponibilidad...</p>
      ) : citas.length === 0 ? (
        <p className="text-gray-600">No hay horarios disponibles.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {citas.map((cita: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white shadow-md p-4 rounded-lg border border-gray-200"
            >
              <h3 className="font-semibold text-lg text-[#9155A7]">{cita.medico}</h3>
              <p className="text-gray-700 mt-1">Hora: {cita.hora}</p>
              <p className="text-gray-500 text-sm">Fecha: {cita.fecha}</p>

              <button
                onClick={() => handleCrear(cita)}
                className="mt-3 bg-[#9155A7] text-white px-4 py-2 rounded-md hover:bg-[#7b468e] transition"
              >
                Agendar cita
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
