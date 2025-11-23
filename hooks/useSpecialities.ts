"use client";

import { useState } from "react";
import Swal from "sweetalert2";

interface Especialidad {
  id_especialidad: number;
  nombre: string;
}

export const useSpecialities = () => {
  const [especialidades, setEspecialidades] = useState<Especialidad[]>([
    { id_especialidad: 1, nombre: "Cardiología" },
    { id_especialidad: 2, nombre: "Pediatría" },
    { id_especialidad: 3, nombre: "Dermatología" },
  ]);

  const [nuevaEspecialidad, setNuevaEspecialidad] = useState("");
  const [formAbierto, setFormAbierto] = useState<number | null>(null);
  const [listaAbierta, setListaAbierta] = useState<number | null>(null);

  const abrirFormulario = (id: number) => {
    setFormAbierto((prev) => (prev === id ? null : id));
  };

  const abrirLista = (id: number) => {
    setListaAbierta((prev) => (prev === id ? null : id));
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();

    if (nuevaEspecialidad.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Campo vacío",
        text: "Por favor, ingresa el nombre de la especialidad.",
        confirmButtonColor: "#ad46ff",
      });
      return;
    }

    const nueva = {
      id_especialidad: especialidades.length + 1,
      nombre: nuevaEspecialidad,
    };

    setEspecialidades([...especialidades, nueva]);
    setNuevaEspecialidad("");

    await Swal.fire({
      icon: "success",
      title: "¡Especialidad añadida!",
      text: `"${nuevaEspecialidad}" se agregó correctamente.`,
      confirmButtonColor: "#ad46ff",
    });
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
  };
};
