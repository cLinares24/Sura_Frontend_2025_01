"use client";

import { useSpecialities } from "@/hooks/useSpecialities";
import ButtonComponent from "../atoms/ButtonComponent";
import InputComponents from "../atoms/InputComponents";
import { useDoctorForm } from "@/hooks/useDoctorForm";

export const DoctorForm = () => {
  const { register, handleSubmit, errors, onSubmit } = useDoctorForm();
  const { especialidades } = useSpecialities();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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

      {/* Especialidad */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">Especialidad</label>

        {/* <select
          {...register("id_especialidad")}
          className="p-3 border border-gray-300 w-full rounded-xl focus:outline-none focus:border-[#0db26b] transition"
        >
          <option value="">Seleccione una especialidad</option>

          {especialidades.map((esp) => (
            <option key={esp.id_especialidad} value={esp.id_especialidad}>
              {esp.nombre}
            </option>
          ))}
        </select> */}

      <select
        {...register("id_especialidad")}
        className="p-3 border border-gray-300 w-full rounded-xl focus:outline-none focus:border-[#0db26b] transition"
      >
        <option value="">Seleccione una especialidad</option>

        {especialidades.map((esp) => (
          <option key={esp.id_especialidad} value={esp.id_especialidad}>
            {esp.nombre}
          </option>
        ))}
      </select>

        {errors.id_especialidad && (
          <p className="text-red-500 text-sm">{errors.id_especialidad.message}</p>
        )}
      </div>


      {/* Contraseña */}
      <InputComponents
        label=""
        typeElement="password"
        placeHolder="Contraseña"
        className="p-3 border border-gray-300 w-full rounded-xl focus:outline-none focus:border-[#0db26b] transition"
        classLabel="block"
        register={register}
        registerName="contrasena"
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
