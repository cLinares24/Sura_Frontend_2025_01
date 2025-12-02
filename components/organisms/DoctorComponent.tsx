"use client";
import { MedicosProvider } from "../../context/DoctorsContext";
import { DoctorForm } from "../../components/molecules/DoctorForm";
import { DoctorList } from "../../components/molecules/DoctorList";
import { EditDoctorModal } from "../../components/molecules/EditDoctorModal";
import { useState } from "react";
import ButtonComponent from "../atoms/ButtonComponent";
import { ColumnSelect } from "../atoms/ColumnSelect";
import { useColumns } from "../../hooks/useColumns";

export default function App() {
  const [editar, setEditar] = useState<any | null>(null);
  const [mostrarForm, setMostrarForm] = useState(false);
  const { columnas, setColumnas } = useColumns(1);

  return (
    <MedicosProvider>
      {/* Botón totalmente a la izquierda */}
      <div className="w-full px-6 py-4 min-h-[90vh] bg-gradient-to-br from-[#f5f8ff] to-[#e1ffed] mb-10">
        <div className="flex justify-start items-center mt-12 gap-4">
          <ButtonComponent
            className={`
      px-6 py-2.5 rounded-xl font-semibold
      shadow-md hover:shadow-lg active:scale-95
      transition-all duration-300 flex items-center gap-2 text-white
      ${
        mostrarForm
          ? "bg-[#9155A7] hover:bg-[#7d4690]"
          : "bg-[#0db26b] hover:bg-[#0a8e56]"
      }
    `}
            onClick={() => setMostrarForm(!mostrarForm)}
          >
            {mostrarForm ? "Cerrar" : "Añadir médico"}
          </ButtonComponent>

          {/* 👉 Empuja este elemento al final */}
          <div className="ml-auto">
            <ColumnSelect value={columnas} onChange={setColumnas} />
          </div>
        </div>

        {/* Contenido centrado */}
        <div className="mx-auto p-6 space-y-4">
          {mostrarForm && (
            <div
              className="
      animate-[fadeIn_0.4s_ease-out,slideDown_0.4s_ease-out]
    "
            >
              <DoctorForm />
            </div>
          )}

          <div className="">
            <DoctorList onEdit={(u) => setEditar(u)} columnas={columnas} />
          </div>

          {editar && (
            <EditDoctorModal medico={editar} onClose={() => setEditar(null)} />
          )}
        </div>
      </div>
    </MedicosProvider>
  );
}
