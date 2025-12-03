"use client";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getDoctorsBySpecialityService } from "@/libs/doctorService";

interface Medico {
  id_medico: number;    
  nombre: string;
  cedula: string;
  correo: string;
  telefono?: string;
  especialidad: string;
}

export const useDoctorsBySpeciality = (id_especialidad: number) => {
  const [medicos, setMedicos] = useState<Medico[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDoctors = async () => {
    try {
      const data = await getDoctorsBySpecialityService(id_especialidad);
      setMedicos(data);

    } catch (error: any) {
      Swal.fire({
        icon: "info",
        title: "Sin médicos disponibles",
        text: "No hay médicos registrados para esta especialidad.",
        confirmButtonColor: "#7c3aed",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id_especialidad) fetchDoctors();
  }, [id_especialidad]);

  return {
    medicos,
    loading,
  };
};
