"use client";
import { useState } from "react";
import Swal from "sweetalert2";

interface Especialidad {
  id_especialidad: number;
  nombre: string;
}

export default function EspecialidadesList() {
  const [especialidades, setEspecialidades] = useState<Especialidad[]>([
    { id_especialidad: 1, nombre: "Cardiología" },
    { id_especialidad: 2, nombre: "Pediatría" },
  ]);

  const [nuevaEspecialidad, setNuevaEspecialidad] = useState("");

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();

    if (nuevaEspecialidad.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Campo vacío",
        text: "Por favor, ingresa el nombre de la especialidad.",
        confirmButtonColor: "#ad46ff",
      });
      return;
    }

    // Simular agregar en base de datos (temporal)
    const nueva: Especialidad = {
      id_especialidad: especialidades.length + 1,
      nombre: nuevaEspecialidad,
    };

    setEspecialidades([...especialidades, nueva]);
    setNuevaEspecialidad("");

    await Swal.fire({
      icon: "success",
      title: "¡Especialidad añadida!",
      text: `"${nuevaEspecialidad}" se agregó correctamente.`,
      confirmButtonColor: "#ad46ff",
    });
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold text-[#9155A7] mb-6 text-center">
        Especialidades Médicas
      </h1>

      {/* Formulario */}
      <form onSubmit={handleAdd} className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Nueva especialidad..."
          value={nuevaEspecialidad}
          onChange={(e) => setNuevaEspecialidad(e.target.value)}
          className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#9155A7]"
        />
        <button
          type="submit"
          className="bg-[#9155A7] hover:bg-[#7e3e92] text-white font-medium px-6 py-2 rounded-md transition"
        >
          Añadir
        </button>
      </form>

      {/* Lista */}
      {especialidades.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {especialidades.map((esp) => (
            <li
              key={esp.id_especialidad}
              className="py-3 px-2 flex justify-between items-center hover:bg-gray-50 rounded-md transition"
            >
              <span className="text-gray-800">{esp.nombre}</span>
              <span className="text-sm text-gray-400">ID: {esp.id_especialidad}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No hay especialidades registradas.</p>
      )}
    </div>
  );
}
