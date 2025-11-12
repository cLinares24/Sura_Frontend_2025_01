"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import AddDoctor from "@/components/molecules/AddDoctor";
import ListDoctor from "@/components/molecules/ListDoctors";



interface Especialidad {
  id_especialidad: number;
  nombre: string; 
}

export default function SpecialitiesList() {
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
    <div className="max-w-3xl mx-auto mt-10 mb-30 p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold text-[#9155A7] mb-6 text-center">
        Especialidades Médicas
      </h1>

      {/* Formulario de nueva especialidad */}
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

      {/* Lista de especialidades */}
      {especialidades.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {especialidades.map((esp) => (
            <li
              key={esp.id_especialidad}
              className="py-3 px-2 flex flex-col transition rounded-md hover:bg-gray-50"
            >
              <div className="flex justify-between items-center flex-wrap gap-2">
                <span className="text-gray-800 font-medium">{esp.nombre}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setListaAbierta(null); // Cerrar lista si estaba abierta
                      setFormAbierto(formAbierto === esp.id_especialidad ? null : esp.id_especialidad);
                    }}
                    className="text-sm bg-[#9155A7] text-white px-3 py-1 rounded-md hover:bg-[#7e3e92] transition"
                  >
                    {formAbierto === esp.id_especialidad ? "Cerrar" : "Agregar Médico"}
                  </button>

                  <button
                    onClick={() => {
                      setFormAbierto(null); // Cerrar form si estaba abierto
                      setListaAbierta(listaAbierta === esp.id_especialidad ? null : esp.id_especialidad);
                    }}
                    className="text-sm bg-[#0db26b] text-white px-3 py-1 rounded-md hover:bg-[#0a8e57] transition"
                  >
                    {listaAbierta === esp.id_especialidad ? "Cerrar" : "Listar Médicos"}
                  </button>
                </div>
              </div>

              {formAbierto === esp.id_especialidad && (
                <AddDoctor
                  idEspecialidad={esp.id_especialidad}
                  nombreEspecialidad={esp.nombre}
                  onClose={() => setFormAbierto(null)}
                />
              )}

              {listaAbierta === esp.id_especialidad && (
                <ListDoctor
                  idEspecialidad={esp.id_especialidad}
                  nombreEspecialidad={esp.nombre}
                  onClose={() => setListaAbierta(null)}
                />
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No hay especialidades registradas.</p>
      )}
    </div>
  );
}
