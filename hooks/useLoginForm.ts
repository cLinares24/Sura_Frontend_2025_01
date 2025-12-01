// "use client";

// import { useForm, SubmitHandler } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import Swal from "sweetalert2";
// import { LoginDTO } from "../interfaces/user";
// import { loginScheme } from "../schemas/login";
// import { useRouter } from "next/navigation";

// export function useLogin() {
//   const router = useRouter();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginDTO>({
//     resolver: zodResolver(loginScheme),
//   });

//   const onSubmit: SubmitHandler<LoginDTO> = async (data) => {
//     console.log("Formulario enviado:", data);

//     const fakeToken = crypto.randomUUID();

//     localStorage.setItem("token", fakeToken);
//     localStorage.setItem("user", JSON.stringify({ correo: data.correo }));
//     localStorage.setItem("rol", JSON.stringify({ rol: "U" }));

//     await Swal.fire({
//       title: "¡Inicio de sesión exitoso!",
//       text: "Bienvenido a MediciCol.",
//       icon: "success",
//       confirmButtonColor: "#ad46ff",
//     });

//   };

//   const onErrors = () => {
//     console.log("Errores:", errors);
//   };

//   return {
//     register,
//     handleSubmit,
//     errors,
//     onSubmit,
//     onErrors,
//   };
// }

"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginDTO } from "@/interfaces/LoginDTO";
import { loginScheme } from "../schemas/login";
import { loginService } from "../libs/authService";
import { useAuth } from "../context/AuthContext";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export function useLogin(onLoginSuccess?: () => void) {
  const { setUser } = useAuth();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDTO>({
    resolver: zodResolver(loginScheme),
  });

  const onSubmit: SubmitHandler<LoginDTO> = async (data) => {
    try {
      const info = await loginService(data);
      console.log("Respuesta del loginService:", info);

      // ✓ Adaptado al mensaje REAL del backend
      if (info?.message === "Inicio de sesión exitoso") {
        Swal.fire({
          icon: "success",
          title: "Inicio de sesión exitoso",
          text: "Bienvenido!",
          confirmButtonText: "Aceptar",
        }).then(() => {
          // Guardamos solo lo necesario ( NO el token )
          localStorage.setItem("user", JSON.stringify(info.usuario.nombre));
          localStorage.setItem("rol", JSON.stringify(info.usuario.rol));
          localStorage.setItem("id", JSON.stringify(info.usuario.id));

          // Contexto global
          setUser(info.usuario.nombre);

          // Redirección SOLO después de dar aceptar
          router.push("/../");
        });
      } else if (info?.detail === "Correo o contraseña incorrectos") {
        Swal.fire({
          icon: "error",
          title: "Credenciales inválidas",
          text: "Por favor verifica tu correo o contraseña.",
        });
      } else {
        Swal.fire({
          icon: "warning",
          title: "Respuesta inesperada",
          text: "El servidor no devolvió el formato esperado.",
        });
      }
    } catch (e: any) {
      console.error("Error en solicitud:", e);

      // Si FastAPI lanzó HttpException con detail
      if (e?.response?.data?.detail === "Correo o contraseña incorrectos") {
        Swal.fire({
          icon: "error",
          title: "Credenciales inválidas",
          text: "Por favor verifica tu correo o contraseña.",
        });
        return;
      }

      Swal.fire({
        icon: "error",
        title: "Error de conexión",
        text: "No se pudo conectar al servidor. Intenta más tarde.",
      });
    }
  };

  const onErrors = () => {
    Swal.fire({
      icon: "warning",
      title: "Formulario incompleto",
      text: "Por favor completa todos los campos correctamente.",
    });
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    onErrors,
    errors,
  };
}
