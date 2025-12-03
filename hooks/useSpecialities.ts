

"use client";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getSpecialitiesService, createSpecialityService } from "@/libs/specialitiesService";
import { specialitySchema } from "@/schemas/specialitiesSchema";

interface Especialidad {
  id_especialidad: number;
  nombre: string;
}

export const useSpecialities = () => {
  const [especialidades, setEspecialidades] = useState<Especialidad[]>([]);
  const [nuevaEspecialidad, setNuevaEspecialidad] = useState("");
  const [formAbierto, setFormAbierto] = useState<number | null>(null);
  const [listaAbierta, setListaAbierta] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  // ----------------------------
  // CARGAR ESPECIALIDADES (GET)
  // ----------------------------
  const fetchSpecialities = async () => {
    try {
      const data = await getSpecialitiesService();
      setEspecialidades(data);
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error al cargar especialidades",
        text: error.message,
        confirmButtonColor: "#ad46ff",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSpecialities();
  }, []);

  // ----------------------------
  // CREAR ESPECIALIDAD (POST)
  // ----------------------------
  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación con Zod
    const validation = specialitySchema.safeParse({ nombre: nuevaEspecialidad });

    if (!validation.success) {
      Swal.fire({
        icon: "warning",
        title: "Campo inválido",
        text: validation.error.message,
        confirmButtonColor: "#ad46ff",
      });
      return;
    }

    try {
      await createSpecialityService({ nombre: nuevaEspecialidad });

      await Swal.fire({
        icon: "success",
        title: "¡Especialidad añadida!",
        text: `"${nuevaEspecialidad}" se agregó correctamente.`,
        confirmButtonColor: "#ad46ff",
      });

      setNuevaEspecialidad("");
      fetchSpecialities(); // Recargar lista desde backend

    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error al crear especialidad",
        text: error.message,
        confirmButtonColor: "#ad46ff",
      });
    }
  };

  // ----------------------------
  // Lógica UI (se mantiene igual)
  // ----------------------------
  const abrirFormulario = (id: number) => {
    setFormAbierto((prev) => (prev === id ? null : id));
  };

  const abrirLista = (id: number) => {
    setListaAbierta((prev) => (prev === id ? null : id));
  };

  return {
    especialidades,
    nuevaEspecialidad,
    setNuevaEspecialidad,
    handleAdd,
    formAbierto,
    listaAbierta,
    abrirFormulario,
    abrirLista,
    loading,
  };
};
