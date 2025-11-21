"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import ButtonComponent from "../atoms/ButtonComponent";

interface AddDoctor {
  idEspecialidad: number;
  nombreEspecialidad: string;
  onClose: () => void;
}

export default function AgregarMedicoForm({
  idEspecialidad,
  nombreEspecialidad,
  onClose,
}: AddDoctor) {
  const [formData, setFormData] = useState({
    nombre: "",
    cedula: "",
    correo: "",
    telefono: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { nombre, cedula, correo } = formData;
    if (!nombre || !cedula || !correo) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Por favor, completa los campos obligatorios.",
        confirmButtonColor: "#ad46ff",
      });
      return;
    }

    // Aquí luego harás un POST al backend con id_especialidad
    console.log("Nuevo médico:", {
      ...formData,
      id_especialidad: idEspecialidad,
    });

    await Swal.fire({
      icon: "success",
      title: "¡Médico agregado!",
      text: `Se agregó correctamente a ${nombre} en ${nombreEspecialidad}.`,
      confirmButtonColor: "#ad46ff",
    });

    onClose(); // Cierra el formulario
  };

  return (
    <div className="mt-3 border-t border-gray-200 pt-4 bg-gray-50 rounded-lg p-4">
      <h3 className="text-md font-semibold text-[#9155A7] mb-3">
        Nuevo médico en {nombreEspecialidad}
      </h3>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          name="nombre"
          placeholder="Nombre completo*"
          value={formData.nombre}
          onChange={handleChange}
          className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#9155A7]"
        />
        <input
          name="cedula"
          placeholder="Cédula*"
          value={formData.cedula}
          onChange={handleChange}
          className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#9155A7]"
        />
        <input
          name="correo"
          type="email"
          placeholder="Correo electrónico*"
          value={formData.correo}
          onChange={handleChange}
          className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#9155A7]"
        />
        <input
          name="telefono"
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={handleChange}
          className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#9155A7]"
        />

        <div className="flex justify-end gap-3 mt-2">
          <ButtonComponent
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-md text-gray-600 hover:bg-gray-200 transition text-sm"
          >
            Cancelar
          </ButtonComponent>
          <ButtonComponent
            type="submit"
            className="px-5 py-2 rounded-md bg-[#9155A7] hover:bg-[#7e3e92] text-white text-sm"
          >
            Guardar
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
}
