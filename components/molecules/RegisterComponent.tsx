"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginDTO } from "../../interfaces/login";
import { loginScheme } from "../../schemas/login";
import { loginService } from "../../libs/authService";
import Image from "next/image";
import InputComponents from "../atoms/InputComponents";
import Link from "next/link";

export default function LoginComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDTO>({
    resolver: zodResolver(loginScheme),
  });

  const onSubmit: SubmitHandler<LoginDTO> = (data) => {
    loginService(data)
      .then((info) => {
        localStorage.setItem("token", info.access_token);
      })
      .catch((e) => {
        console.log("Error en solicitud");
      });
  };

  const onErrors = () => {
    console.log("Errores", errors);
    alert("Información incompleta");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md bg-white shadow rounded-lg p-8">
        {/* Logo */}
        <div className="flex justify-center mb-4 max-w-[170px] h-14 relative mx-auto">
          <Image
            src="https://login.sura.com/media/svg/logo-sura.svg"
            alt="Sura"
            fill
            className="object-contain"
          />
        </div>

        {/* Título */}
        <h2 className="text-center text-2xl font-semibold">Iniciar sesión</h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          EPS SURA
        </p>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit(onSubmit, onErrors)}
          className="flex flex-col space-y-4"
        >
          {/* Tipo de identificación */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Tipo de identificación
            </label>
            <select
              // {...register("tipoDocumento")}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-blue-600 outline-none"
            >
              <option value="">Seleccione...</option>
              <option value="cc">Cédula de ciudadanía</option>
              <option value="ce">Cédula de extranjería</option>
              <option value="ti">Tarjeta de identidad</option>
            </select>
          </div>

          {/* Número de identificación */}
          <InputComponents
            label="Número de identificación"
            typeElement="text"
            placeHolder="Ingresa tu número de identificación"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-blue-600 outline-none"
            classLabel="block text-sm text-gray-700 mb-1"
            registerName="user"
            register={register}
          />

          {/* Contraseña */}
          <InputComponents
            label="Contraseña"
            typeElement="password"
            placeHolder="Ingresa tu contraseña"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-blue-600 outline-none"
            classLabel="block text-sm text-gray-700 mb-1"
            registerName="password"
            register={register}
          />

          {/* ¿Olvidaste tu contraseña? */}
          <div className="flex justify-between items-center text-sm">
            <a href="#" className="text-blue-600 hover:underline">
              ¿Has olvidado tu contraseña?
            </a>
          </div>

          {/* Botón ingresar */}
          <button
            type="submit"
            className="w-full bg-blue-800 hover:bg-blue-900 text-white py-3 rounded-full font-medium"
          >
            Iniciar sesión
          </button>
        </form>

        {/* Crear cuenta */}
        <p className="text-center text-sm mt-6">
          ¿Ya tienes una cuenta?{" "}
          <Link href="/login" className="text-blue-600 hover:underline font-medium">
            Iniciar Sesión
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div className="absolute bottom-2 text-xs text-gray-500 text-center w-full">
        © 2025 Suramericana S.A &nbsp; | &nbsp;
        <a href="#" className="hover:underline">
          Ayuda
        </a>{" "}
        |{" "}
        <a href="#" className="hover:underline">
          Privacidad
        </a>{" "}
        |{" "}
        <a href="#" className="hover:underline">
          Seguridad
        </a>
      </div>
    </div>
  );
}
