import { useState } from "react";

export const CalendarComponent = ({
  onAdd,
}: {
  onAdd: (d: any) => void;
}) => {
  const dias = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  const [dia, setDia] = useState("");
  const [inicio, setInicio] = useState("");
  const [fin, setFin] = useState("");

  return (
    <div className="p-4 bg-purple-50 rounded-xl space-y-3 mt-4">
      <h3 className="font-semibold text-purple-700">Añadir Disponibilidad</h3>

      <select
        className="p-2 rounded border w-full"
        value={dia}
        onChange={(e) => setDia(e.target.value)}
      >
        <option value="">Seleccionar día</option>
        {dias.map((d) => (
          <option key={d}>{d}</option>
        ))}
      </select>

      <input
        type="time"
        className="p-2 border rounded w-full"
        value={inicio}
        onChange={(e) => setInicio(e.target.value)}
      />
      <input
        type="time"
        className="p-2 border rounded w-full"
        value={fin}
        onChange={(e) => setFin(e.target.value)}
      />

      <button
        className="bg-purple-600 text-white w-full p-2 rounded-lg hover:bg-purple-700"
        onClick={() => {
          if (!dia || !inicio || !fin) return;
          onAdd({ dia_semana: dia, hora_inicio: inicio, hora_fin: fin });
          setDia("");
          setInicio("");
          setFin("");
        }}
      >
        Agregar
      </button>
    </div>
  );
};
