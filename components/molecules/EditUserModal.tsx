// "use client";

// import InputComponents from "@/components/atoms/InputComponents";
// import ButtonComponent from "@/components/atoms/ButtonComponent";
// import { UserAdminDTO } from "@/interfaces/user";
// import { useUsers } from "@/context/UsersContext";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { userAdminSchema } from "@/schemas/userAdmin";
// import { z } from "zod";

// interface EditUserModalProps {
//   user: UserAdminDTO;
//   onClose: () => void;
// }

// type EditUserForm = z.infer<typeof userAdminSchema>;

// export const EditUserModal = ({ user, onClose }: EditUserModalProps) => {
//   const { editarUsuario } = useUsers();

//   const { register, handleSubmit, formState: { errors } } = useForm<EditUserForm>({
//     resolver: zodResolver(userAdminSchema),
//     defaultValues: {
//       nombre: user.nombre,
//       correo: user.correo,
//       cedula: user.cedula,
//       rol: user.rol,
//     },
//   });

//   const onSubmit = (data: EditUserForm) => {
//     editarUsuario({
//       ...user,
//       ...data,
//     });
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="bg-white p-6 rounded-2xl w-[30%] space-y-3 shadow-lg"
//       >
//         <h2 className="text-2xl font-bold text-center text-[#9155a7] py-5">
//           Editar Usuario
//         </h2>

//         {/* Nombre */}
//         <InputComponents
//           typeElement="text"
//           label="Nombre"
//           placeHolder="Nombre"
//           register={register}
//           registerName="nombre"
//         />
//         {errors.nombre && <p className="text-red-500">{errors.nombre.message}</p>}

//         {/* Cédula */}
//         <InputComponents
//           typeElement="text"
//           label="Cédula"
//           placeHolder="Cédula"
//           register={register}
//           registerName="cedula"
//         />
//         {errors.cedula && <p className="text-red-500">{errors.cedula.message}</p>}

//         {/* Correo */}
//         <InputComponents
//           typeElement="email"
//           label="Correo"
//           placeHolder="Correo"
//           register={register}
//           registerName="correo"
//         />
//         {errors.correo && <p className="text-red-500">{errors.correo.message}</p>}

//         {/* Rol */}
//         <select
//           {...register("rol")}
//           className="w-full p-2 border rounded"
//         >
//           <option value="paciente">Paciente</option>
//           <option value="medico">Médico</option>
//           <option value="admin">Administrador</option>
//         </select>

//         <ButtonComponent type="submit" className="bg-[#9155a7] text-white w-full p-2 rounded-lg mt-3 hover:bg-[#7c3ea0]">
//           Guardar Cambios
//         </ButtonComponent>

//         <ButtonComponent
//           type="button"
//           className="text-gray-500 w-full"
//           onClick={onClose}
//         >
//           Cancelar
//         </ButtonComponent>
//       </form>
//     </div>
//   );
// };

"use client";

import InputComponents from "@/components/atoms/InputComponents";
import ButtonComponent from "@/components/atoms/ButtonComponent";
import { UserAdminDTO } from "@/interfaces/user";
import { useUsers } from "@/context/UsersContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userAdminSchema } from "@/schemas/userAdmin";
import { z } from "zod";

interface EditUserModalProps {
  user: UserAdminDTO;
  onClose: () => void;
}

type EditUserForm = z.infer<typeof userAdminSchema>;

export const EditUserModal = ({ user, onClose }: EditUserModalProps) => {
  const { editarUsuario } = useUsers();

  const { register, handleSubmit, formState: { errors } } = useForm<EditUserForm>({
    resolver: zodResolver(userAdminSchema),
    defaultValues: {
      nombre: user.nombre,
      correo: user.correo,
      cedula: user.cedula,
      rol: user.rol,
    },
  });

  const onSubmit = (data: EditUserForm) => {
    editarUsuario({
      ...user,
      ...data,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-2xl w-[30%] shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-[#9155a7] py-5">
          Editar Usuario
        </h2>

        {/* Nombre */}
        <div className="flex flex-col gap-2 w-full">
          <InputComponents
            typeElement="text"
            label="Nombre"
            placeHolder="Nombre"
            register={register}
            registerName="nombre"
          />
          {errors.nombre && <p className="text-red-500">{errors.nombre.message}</p>}
        </div>

        {/* Cédula */}
        <div className="flex flex-col gap-2 w-full">
          <InputComponents
            typeElement="text"
            label="Cédula"
            placeHolder="Cédula"
            register={register}
            registerName="cedula"
          />
          {errors.cedula && <p className="text-red-500">{errors.cedula.message}</p>}
        </div>

        {/* Correo */}
        <div className="flex flex-col gap-2 w-full">
          <InputComponents
            typeElement="email"
            label="Correo"
            placeHolder="Correo"
            register={register}
            registerName="correo"
          />
          {errors.correo && <p className="text-red-500">{errors.correo.message}</p>}
        </div>

        {/* Rol */}
        <div className="space-y-1">
          <label className="font-medium text-sm">Rol</label>
          <select
            {...register("rol")}
            className="w-full p-2 border rounded"
          >
            <option value="paciente">Paciente</option>
            <option value="medico">Médico</option>
            <option value="admin">Administrador</option>
          </select>
        </div>

        <ButtonComponent
          type="submit"
          className="bg-[#9155a7] text-white w-full p-2 rounded-lg hover:bg-[#7c3ea0]"
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
