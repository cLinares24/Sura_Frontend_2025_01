"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import InputComponents from "./../atoms/InputComponents";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginDTO } from "../../interfaces/user";
import { qaSchema } from "../../schemas/qa";
import { useForm, SubmitHandler } from "react-hook-form";
import { loginService } from "../../libs/authService";
import { QADTO } from "@/interfaces/products/qa";
import ButtonComponent from "../atoms/ButtonComponent";


interface FormValues {
  nombre: string;
  email: string;
  duda: string;
}

export default function Bulletin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QADTO>({
    resolver: zodResolver(qaSchema),
  });

  // Manejo de errores
 const onErrors = () => {
  const campos = Object.keys(errors);

  if (campos.length === 0) {
    alert("Por favor, ingrese los datos.");
    return;
  }

  // Busca el primer mensaje disponible o usa un texto genérico
  const primerError = errors[campos[0] as keyof typeof errors];
  const mensaje = primerError?.message || "Por favor, ingrese los datos.";

  alert(mensaje);
};


  // onSubmit temporal
  const onSubmit = (data: QADTO) => {
    console.log("Formulario enviado:", data);
    alert("Melo");
    // Por ahora no hace nada más
  };


  /*
const onSubmit: SubmitHandler<LoginDTO> = (data) => {
  loginService(data)
    .then((info) => {
      localStorage.setItem("token", info.access_token);
    })
    .catch(() => {
      console.log("Error en solicitud");
    });
};
*/


  return (
    <section className="bg-[#f2f2f2] py-10 w-full h-max-[650px]">
      <div className="mx-auto text-center mb-5">
        <h2 className="text-[#0db26b] text-xl md:text-3xl py-2 mb-2">
          Dudas y quejas
        </h2>
        <div className="border-t-2 border-[#ccd6ec] max-w-[60px] mx-auto"></div>
      </div>
      <div className="max-w-[800px] mx-auto items-center">

        <form
          onSubmit={handleSubmit(onSubmit, onErrors)}
          className="flex flex-col space-y-4"
        >
          {/* Correo */}
          <InputComponents
            label="Correo electrónico*"
            typeElement="email"
            placeHolder="Ingresa tu correo electrónico"
            className="w-full bg-transparent border-b border-black focus:border-[#0db26b] outline-none py-2 placeholder-gray-500 text-sm text-black"
            classLabel="block text-sm text-black mb-1"
            registerName="email"
            register={register}
          />

          <InputComponents
            label="Nombre Completo*"
            typeElement="text"
            placeHolder="Ingresa tu nombre completo"
            className="w-full bg-transparent border-b border-black focus:border-[#0db26b] outline-none py-2 placeholder-gray-500 text-sm text-black"
            classLabel="block text-sm text-black mb-1"
            registerName="name"
            register={register}
          />

          <InputComponents
            label="Observaciones*"
            typeElement="text-area"
            placeHolder="Ingresa tus dudas o quejas"
            className="w-full bg-transparent border-b border-black focus:border-[#0db26b] outline-none py-2 placeholder-gray-500 text-sm text-black"
            classLabel="block text-sm text-black mb-1"
            registerName="text"
            register={register}
          />

          <ButtonComponent
            label="Enviar"
            type="submit"
            className="w-full bg-[#9155a7] hover:bg-[#8538a1] text-white py-2 rounded- font-medium"
          />
        </form>
      </div>
    </section>
  );
}



