// "use client";

// import { useForm, SubmitHandler } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import type { Resolver } from "react-hook-form";

// import {
//   doctorCreateSchema,
//   DoctorCreateInput,
//   DoctorCreateOutput,
// } from "@/schemas/doctor";

// import { createMedicoService } from "@/libs/medicosService";
// import { useMedicos } from "@/context/DoctorsContext";

// export const useDoctorForm = () => {
//   const { reload } = useMedicos();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<DoctorCreateInput>({
//     resolver: zodResolver(doctorCreateSchema) as unknown as Resolver<
//       DoctorCreateInput
//     >,
//   });

//   const onSubmit: SubmitHandler<DoctorCreateInput> = async (data) => {
//     const parsed: DoctorCreateOutput = doctorCreateSchema.parse(data);
//     await createMedicoService(parsed);

//     reload();
//     reset();
//   };

//   return { register, handleSubmit, errors, onSubmit };
// };

"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Resolver } from "react-hook-form";

import {
  doctorCreateSchema,
  DoctorCreateInput,
  DoctorCreateOutput,
} from "@/schemas/doctor";

import { useMedicos } from "@/context/DoctorsContext";

export const useDoctorForm = () => {
  const { agregarMedico, reload } = useMedicos(); // ← AQUÍ SE ASOCIA

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DoctorCreateInput>({
    resolver: zodResolver(doctorCreateSchema) as unknown as Resolver<
      DoctorCreateInput
    >,
  });

  const onSubmit: SubmitHandler<DoctorCreateInput> = async (data) => {
    const parsed: DoctorCreateOutput = doctorCreateSchema.parse(data);
    // console.log("Ejecutando la función")
    await agregarMedico(parsed); // ← USAS LA FUNCIÓN DEL CONTEXTO

    reload(); // ← ya existe en el provider
    reset();
  };

  return { register, handleSubmit, errors, onSubmit };
};
