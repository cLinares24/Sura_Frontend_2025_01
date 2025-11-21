"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Swal from "sweetalert2";
import { LoginDTO } from "../interfaces/user";
import { loginScheme } from "../schemas/login";
import { useRouter } from "next/navigation";

export function useLogin() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDTO>({
    resolver: zodResolver(loginScheme),
  });

  const onSubmit: SubmitHandler<LoginDTO> = async (data) => {
    console.log("Formulario enviado:", data);

    const fakeToken = crypto.randomUUID();

    localStorage.setItem("token", fakeToken);
    localStorage.setItem("user", JSON.stringify({ correo: data.correo }));
    localStorage.setItem("rol", JSON.stringify({ rol: "U" }));

    await Swal.fire({
      title: "¡Inicio de sesión exitoso!",
      text: "Bienvenido a MediciCol.",
      icon: "success",
      confirmButtonColor: "#ad46ff",
    });

    // router.push("/")
  };

  const onErrors = () => {
    console.log("Errores:", errors);
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    onErrors,
  };
}
