"use client";

import AddDoctor from "@/components/molecules/AddDoctor";
import ListDoctor from "@/components/molecules/ListDoctorsbySpeciality";
import ButtonComponent from "@/components/atoms/ButtonComponent";
import { useSpecialities } from "@/hooks/useSpecialities";
import { MedicosProvider } from "@/context/DoctorsContext";

interface Especialidad {
  id_especialidad: number;
  nombre: string;
}

interface Props {
  esp: Especialidad;
}

export default function SpecialitiesList({ esp }: Props) {
  const {
    formAbierto,
    listaAbierta,
    abrirFormulario,
    abrirLista,
  } = useSpecialities();

  return (
    <li
      className="p-5 bg-white rounded-2xl shadow-md hover:shadow-sm hover:shadow-fuchsia-300 
      transition transform hover:scale-[1.01]"
    >
      <div className="flex justify-between items-center flex-wrap gap-4">
        <span className="text-lg text-gray-800 font-semibold">
          {esp.nombre}
        </span>

        <div className="flex gap-3">
          <MedicosProvider>

          <ButtonComponent
            onClick={() => abrirFormulario(esp.id_especialidad)}
            className="text-sm bg-[#9155A7] text-white px-4 py-2 rounded-xl shadow hover:bg-[#7e3e92] transition"
            >
            {formAbierto === esp.id_especialidad ? "Cerrar" : "Agregar Médico"}
          </ButtonComponent>
          </MedicosProvider>



          <ButtonComponent
            onClick={() => abrirLista(esp.id_especialidad)}
            className="text-sm bg-[#0db26b] text-white px-4 py-2 rounded-xl shadow hover:bg-[#0a8e57] transition"
          >
            {listaAbierta === esp.id_especialidad ? "Cerrar" : "Listar Médicos"}
          </ButtonComponent>
        </div>
      </div>

      {formAbierto === esp.id_especialidad && (
        <AddDoctor
          idEspecialidad={esp.id_especialidad}
          nombreEspecialidad={esp.nombre}
          onClose={() => abrirFormulario(esp.id_especialidad)}
        />
      )}

      {listaAbierta === esp.id_especialidad && (
        <ListDoctor
          idEspecialidad={esp.id_especialidad}
          nombreEspecialidad={esp.nombre}
          onClose={() => abrirLista(esp.id_especialidad)}
        />
      )}
    </li>
  );
}
