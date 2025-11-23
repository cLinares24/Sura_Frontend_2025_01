"use client";
import { useState } from "react";
import { z } from "zod";
import InputComponents from "@/components/atoms/InputComponents";
import ButtonComponent from "@/components/atoms/ButtonComponent";
import { useUsuarios, UserDTO } from "@/context/UsersContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/schemas/user";

interface EditUserModalProps {
  user: UserDTO;
  onClose: () => void;
}

type EditUserForm = z.infer<typeof userSchema>;

export const EditUserModal = ({ user, onClose }: EditUserModalProps) => {
  const { editarUsuario } = useUsuarios();
const { register, handleSubmit, formState: { errors } } = useForm<EditUserForm>({
  defaultValues: user,
  resolver: zodResolver(userSchema),
});


const onSubmit = (data: EditUserForm) => {
  // Mapea los datos al UserDTO si necesitas mantener las contraseñas
  const updatedUser: UserDTO = {
    ...user,
    ...data, // cedula, genero, nombre, correo, rol
  };
  editarUsuario(updatedUser);
  onClose();
};

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-2xl w-[30%] space-y-3 shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center text-[#9155a7] py-5">
          Editar Usuario
        </h2>

        {/* Nombre */}
        <InputComponents
          typeElement="text"
          label="Nombre"
          placeHolder="Nombre"
          className="w-full border-0 border-b-2 border-gray-300 rounded-none focus:border-[#9155a7] focus:outline-none transition"
          classLabel="block font-semibold"
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
          className="w-full border-0 border-b-2 border-gray-300 rounded-none focus:border-[#9155a7] focus:outline-none transition"
          classLabel="block font-semibold"
          register={register}
          registerName="cedula"
        />
        {errors.cedula && (
          <p className="text-red-500">{errors.cedula.message}</p>
        )}

        {/* Correo */}
        <InputComponents
          typeElement="email"
          label="Correo"
          placeHolder="Correo"
          className="w-full border-0 border-b-2 border-gray-300 rounded-none focus:border-[#9155a7] focus:outline-none transition"
          classLabel="block font-semibold"
          register={register}
          registerName="correo"
        />
        {errors.correo && (
          <p className="text-red-500">{errors.correo.message}</p>
        )}

        {/* Rol */}
        <select
          {...register("rol")}
          className="w-full p-2 border rounded focus:outline-none focus:border-[#9155a7]"
        >
          <option value="A">Administrador</option>
          <option value="U">Usuario</option>
        </select>

        <ButtonComponent
          type="submit"
          className="bg-[#9155a7] text-white w-full p-2 rounded-lg mt-3 hover:bg-[#7c3ea0]"
        >
          Guardar Cambios
        </ButtonComponent>

        <ButtonComponent
          type="button"
          className="text-gray-500 w-full"
          onClick={onClose}
        >
          Cancelar
        </ButtonComponent>
      </form>
    </div>
  );
};
