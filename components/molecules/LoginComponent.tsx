"use client";

import Link from "next/link";
import InputComponents from "../atoms/InputComponents";
import ButtonComponent from "../atoms/ButtonComponent";
import { useLogin } from "@/hooks/useLoginForm";

export default function LoginComponent() {
  const { register, handleSubmit, errors, onSubmit, onErrors } = useLogin();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[40%] bg-[#6DCCA3]/20 rounded-lg p-8 border border-[#6DCCA3]">

        {/* Logo */}
        <Link href="/../">
          <div className="flex items-center cursor-pointer">
            <svg
              fill="#ad46ff"
              width="32px"
              height="32px"
              viewBox="0 0 32 32"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinejoin: "round",
                strokeMiterlimit: 2,
              }}
              stroke="#ad46ff"
              strokeWidth="0.00032"
            >
              <path d="M15.988,1.988c-7.727,-0 -14,6.273 -14,14c-0,7.726 6.273,14 14,14c7.726,-0 14,-6.274 14,-14c-0,-7.727 -6.274,-14 -14,-14Zm-0,2c6.623,-0 12,5.377 12,12c-0,6.623 -5.377,12 -12,12c-6.623,-0 -12,-5.377 -12,-12c-0,-6.623 5.377,-12 12,-12Z"></path>
              <path d="M11.976,11.992l-2.976,-0c-1.657,-0 -3,1.343 -3,3l0,2.023c0,1.657 1.343,3 3,3c0,-0 2.976,-0 2.976,-0c-0,-0 -0,2.998 -0,2.998c-0,1.657 1.343,3 3,3l2.023,0c1.657,0 3,-1.343 3,-3c-0,0 -0,-2.998 -0,-2.998c-0,-0 3.001,-0 3.001,-0c1.657,-0 3,-1.343 3,-3l-0,-2.023c-0,-1.657 -1.343,-3 -3,-3c-0,-0 -3.001,-0 -3.001,-0c-0,-0 -0,-2.953 -0,-2.953c-0,-1.657 -1.343,-3 -3,-3l-2.023,-0c-1.657,-0 -3,1.343 -3,3l-0,2.953Zm1,2c0.552,-0 1,-0.448 1,-1l-0,-3.953c-0,-0.553 0.447,-1 1,-1c-0,-0 2.023,-0 2.023,-0c0.552,-0 1,0.447 1,1l-0,3.953c-0,0.552 0.447,1 1,1l4.001,-0c0.552,-0 1,0.447 1,1c0,-0 -0,2.023 -0,2.023c-0,0.552 -0.448,1 -1,1l-4.001,-0c-0.553,-0 -1,0.447 -1,1l-0,3.998c-0,0.553 -0.448,1 -1,1c-0,0 -2.023,0 -2.023,0c-0.553,0 -1,-0.447 -1,-1l-0,-3.998c-0,-0.553 -0.448,-1 -1,-1l-3.976,-0c-0.552,-0 -1,-0.448 -1,-1c-0,-0 0,-2.023 0,-2.023c0,-0.553 0.448,-1 1,-1l3.976,-0Z"></path>
            </svg>

            <div className="flex flex-col leading-tight">
              <div>
                <span className="text-purple-500 font-semibold text-xl">Medici</span>
                <span className="text-green-500 font-semibold text-xl">Col</span>
              </div>
            </div>
          </div>
        </Link>

        <h2 className="text-center text-2xl font-semibold mb-3">Iniciar sesión</h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit, onErrors)}
          className="flex flex-col space-y-4"
        >
          {/* Correo */}
          <div className="flex flex-col">
            <InputComponents
              label="Correo electrónico*"
              typeElement="email"
              placeHolder="Ingresa tu correo electrónico"
              register={register}
              registerName="correo"
              className="w-full bg-transparent border-b border-black focus:border-[#0db26b] outline-none py-2 placeholder-gray-500 text-sm text-black"
              classLabel="block text-md text-black mb-1 font-semibold"
            />
            {errors.correo && (
              <span className="text-red-500 text-xs">{errors.correo.message}</span>
            )}
          </div>

          {/* Contraseña */}
          <div className="flex flex-col">
            <InputComponents
              label="Contraseña*"
              typeElement="password"
              placeHolder="Ingresa tu contraseña"
              register={register}
              registerName="contrasena"
              className="w-full bg-transparent border-b border-black focus:border-[#0db26b] outline-none py-2 placeholder-gray-500 text-sm text-black"
              classLabel="block text-md text-black mb-1 font-semibold"
            />
            {errors.contrasena && (
              <span className="text-red-500 text-xs">{errors.contrasena.message}</span>
            )}
          </div>

          <ButtonComponent
            type="submit"
            className="w-full bg-[#9155a7] hover:bg-[#8538a1] text-white py-2 rounded font-medium"
          >
            Enviar
          </ButtonComponent>
        </form>

        <p className="text-center text-sm mt-6">
          ¿No tienes cuenta?{" "}
          <Link href="/register" className="text-[#00B05D] hover:underline font-medium">
            Regístrate
          </Link>
        </p>
      </div>

      <div className="absolute bottom-2 text-xs text-gray-500 text-center w-full">
        © 2025 MediciCol S.A | Ayuda | Privacidad | Seguridad
      </div>
    </div>
  );
}
