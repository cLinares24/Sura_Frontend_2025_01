"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import SpecialitiesList from "@/components/molecules/SpecialitiesList";
import ButtonComponent from "@/components/atoms/ButtonComponent";

interface Especialidad {
  id_especialidad: number;
  nombre: string;
}

export default function SpecialitiesComponent() {
  const [especialidades, setEspecialidades] = useState<Especialidad[]>([
    { id_especialidad: 1, nombre: "Cardiología" },
    { id_especialidad: 2, nombre: "Pediatría" },
    { id_especialidad: 3, nombre: "Dermatología" },
  ]);

  const [nuevaEspecialidad, setNuevaEspecialidad] = useState("");
  const [formAbierto, setFormAbierto] = useState<number | null>(null);
  const [listaAbierta, setListaAbierta] = useState<number | null>(null);

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

    const nueva = {
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
    <div className="min-h-screen w-full bg-gradient-to-br from-[#f5f8ff] to-[#e1ffed] py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10">
        <h1 className="text-3xl font-extrabold text-[#7b3fa1] text-center mb-10">
          Especialidades Médicas
        </h1>

        {/* Formulario */}
        <form
          onSubmit={handleAdd}
          className="flex flex-col sm:flex-row gap-4 mb-10"
        >
          <input
            type="text"
            placeholder="Nueva especialidad..."
            value={nuevaEspecialidad}
            onChange={(e) => setNuevaEspecialidad(e.target.value)}
            className="flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none 
            focus:ring-2 focus:ring-[#9155A7] shadow-sm"
          />
          <ButtonComponent
            type="submit"
            className="bg-[#9155A7] hover:bg-[#7e3e92] text-white font-semibold px-6 py-3 
  rounded-xl transition shadow-md hover:shadow-lg"
          >
            Añadir
          </ButtonComponent>
        </form>

        {/* Lista */}
        {especialidades.length > 0 ? (
          <ul className="space-y-2">
            {especialidades.map((esp) => (
              <SpecialitiesList
                key={esp.id_especialidad}
                esp={esp}
                formAbierto={formAbierto}
                listaAbierta={listaAbierta}
                setFormAbierto={setFormAbierto}
                setListaAbierta={setListaAbierta}
              />
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">
            No hay especialidades registradas.
          </p>
        )}
      </div>
    </div>
  );
}
