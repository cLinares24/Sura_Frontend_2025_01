"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import ButtonComponent from "../atoms/ButtonComponent";

interface Doctor {
  id_medico: number;
  nombre: string;
  cedula: string;
  correo: string;
  telefono?: string;
  especialidades: string[]; // varias especialidades
}

export default function DoctorsComponent() {
  const [doctores, setDoctores] = useState<Doctor[]>([
    {
      id_medico: 1,
      nombre: "Dr. Juan Pérez",
      cedula: "12345",
      correo: "juan@correo.com",
      telefono: "3001234567",
      especialidades: ["Cardiología", "Medicina Interna"],
    },
    {
      id_medico: 2,
      nombre: "Dra. Ana Torres",
      cedula: "67890",
      correo: "ana@correo.com",
      telefono: "3107654321",
      especialidades: ["Pediatría"],
    },
    {
      id_medico: 3,
      nombre: "Dr. Carlos Ruiz",
      cedula: "11111",
      correo: "carlos@correo.com",
      especialidades: ["Dermatología", "Estética"],
    },
  ]);

  const [formAbierto, setFormAbierto] = useState<number | null>(null);

  // -------------------------
  // CREAR o EDITAR doctor
  // -------------------------
  const handleSave = async (e: React.FormEvent, doctorId?: number) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const nombre = formData.get("nombre")?.toString() || "";
    const cedula = formData.get("cedula")?.toString() || "";
    const correo = formData.get("correo")?.toString() || "";
    const telefono = formData.get("telefono")?.toString() || "";
    const especialidades =
      formData.get("especialidades")?.toString().split(",") || [];

    if (nombre.trim() === "" || cedula.trim() === "" || correo.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Nombre, cédula y correo son obligatorios.",
        confirmButtonColor: "#ad46ff",
      });
      return;
    }

    if (doctorId) {
      // editar
      const actualizados = doctores.map((doc) =>
        doc.id_medico === doctorId
          ? { ...doc, nombre, cedula, correo, telefono, especialidades }
          : doc
      );

      setDoctores(actualizados);
      setFormAbierto(null);

      Swal.fire({
        icon: "success",
        title: "Doctor editado",
        confirmButtonColor: "#ad46ff",
      });
    } else {
      // crear
      const nuevo: Doctor = {
        id_medico: doctores.length + 1,
        nombre,
        cedula,
        correo,
        telefono,
        especialidades,
      };

      setDoctores([...doctores, nuevo]);
      setFormAbierto(null);

      Swal.fire({
        icon: "success",
        title: "Doctor registrado",
        confirmButtonColor: "#ad46ff",
      });
    }
  };

  // -------------------------
  // ELIMINAR doctor
  // -------------------------
  const handleDelete = async (id: number) => {
    const confirm = await Swal.fire({
      icon: "warning",
      title: "¿Eliminar doctor?",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      confirmButtonColor: "#e63946",
      cancelButtonText: "Cancelar",
    });

    if (confirm.isConfirmed) {
      setDoctores(doctores.filter((d) => d.id_medico !== id));

      Swal.fire({
        icon: "success",
        title: "Eliminado",
        confirmButtonColor: "#ad46ff",
      });
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#f5f8ff] to-[#e1ffed] py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10">
        <h1 className="text-3xl font-extrabold text-[#7b3fa1] text-center mb-10">
          Gestión de Doctores
        </h1>

        {/* Botón para crear */}
        <div className="flex justify-end mb-6">
          <ButtonComponent
            onClick={() => setFormAbierto(0)}
            className="bg-[#9155A7] hover:bg-[#7e3e92] text-white font-semibold px-6 py-3 rounded-xl transition shadow-md hover:shadow-lg"
          >
            Añadir Doctor
          </ButtonComponent>
        </div>

        {/* Formulario de creación */}
        {formAbierto === 0 && (
          <form
            onSubmit={handleSave}
            className="bg-white border p-5 rounded-xl shadow-md mb-6"
          >
            <h2 className="text-lg font-bold text-[#7b3fa1] mb-4">
              Nuevo Doctor
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="nombre" placeholder="Nombre" className="input" />
              <input name="cedula" placeholder="Cédula" className="input" />
              <input name="correo" placeholder="Correo" className="input" />
              <input name="telefono" placeholder="Teléfono" className="input" />
            </div>

            <input
              name="especialidades"
              placeholder="Especialidades separadas por coma"
              className="input w-full mt-4"
            />

            <div className="flex justify-end mt-4 gap-3">
              <ButtonComponent
                type="button"
                onClick={() => setFormAbierto(null)}
                className="px-4 py-2 rounded-md text-gray-600 hover:bg-gray-200 transition"
              >
                Cancelar
              </ButtonComponent>

              <ButtonComponent
                type="submit"
                className="bg-[#9155A7] hover:bg-[#7e3e92] text-white px-4 py-2 rounded-md shadow"
              >
                Guardar
              </ButtonComponent>
            </div>
          </form>
        )}

        {/* Lista de Doctores */}
        <ul className="space-y-4">
          {doctores.map((doc) => (
            <li
              key={doc.id_medico}
              className="bg-white border p-5 rounded-xl shadow-md"
            >
              <div className="flex justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[#7b3fa1]">
                    {doc.nombre}
                  </h3>
                  <p className="text-gray-700 text-sm">Cédula: {doc.cedula}</p>
                  <p className="text-gray-700 text-sm">Correo: {doc.correo}</p>
                  {doc.telefono && (
                    <p className="text-gray-700 text-sm">
                      Teléfono: {doc.telefono}
                    </p>
                  )}
                  <p className="text-gray-800 mt-2">
                    <span className="font-semibold">Especialidades:</span>{" "}
                    {doc.especialidades.join(", ")}
                  </p>
                </div>

                {/* Botones */}
                <div className="flex flex-col gap-2">
                  <ButtonComponent
                    className="px-3 py-1 bg-[#9155A7] text-white rounded-md hover:bg-[#7e3e92]"
                    onClick={() => setFormAbierto(doc.id_medico)}
                  >
                    Editar
                  </ButtonComponent>
                  <ButtonComponent
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                    onClick={() => handleDelete(doc.id_medico)}
                  >
                    Eliminar
                  </ButtonComponent>
                </div>
              </div>

              {/* FORMULARIO DE EDICIÓN */}
              {formAbierto === doc.id_medico && (
                <form
                  onSubmit={(e) => handleSave(e, doc.id_medico)}
                  className="mt-4 bg-gray-50 p-4 rounded-xl"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      name="nombre"
                      defaultValue={doc.nombre}
                      className="input"
                    />
                    <input
                      name="cedula"
                      defaultValue={doc.cedula}
                      className="input"
                    />
                    <input
                      name="correo"
                      defaultValue={doc.correo}
                      className="input"
                    />
                    <input
                      name="telefono"
                      defaultValue={doc.telefono}
                      className="input"
                    />
                  </div>

                  <input
                    name="especialidades"
                    defaultValue={doc.especialidades.join(", ")}
                    className="input w-full mt-4"
                  />

                  <div className="flex justify-end mt-4 gap-3">
                    <ButtonComponent
                      type="button"
                      className="px-4 py-2 rounded-md text-gray-600 hover:bg-gray-200 transition"
                      onClick={() => setFormAbierto(null)}
                    >
                      Cancelar
                    </ButtonComponent>

                    <ButtonComponent
                      type="submit"
                      className="bg-[#9155A7] hover:bg-[#7e3e92] text-white px-4 py-2 rounded-md shadow"
                    >
                      Guardar Cambios
                    </ButtonComponent>
                  </div>
                </form>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
