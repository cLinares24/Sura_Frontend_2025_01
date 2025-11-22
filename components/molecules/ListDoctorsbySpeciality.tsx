"use client";
import { useState, useEffect } from "react";
import DoctorCards from "@/components/molecules/DoctorbySpecialityCards"

interface Medico {
  id_medico: number;    
  nombre: string;
  cedula: string;
  correo: string;
  telefono?: string;
  id_especialidad: number;
}

interface ListDoctorProps {
  idEspecialidad: number;
  nombreEspecialidad: string;
  onClose: () => void;
}

export default function ListDoctor({
  idEspecialidad,
  nombreEspecialidad,
  onClose,
}: ListDoctorProps) {
  // Simulación de datos
  const [medicos, setMedicos] = useState<Medico[]>([]);

  useEffect(() => {
    // Simular carga desde la base de datos (por especialidad)
    const dataSimulada: Medico[] = [
      { id_medico: 1, nombre: "Dr. Juan Pérez", cedula: "12345", correo: "juan@correo.com", telefono: "3001234567", id_especialidad: 1 },
      { id_medico: 2, nombre: "Dra. Ana Torres", cedula: "67890", correo: "ana@correo.com", telefono: "3107654321", id_especialidad: 2 },
      { id_medico: 3, nombre: "Dr. Carlos Ruiz", cedula: "11111", correo: "carlos@correo.com", id_especialidad: 1 },
    ];

    const filtrados = dataSimulada.filter((m) => m.id_especialidad === idEspecialidad);
    setMedicos(filtrados);
  }, [idEspecialidad]);

  return (
    <div className="mt-3 border-t border-gray-200 pt-4 bg-gray-50 rounded-lg p-4">
      <h3 className="text-md font-semibold text-[#9155A7] mb-3">
        Médicos en {nombreEspecialidad}
      </h3>

   <DoctorCards medicos={medicos} />

      <div className="flex justify-end mt-4">
        <button
          onClick={onClose}
          className="px-4 py-2 text-sm rounded-md text-gray-600 hover:bg-gray-200 transition"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
