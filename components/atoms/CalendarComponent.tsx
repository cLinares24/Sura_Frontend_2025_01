"use client";
import { useState } from "react";
import ButtonComponent from "./ButtonComponent";

export const CalendarComponent = ({ onAdd }: { onAdd: (d: any) => void }) => {
  const [fecha, setFecha] = useState("");
  const [inicio, setInicio] = useState("");
  const [fin, setFin] = useState("");

  return (
    <div className="p-4 bg-purple-50 rounded-xl space-y-3 mt-4">
      <h3 className="font-semibold text-purple-700">Añadir Disponibilidad</h3>

      {/* FECHA */}
      <input
        type="date"
        className="p-2 border rounded w-full"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />

      {/* HORA INICIO */}
      <input
        type="time"
        className="p-2 border rounded w-full"
        value={inicio}
        onChange={(e) => setInicio(e.target.value)}
      />

      {/* HORA FIN */}
      <input
        type="time"
        className="p-2 border rounded w-full"
        value={fin}
        onChange={(e) => setFin(e.target.value)}
      />

      <ButtonComponent
        className="bg-purple-600 text-white w-full p-2 rounded-lg hover:bg-purple-700"
        onClick={() => {
          if (!fecha || !inicio || !fin) return;

          onAdd({
            fecha, // <-- ahora es una fecha real (YYYY-MM-DD)
            hora_inicio: inicio,
            hora_fin: fin,
          });

          setFecha("");
          setInicio("");
          setFin("");
        }}
      >
        Agregar
      </ButtonComponent>
    </div>
  );
};
