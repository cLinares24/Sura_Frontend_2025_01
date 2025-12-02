"use client";

import SpecialitiesList from "../../components/molecules/SpecialitiesList";
import ButtonComponent from "../../components/atoms/ButtonComponent";
import { useSpecialities } from "../../hooks/useSpecialities";

export default function SpecialitiesComponent() {
  const {
    especialidades,
    nuevaEspecialidad,
    setNuevaEspecialidad,
    handleAdd,
  } = useSpecialities();

  return (
    <div className="min-h-[90vh] w-full bg-gradient-to-br from-[#fbf5ff] to-[#f4e1ff] py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 mt-15">
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
              <SpecialitiesList key={esp.id_especialidad} esp={esp} />
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
