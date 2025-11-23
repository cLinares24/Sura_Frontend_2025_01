"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Swal from "sweetalert2";
import { doctorScheme } from "@/schemas/doctor";
import { useMedicos } from "@/context/DoctorsContext";

export const useDoctorForm = () => {
  const { agregarMedico } = useMedicos();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(doctorScheme),
    defaultValues: {
      nombre: "",
      cedula: "",
      correo: "",
      telefono: "",
    },
  });

  const onSubmit = (data: any) => {
    agregarMedico(data);

    Swal.fire({
      icon: "success",
      title: "Médico agregado",
      text: "El médico fue registrado correctamente",
      confirmButtonColor: "#7c3aed",
    });

    reset(); // 🔥 ahora SÍ se limpia
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
