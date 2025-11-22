"use client";
import { useState } from "react";
import { useMedicos } from "@/context/DoctorsContext";

export const MedicoForm = () => {
  const { agregarMedico } = useMedicos();
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    cedula: "",
    id_especialidad: 1,
  });

  return (
    <div className="p-4 bg-gray-100 rounded-xl space-y-2">
      <h2 className="font-bold text-xl">Añadir Médico</h2>

      <input
        className="p-2 border w-full rounded"
        placeholder="Nombre"
        onChange={(e) => setForm({ ...form, nombre: e.target.value })}
      />
      <input
        className="p-2 border w-full rounded"
        placeholder="Correo"
        onChange={(e) => setForm({ ...form, correo: e.target.value })}
      />
      <input
        className="p-2 border w-full rounded"
        placeholder="Cédula"
        onChange={(e) => setForm({ ...form, cedula: e.target.value })}
      />

      <button
        className="bg-purple-600 text-white w-full p-2 rounded-lg"
        onClick={() => agregarMedico(form)}
      >
        Agregar
      </button>
    </div>
  );
};
