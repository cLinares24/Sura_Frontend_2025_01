"use client";

import AddDoctor from "@/components/molecules/AddDoctor";
import ListDoctor from "@/components/molecules/ListDoctors";
import ButtonComponent from "@/components/atoms/ButtonComponent";

interface Especialidad {
  id_especialidad: number;
  nombre: string;
}

interface Props {
  esp: Especialidad;
  formAbierto: number | null;
  listaAbierta: number | null;
  setFormAbierto: (id: number | null) => void;
  setListaAbierta: (id: number | null) => void;
}

export default function SpecialitiesList({
  esp,
  formAbierto,
  listaAbierta,
  setFormAbierto,
  setListaAbierta,
}: Props) {
  return (
    <li
      className="p-5 bg-white rounded-2xl shadow-md hover:shadow-xl 
      transition transform hover:scale-[1.01]"
    >
      <div className="flex justify-between items-center flex-wrap gap-4">
        <span className="text-lg text-gray-800 font-semibold">
          {esp.nombre}
        </span>

        <div className="flex gap-3">
          {/* Botón Agregar Médico */}
          <ButtonComponent
            onClick={() => {
              setListaAbierta(null);
              setFormAbierto(
                formAbierto === esp.id_especialidad ? null : esp.id_especialidad
              );
            }}
            className="text-sm bg-[#9155A7] text-white px-4 py-2 rounded-xl shadow hover:bg-[#7e3e92] transition"
          >
            {formAbierto === esp.id_especialidad ? "Cerrar" : "Agregar Médico"}
          </ButtonComponent>

          {/* Botón Listar Médicos */}
          <ButtonComponent
            onClick={() => {
              setFormAbierto(null);
              setListaAbierta(
                listaAbierta === esp.id_especialidad
                  ? null
                  : esp.id_especialidad
              );
            }}
            className="text-sm bg-[#0db26b] text-white px-4 py-2 rounded-xl shadow hover:bg-[#0a8e57] transition"
          >
            {listaAbierta === esp.id_especialidad ? "Cerrar" : "Listar Médicos"}
          </ButtonComponent>
        </div>
      </div>

      {/* Componente Agregar Médico */}
      {formAbierto === esp.id_especialidad && (
        <AddDoctor
          idEspecialidad={esp.id_especialidad}
          nombreEspecialidad={esp.nombre}
          onClose={() => setFormAbierto(null)}
        />
      )}

      {/* Componente Lista de Médicos */}
      {listaAbierta === esp.id_especialidad && (
        <ListDoctor
          idEspecialidad={esp.id_especialidad}
          nombreEspecialidad={esp.nombre}
          onClose={() => setListaAbierta(null)}
        />
      )}
    </li>
  );
}
