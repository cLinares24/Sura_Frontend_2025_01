import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginDTO } from "@/interfaces/login"
import { loginScheme } from "@/schemas/login"
import { loginService } from "@/libs/authService"
import { useAuth } from "../../context/AuthContext"
import Swal from "sweetalert2"

export function useLogin(onLoginSuccess?: () => void) {
  //const { setUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginDTO>({
    resolver: zodResolver(loginScheme)
  })

  const onSubmit: SubmitHandler<LoginDTO> = async (data) => {
    try {
      const info = await loginService(data)
      console.log("Respuesta del loginService:", info)

      if (info?.message === "Login exitoso") {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
        Toast.fire({
          icon: "success",
          title: "Inicio de sesión exitoso"
        });

        setTimeout(() => {
          onLoginSuccess?.()
        }, 800)
        //   setTimeout(() => {
        //   window.location.reload();
        // }, 1500);

        localStorage.setItem("user", JSON.stringify(info.user.nombre))
        setUser(info.user.nombre)

      } 
      else if (info?.detail === "Credenciales inválidas") {
        Swal.fire({
          icon: "error",
          title: "Credenciales inválidas",
          text: "Por favor verifica tu usuario o contraseña.",
        })
      } 
      else {
        Swal.fire({
          icon: "warning",
          title: "Respuesta inesperada",
          text: "El servidor no devolvió un formato esperado.",
        })
      }

    } catch (e) {
      console.error("Error en solicitud:", e)
      Swal.fire({
        icon: "error",
        title: "Error de conexión",
        text: "No se pudo conectar al servidor. Intenta de nuevo más tarde.",
      })
    }
  }

  const onErrors = () => {
    Swal.fire({
      icon: "warning",
      title: "Formulario incompleto",
      text: "Por favor completa todos los campos correctamente."
    })
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    onErrors,
    errors
  }
}
