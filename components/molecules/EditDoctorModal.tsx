"use client";
import { Medico } from "@/context/DoctorsContext";
import InputComponents from "@/components/atoms/InputComponents";
import ButtonComponent from "@/components/atoms/ButtonComponent";
import { CalendarComponent } from "@/components/atoms/CalendarComponent";
import { useEditarMedicoForm } from "@/hooks/useEditDoctor";
import { useState } from "react";

export const EditDoctorModal = ({
  medico,
  onClose,
}: {
  medico: Medico;
  onClose: () => void;
}) => {
  const { register, handleSubmit, errors, onSubmit, onError } =
    useEditarMedicoForm(medico, onClose);

  const [disponibilidad, setDisponibilidad] = useState(
    medico.disponibilidad || []
  );

  const especialidades = [
    { id: 1, nombre: "Medicina General" },
    { id: 2, nombre: "Pediatría" },
    { id: 3, nombre: "Cardiología" },
  ];

  return (
   <div className="fixed inset-0 bg-opacity-40 flex items-center justify-center z-[9999]">

      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="bg-white p-6 rounded-2xl w-[30%] space-y-3 shadow-fuchsia-300 shadow-sm"
      >
        <h2 className="font-bold text-[#9155a7] text-center py-5 text-2xl">
          Editar Médico
        </h2>

        {/* Nombre */}
        <InputComponents
          typeElement="text"
          label="Nombre"
          placeHolder="Nombre"
          className="w-full border-0 border-b-2 border-gray-300 rounded-none focus:border-[#9155a7] focus:outline-none transition"
          classLabel="block  font-semibold"  
          register={register}
          registerName="nombre"
        />
        {errors.nombre && (
          <p className="text-red-500">{errors.nombre.message}</p>
        )}

        {/* Cédula */}
        <InputComponents
          typeElement="text"
          label="Cédula"
          placeHolder="Cédula"
          className="w-full border-0 border-b-2 border-gray-300 rounded-none focus:border-[#9155a7] focus:outline-none transition "
          classLabel="block  font-semibold"  
          register={register}
          registerName="cedula"
        />
        {errors.cedula && (
          <p className="text-red-500">{errors.cedula.message}</p>
        )}

        {/* Correo */}
        <InputComponents
          typeElement="text"
          label="Correo"
          placeHolder="Correo"
          className="w-full  border-0 border-b-2 border-gray-300 rounded-none focus:border-[#9155a7] focus:outline-none transition"
          classLabel="block  font-semibold"  
          register={register}
          registerName="correo"
        />
        {errors.correo && (
          <p className="text-red-500">{errors.correo.message}</p>
        )}

        {/* Teléfono */}
        <InputComponents
          typeElement="text"
          label="Teléfono"
          placeHolder="Teléfono"
          className="w-full  border-0 border-b-2 border-gray-300 rounded-none focus:border-[#9155a7] focus:outline-none transition"
          classLabel="block  font-semibold"  
          register={register}
          registerName="telefono"
        />
        {errors.telefono && (
          <p className="text-red-500">{errors.telefono.message}</p>
        )}

        {/* Especialidad */}
        {/* <select
          className="w-full p-2 border rounded"
          {...register("id_especialidad")}
        >
          {especialidades.map((es) => (
            <option key={es.id} value={es.id}>
              {es.nombre}
            </option>
          ))}
        </select> */}

        <ButtonComponent
          type="submit"
          className="bg-[#9155a7] text-white w-full p-2 rounded-lg mt-3 hover:bg-[#9155a7]"
        >
          Guardar Cambios
        </ButtonComponent>

        <ButtonComponent
          className="text-gray-500 w-full"
          onClick={onClose}
          type="button"
        >
          Cancelar
        </ButtonComponent>
      </form>
    </div>
  );
};
