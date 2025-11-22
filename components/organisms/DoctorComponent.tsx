"use client";
import { MedicosProvider } from "@/context/DoctorsContext";
import { MedicoForm } from "@/components/molecules/DoctorForm";
import { DoctorList } from "@/components/molecules/DoctorList";
import { EditDoctorModal } from "@/components/molecules/EditDoctorModal";
import { useState } from "react";

export default function App() {
  const [editar, setEditar] = useState<any | null>(null);

  return (
    <MedicosProvider>
      <div className="max-w-lg mx-auto p-6 space-y-4">
        <MedicoForm />
        <DoctorList onEdit={(m) => setEditar(m)} />
        {editar && (
          <EditDoctorModal medico={editar} onClose={() => setEditar(null)} />
        )}
      </div>
    </MedicosProvider>
  );
}
