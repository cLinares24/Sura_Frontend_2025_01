"use client";

import InputComponents from "../atoms/InputComponents";
import ButtonComponent from "../atoms/ButtonComponent";
import Link from "next/link";
import { useRegisterForm } from "@/hooks/useRegisterForm";

export default function RegisterComponent() {
  const { register, errors, handleSubmit, onSubmit, onErrors } =
    useRegisterForm();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[45%] bg-[#6DCCA3]/20 rounded-lg p-8 border border-[#6DCCA3]">
        <Link href="/../">
          {/* Logo */}
          <div className="flex items-center cursor-pointer">
            <svg fill="#ad46ff" width="32px" height="32px" viewBox="0 0 32 32">
              <path d="M15.988,1.988c-7.727..."></path>
            </svg>

            <div className="flex flex-col leading-tight">
              <div>
                <span className="text-purple-500 font-semibold text-xl">
                  Medici
                </span>
                <span className="text-green-500 font-semibold text-xl">
                  Col
                </span>
              </div>
            </div>
          </div>
        </Link>

        <h2 className="text-center text-2xl font-semibold mb-3">Regístrate</h2>

        <form
          onSubmit={handleSubmit(onSubmit, onErrors)}
          className="grid grid-cols-2 gap-10"
        >
          {/* Correo */}
          <div className="flex flex-col">
            <InputComponents
              label="Documento de Identidad*"
              typeElement="text"
              placeHolder="Ingresa tu documento de identidad"
              className="w-full bg-transparent border-b border-black focus:border-[#0db26b] outline-none py-2 placeholder-gray-500 text-sm text-black"
              classLabel="block text-md text-black mb-1 font-semibold"
              registerName="cedula"
              register={register}
            />
            {errors.cedula && (
              <span className="text-red-500 text-xs">
                {errors.cedula.message}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <InputComponents
              label="Género*"
              typeElement="text"
              placeHolder="Selecciona tu género"
              className="w-full bg-transparent border-b border-black focus:border-[#0db26b] outline-none py-2 placeholder-gray-500 text-sm text-black"
              classLabel="block text-md text-black mb-1 font-semibold"
              registerName="genero"
              register={register}
              listValues={[
                { value: "", label: "Selecciona una opción..." },
                { value: "M", label: "Masculino" },
                { value: "F", label: "Femenino" },
              ]}
            />
            {errors.genero && (
              <span className="text-red-500 text-xs">
                {errors.genero.message}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <InputComponents
              label="Nombre*"
              typeElement="text"
              placeHolder="Ingresa tu nombre completo"
              className="w-full bg-transparent border-b border-black focus:border-[#0db26b] outline-none py-2 placeholder-gray-500 text-sm text-black"
              classLabel="block text-md text-black mb-1 font-semibold"
              registerName="nombre"
              register={register}
            />
            {errors.nombre && (
              <span className="text-red-500 text-xs">
                {errors.nombre.message}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <InputComponents
              label="Correo electrónico*"
              typeElement="email"
              placeHolder="Ingresa tu correo electrónico"
              className="w-full bg-transparent border-b border-black focus:border-[#0db26b] outline-none py-2 placeholder-gray-500 text-sm text-black"
              classLabel="block text-md text-black mb-1 font-semibold"
              registerName="correo"
              register={register}
            />
            {errors.correo && (
              <span className="text-red-500 text-xs">
                {errors.correo.message}
              </span>
            )}
          </div>

          {/* Contraseña */}
          <div className="flex flex-col">
            <InputComponents
              label="Contraseña*"
              typeElement="password"
              placeHolder="Ingresa tu contraseña"
              className="w-full bg-transparent border-b border-black focus:border-[#0db26b] outline-none py-2 placeholder-gray-500 text-sm text-black"
              classLabel="block text-md text-black mb-1 font-semibold"
              registerName="contrasena"
              register={register}
            />
            {errors.contrasena && (
              <span className="text-red-500 text-xs">
                {errors.contrasena.message}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <InputComponents
              label="Confirma tu contraseña*"
              typeElement="password"
              placeHolder="Confirma tu contraseña"
              className="w-full bg-transparent border-b border-black focus:border-[#0db26b] outline-none py-2 placeholder-gray-500 text-sm text-black"
              classLabel="block text-md text-black mb-1 font-semibold"
              registerName="contrasena2"
              register={register}
            />
            {errors.contrasena2 && (
              <span className="text-red-500 text-xs">
                {errors.contrasena2.message}
              </span>
            )}
          </div>

          {/* Campo oculto que siempre envía "U" */}
          <input type="hidden" {...register("rol")} value="U" />

          {/* Botón en toda la fila */}
          <div className="col-span-2">
            <ButtonComponent
              type="submit"
              className="w-full bg-[#9155a7] hover:bg-[#8538a1] text-white py-2 rounded font-medium"
            >
              Enviar
            </ButtonComponent>
          </div>
        </form>

        <p className="text-center text-sm mt-6">
          ¿Ya tienes cuenta?{" "}
          <Link
            href="/login"
            className="text-[#00B05D] hover:underline font-medium"
          >
            Inicia Sesión
          </Link>
        </p>
      </div>

      <div className="absolute bottom-2 text-xs text-gray-500 text-center w-full">
        © 2025 MediciCol S.A | Ayuda | Privacidad | Seguridad
      </div>
    </div>
  );
}
