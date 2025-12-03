// src/components/citas/CitaCard.tsx
"use client";

import { motion } from "framer-motion";

export const CitaCard = ({ cita, onAgendar }: { cita: any; onAgendar: (cita: any) => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-4 rounded-xl shadow-sm border"
    >
      <h4 className="font-semibold text-[#9155A7]">{cita.medico}</h4>
      <p className="text-sm text-gray-600">Fecha: {cita.fecha}</p>
      <p className="text-sm text-gray-600">Hora: {cita.hora}</p>

      <button
        onClick={() => onAgendar(cita)}
        className="mt-3 bg-[#0db26b] text-white px-4 py-2 rounded-md"
      >
        Agendar
      </button>
    </motion.div>
  );
};
