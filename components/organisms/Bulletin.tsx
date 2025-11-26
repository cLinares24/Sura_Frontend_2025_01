"use client";
import React, { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import InputComponents from "../atoms/InputComponents";
import ButtonComponent from "../atoms/ButtonComponent";

import { QADTO } from "@/interfaces/QADTO";
import { qaSchema } from "@/schemas/qa";
import { useQA } from "@/hooks/useQA";

export default function Bulletin() {
 const { sendQA, loading } = useQA();

const {
  register,
  handleSubmit,
  formState: { errors },
  reset,
} = useForm<QADTO>({
  resolver: zodResolver(qaSchema),
});

const onSubmit = async (data: QADTO) => {
  try {
    await sendQA(data);
    reset();
  } catch {}
};


  return (
    <section className="bg-[#f2f2f2] py-10 px-4">
      <div className="mx-auto text-center mb-5">
        <h2 className="text-[#0db26b] text-xl md:text-3xl py-2 mb-2">
          Dudas y quejas
        </h2>
        <div className="border-t-2 border-[#ccd6ec] max-w-[60px] mx-auto"></div>
      </div>

      <div className="w-full max-w-4xl md:max-w-5xl mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-8 md:p-8 p-5"
        >
          {/* CORREO */}
          <div>
            <InputComponents
              label="Correo electrónico*"
              typeElement="email"
              placeHolder="Ingresa tu correo electrónico"
              className="w-full bg-transparent border-b border-black focus:border-[#0db26b] outline-none py-2 placeholder-gray-500 text-sm text-black"
              classLabel="block text-sm text-black mb-1"
              registerName="correo"
              register={register}
            />

            {errors.correo && (
              <span className="text-red-600 text-sm">
                {errors.correo.message}
              </span>
            )}
          </div>

          {/* NOMBRE */}
          <div>
            <InputComponents
              label="Nombre Completo*"
              typeElement="text"
              placeHolder="Ingresa tu nombre completo"
              className="w-full bg-transparent border-b border-black focus:border-[#0db26b] outline-none py-2 placeholder-gray-500 text-sm text-black"
              classLabel="block text-sm text-black mb-1"
              registerName="nombre"
              register={register}
            />

            {errors.nombre && (
              <span className="text-red-600 text-sm">
                {errors.nombre.message}
              </span>
            )}
          </div>

          {/* OBSERVACIONES */}
          <div>
            <InputComponents
              label="Observaciones*"
              typeElement="text"
              placeHolder="Ingresa tus dudas o quejas"
              className="w-full bg-transparent border-b border-black focus:border-[#0db26b] outline-none py-2 placeholder-gray-500 text-sm text-black"
              classLabel="block text-sm text-black mb-1"
              registerName="observaciones"
              register={register}
            />

            {errors.observaciones && (
              <span className="text-red-600 text-sm">
                {errors.observaciones.message}
              </span>
            )}
          </div>

          <ButtonComponent
            type="submit"
            className="w-full bg-[#9155a7] hover:bg-[#8538a1] text-white py-2 font-medium"
          >
            {loading ? "Enviando..." : "Enviar"}
          </ButtonComponent>
        </form>
      </div>
    </section>
  );
}
