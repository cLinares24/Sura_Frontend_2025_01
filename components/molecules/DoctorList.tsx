"use client";

import { useState } from "react";
import { useMedicos } from "@/context/DoctorsContext";
import { DoctorCard } from "@/components/atoms/DoctorCards";
import { ConfirmDeleteModal } from "@/components/atoms/ConfirmDeleteModal";

export const DoctorList = ({ onEdit }: { onEdit: (m: any) => void }) => {
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
      <div className="mt-4 p-6 bg-gray-100 rounded-xl text-center text-gray-500 flex flex-col items-center justify-center gap-2">
        <p className="italic">No hay médicos registrados</p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h2 className="font-bold text-2xl text-[#0db26b]">Médicos</h2>

      <div className="grid grid-cols-2 gap-4 mt-4">
        {medicos.map((m) => (
          <DoctorCard
            key={m.id_medico}
            m={m}
            onEdit={() => onEdit(m)}
            onDelete={() => pedirConfirmacion(m)}
          />
        ))}
      </div>

      {/* MODAL */}
      <ConfirmDeleteModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={confirmarEliminacion}
        name={selectedDoctor?.nombre}
      />
    </div>
  );
};
