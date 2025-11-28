"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Swal from "sweetalert2";
import { doctorSchema } from "@/schemas/doctor";
import { Medico, useMedicos } from "@/context/DoctorsContext";

export const useEditarMedicoForm = (medico: Medico, onClose: () => void) => {
  const { editarMedico } = useMedicos();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(doctorSchema),
    defaultValues: {
      nombre: medico.nombre ?? "",
      cedula: medico.cedula ?? "",
      correo: medico.correo ?? "",
      telefono: medico.telefono ?? "",
    },
  });

  const onSubmit = (data: any) => {
    editarMedico({
      ...medico,
      ...data,
    });

    Swal.fire({
      icon: "success",
      title: "Médico actualizado",
      text: "Los cambios fueron guardados correctamente",
      confirmButtonColor: "#7c3aed",
    });

    onClose();
  };

  const onError = (errors: any) => {
    const firstError =
      errors.cedula?.message ||
      errors.nombre?.message ||
      errors.telefono?.message ||
      errors.correo?.message;
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    onError,
  };
};
