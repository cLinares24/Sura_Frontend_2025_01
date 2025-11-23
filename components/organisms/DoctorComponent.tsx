"use client";
import { MedicosProvider } from "@/context/DoctorsContext";
import { MedicoForm } from "@/components/molecules/DoctorForm";
import { DoctorList } from "@/components/molecules/DoctorList";
import { EditDoctorModal } from "@/components/molecules/EditDoctorModal";
import { useState } from "react";
import ButtonComponent from "../atoms/ButtonComponent";
    
export default function App() {
  const [editar, setEditar] = useState<any | null>(null);
  const [mostrarForm, setMostrarForm] = useState(false);

  return (
    <MedicosProvider>
      {/* Botón totalmente a la izquierda */}
      <div className="w-full px-6 py-4 min-h-[77vh]">
        <div className="flex justify-start">
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
        </div>

        {/* Contenido centrado */}
        <div className="max-w-lg mx-auto p-6 space-y-4">
          {mostrarForm && (
            <div
              className="
      animate-[fadeIn_0.4s_ease-out,slideDown_0.4s_ease-out]
    "
            >
              <MedicoForm />
            </div>
          )}

          <div className="w-full">
            <DoctorList onEdit={(m) => setEditar(m)} />
          </div>

          {editar && (
            <EditDoctorModal medico={editar} onClose={() => setEditar(null)} />
          )}
        </div>
      </div>
    </MedicosProvider>
  );
}
