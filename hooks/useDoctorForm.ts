// "use client";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import Swal from "sweetalert2";
// import { doctorSchema } from "@/schemas/doctor";
// import { useMedicos } from "@/context/DoctorsContext";

// export const useDoctorForm = () => {
//   const { agregarMedico } = useMedicos();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm({
//     resolver: zodResolver(doctorSchema),
//     defaultValues: {
//       nombre: "",
//       cedula: "",
//       correo: "",
//       telefono: "",
//     },
//   });

//   const onSubmit = (data: any) => {
//     agregarMedico(data);

//     Swal.fire({
//       icon: "success",
//       title: "Médico agregado",
//       text: "El médico fue registrado correctamente",
//       confirmButtonColor: "#7c3aed",
//     });

//     reset(); // 🔥 ahora SÍ se limpia
//   };

//   const onError = (errors: any) => {
//     const firstError =
//       errors.cedula?.message ||
//       errors.nombre?.message ||
//       errors.telefono?.message ||
//       errors.correo?.message;
//   };

//   return {
//     register,
//     handleSubmit,
//     errors,
//     onSubmit,
//     onError,
//   };
// };

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Swal from "sweetalert2";
import { doctorSchema } from "@/schemas/doctor";
import { registerDoctorService } from "@/libs/doctorService";

export const useDoctorForm = (id_especialidad: number, onClose: () => void) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(doctorSchema),
    defaultValues: {
      nombre: "",
      cedula: "",
      correo: "",
      telefono: "",
      contrasena: "",
      id_especialidad: id_especialidad
    },
  });

  // --------------------------
  // SUBMIT REAL DEL MÉDICO
  // --------------------------
  const onSubmit = async (data: any) => {
    try {
      const payload = {
        ...data,
        id_especialidad,
      };

      // Petición al backend
      await registerDoctorService(payload);

      await Swal.fire({
        icon: "success",
        title: "Médico agregado",
        text: "El médico fue registrado correctamente",
        confirmButtonColor: "#7c3aed",
      });

      reset();
      onClose();

    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error al registrar médico",
        text: error.message || "Intenta nuevamente",
        confirmButtonColor: "#7c3aed",
      });
    }
  };

  // --------------------------
  // MANEJO DE ERRORES ZOD
  // --------------------------
  const onError = (err: any) => {
    const firstError =
      err.nombre?.message ||
      err.cedula?.message ||
      err.correo?.message ||
      err.contrasena?.message;

    Swal.fire({
      icon: "warning",
      title: "Campos inválidos",
      text: firstError || "Completa los campos obligatorios",
      confirmButtonColor: "#7c3aed",
    });
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    onError,
  };
};
