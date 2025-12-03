"use client";

import { useState } from "react";
import { useMedicos } from "@/context/DoctorsContext";
import { DoctorCard } from "@/components/atoms/DoctorCards";
import { ConfirmDeleteModal } from "@/components/atoms/ConfirmDeleteModal";

export const DoctorList = ({
  onEdit,
  columnas,
}: {
  onEdit: (m: any) => void;
  columnas: number;
}) => 
{
  const { medicos, eliminarMedico } = useMedicos();

  // Estado para el modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);

  const pedirConfirmacion = (doctor: any) => {
    setSelectedDoctor(doctor);
    setModalOpen(true);
  };

  const confirmarEliminacion = () => {
    if (!selectedDoctor) return;

    eliminarMedico(selectedDoctor.id_medico);
    setModalOpen(false);
  };

  if (medicos.length === 0) {
    return (
      <div className="mt-4 p-6 bg-white shadow-xl  rounded-xl text-center text-gray-500 flex flex-col items-center justify-center gap-2">
        <p className="italic">No hay médicos registrados</p>
      </div>
    );
  }

  return (
    <div className="text-center">
       <div className="flex items-center gap-3  mb-3">
        <span className="w-1 h-9 bg-[#0db26b] rounded-full"></span>
        <h2 className="font-bold text-3xl text-[#0db26b]">Doctores</h2>
      </div>

      <div className="grid gap-4 mt-4"
        style={{
          gridTemplateColumns: `repeat(${columnas}, minmax(0, 1fr))`,
        }}>
        {medicos.map((m) => (
          // <DoctorCard
          //   key={m.id_medico}
          //   m={m}
          //   onEdit={() => onEdit(m)}
          //   onDelete={() => pedirConfirmacion(m)}
          // />
        <DoctorCard
          key={m.id_medico}
          m={m}
          onEdit={() => onEdit(m)}
          onDelete={() => eliminarMedico(m.id_medico!)}
        />
        ))}
      </div>

      {/* MODAL */}
      <ConfirmDeleteModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={confirmarEliminacion}
        name={selectedDoctor?.nombre}
        title="Eliminar Doctor"
        message="¿Seguro que deseas eliminar "
        boton="Eliminar"
      />
    </div>
  );
};
