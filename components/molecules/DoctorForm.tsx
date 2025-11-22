"use client";

import ButtonComponent from "../atoms/ButtonComponent";
import InputComponents from "../atoms/InputComponents";
import { useMedicoForm } from "@/hooks/useDoctorForm";

export const MedicoForm = () => {
  const { register, handleSubmit, errors, onSubmit, onError } = useMedicoForm();
  
  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="p-6 bg-white rounded-2xl shadow-lg border border-[#0db26b] space-y-4"
    >
      <h2 className="font-bold text-2xl text-[#0db26b]">Añadir Médico</h2>

      {/* Nombre */}
      <InputComponents
        label=""
        typeElement="text"
        placeHolder="Nombre"
        className="p-3 border border-gray-300 w-full rounded-xl focus:outline-none focus:border-[#0db26b] transition"
        classLabel="block"
        register={register}
        registerName="nombre"
      />
      {errors.nombre && (
        <p className="text-red-500 text-sm">{errors.nombre.message}</p>
      )}

      {/* Cédula */}
      <InputComponents
        label=""
        typeElement="text"
        placeHolder="Cédula"
        className="p-3 border border-gray-300 w-full rounded-xl focus:outline-none focus:border-[#0db26b] transition"
        classLabel="block"
        register={register}
        registerName="cedula"
      />
      {errors.cedula && (
        <p className="text-red-500 text-sm">{errors.cedula.message}</p>
      )}

      {/* Correo */}
      <InputComponents
        label=""
        typeElement="text"
        placeHolder="Correo"
        className="p-3 border border-gray-300 w-full rounded-xl focus:outline-none focus:border-[#0db26b] transition"
        classLabel="block"
        register={register}
        registerName="correo"
      />
      {errors.correo && (
        <p className="text-red-500 text-sm">{errors.correo.message}</p>
      )}

      {/* Teléfono */}
      <InputComponents
        label=""
        typeElement="text"
        placeHolder="Teléfono"
        className="p-3 border border-gray-300 w-full rounded-xl focus:outline-none focus:border-[#0db26b] transition"
        classLabel="block"
        register={register}
        registerName="telefono"
      />
      {errors.telefono && (
        <p className="text-red-500 text-sm">{errors.telefono.message}</p>
      )}

      <ButtonComponent
        type="submit"
        className="bg-[#0db26b] hover:bg-[#7d4690] text-white w-full p-3 rounded-xl font-semibold transition-all"
      >
        Agregar
      </ButtonComponent>
    </form>
  );
};
