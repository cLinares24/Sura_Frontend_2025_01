"use client";

import { createContext, useState, useEffect, ReactNode } from "react";

export interface Medico {
  id_medico: number;
  nombre: string;
  cedula: string;
  correo: string;
  telefono?: string;
  id_especialidad: number;
}

interface DoctorsContextProps {
  medicos: Medico[];
  cargarMedicosPorEspecialidad: (idEspecialidad: number) => Medico[];
}

export const DoctorsContext = createContext<DoctorsContextProps>({
  medicos: [],
  cargarMedicosPorEspecialidad: () => [],
});

export function DoctorsProvider({ children }: { children: ReactNode }) {
  const [medicos, setMedicos] = useState<Medico[]>([]);

  useEffect(() => {
    // Simular carga inicial desde BD
    const dataSimulada: Medico[] = [
      {
        id_medico: 1,
        nombre: "Dr. Juan Pérez",
        cedula: "12345",
        correo: "juan@correo.com",
        telefono: "3001234567",
        id_especialidad: 1,
      },
      {
        id_medico: 2,
        nombre: "Dra. Ana Torres",
        cedula: "67890",
        correo: "ana@correo.com",
        telefono: "3107654321",
        id_especialidad: 2,
      },
      {
        id_medico: 3,
        nombre: "Dr. Carlos Ruiz",
        cedula: "11111",
        correo: "carlos@correo.com",
        id_especialidad: 1,
      },
    ];

    setMedicos(dataSimulada);
  }, []);

  const cargarMedicosPorEspecialidad = (idEspecialidad: number) => {
    return medicos.filter((m) => m.id_especialidad === idEspecialidad);
  };

  
  return (
    <DoctorsContext.Provider
      value={{
        medicos,
        cargarMedicosPorEspecialidad,
      }}
    >
      {children}
    </DoctorsContext.Provider>
  );
}
