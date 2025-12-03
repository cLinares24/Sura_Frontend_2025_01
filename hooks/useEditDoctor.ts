// // "use client";

// // import { useForm } from "react-hook-form";
// // import { zodResolver } from "@hookform/resolvers/zod";
// // import Swal from "sweetalert2";
// // import { doctorSchema } from "@/schemas/doctor";
// // import { Medico, useMedicos } from "@/context/DoctorsContext";

// // export const useEditarMedicoForm = (medico: Medico, onClose: () => void) => {
// //   const { editarMedico } = useMedicos();

// //   const {
// //     register,
// //     handleSubmit,
// //     formState: { errors },
// //   } = useForm({
// //     resolver: zodResolver(doctorSchema),
// //     defaultValues: {
// //       nombre: medico.nombre ?? "",
// //       cedula: medico.cedula ?? "",
// //       correo: medico.correo ?? "",
// //       telefono: medico.telefono ?? "",
// //     },
// //   });

// //   const onSubmit = (data: any) => {
// //     editarMedico({
// //       ...medico,
// //       ...data,
// //     });

// //     Swal.fire({
// //       icon: "success",
// //       title: "Médico actualizado",
// //       text: "Los cambios fueron guardados correctamente",
// //       confirmButtonColor: "#7c3aed",
// //     });

// //     onClose();
// //   };

// //   const onError = (errors: any) => {
// //     const firstError =
// //       errors.cedula?.message ||
// //       errors.nombre?.message ||
// //       errors.telefono?.message ||
// //       errors.correo?.message;
// //   };

// //   return {
// //     register,
// //     handleSubmit,
// //     errors,
// //     onSubmit,
// //     onError,
// //   };
// // };

// "use client";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { doctorEditSchema } from "@/schemas/doctor";
// import { updateMedicoService } from "@/libs/medicosService";
// import { useMedicos } from "@/context/DoctorsContext";
// import z from "zod";

// type FormValues = z.infer<typeof doctorEditSchema>;

// export const useEditarMedicoForm = (medico: any, onClose: () => void) => {
//   const { reload } = useMedicos();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormValues>({
//     defaultValues: medico,
//     resolver: zodResolver(doctorEditSchema),
//   });

//   const onSubmit = async (data: FormValues) => {
//     await updateMedicoService(medico.id_medico, data);
//     reload();
//     onClose();
//   };

//   return { register, handleSubmit, errors, onSubmit };
// };

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { doctorSchema } from "@/schemas/doctor";
import { updateMedicoService } from "@/libs/medicosService";
import { useMedicos } from "@/context/DoctorsContext";
import z from "zod";

type FormValues = z.infer<typeof doctorSchema>;

export const useEditarMedicoForm = (medico: any, onClose: () => void) => {
  const { reload } = useMedicos();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: medico,
    resolver: zodResolver(doctorSchema),
  });

  const onSubmit = async (data: FormValues) => {
    await updateMedicoService(medico.id_medico, data);
    reload();
    onClose();
  };

  return { register, handleSubmit, errors, onSubmit };
};
