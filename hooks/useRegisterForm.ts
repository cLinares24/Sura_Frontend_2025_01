"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Swal from "sweetalert2";
import { registerSchema } from "@/schemas/register";
import { RegisterDTO } from "@/interfaces/user";
import { useRouter } from "next/navigation";

export function useRegisterForm() {
  const router = useRouter();

  const form = useForm<RegisterDTO>({
    resolver: zodResolver(registerSchema),
  });

  const { handleSubmit, formState, register } = form;
  const { errors } = formState;

  const onSubmit: SubmitHandler<RegisterDTO> = async (data) => {
    console.log("Formulario enviado:", data);

    await Swal.fire({
      title: "¡Registro exitoso!",
      text: "Tu cuenta ha sido creada correctamente.",
      icon: "success",
      confirmButtonColor: "#ad46ff",
      confirmButtonText: "Aceptar",
    });

    router.push("/login");
  };

  const onErrors = () => {
    const primerError = Object.values(errors)[0];
    console.warn("Errores en formulario:", primerError);
  };

  return {
    register,
    errors,
    handleSubmit,
    onSubmit,
    onErrors,
  };
}
