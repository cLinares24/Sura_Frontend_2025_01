import { Medico, useMedicos } from "@/context/DoctorsContext";
import { useState } from "react";
import { CalendarComponent } from "@/components/atoms/CalendarComponent";

export const EditDoctorModal = ({
  medico,
  onClose,
}: {
  medico: Medico;
  onClose: () => void;
}) => {
  const { editarMedico } = useMedicos();
  const [editado, setEditado] = useState<Medico>({ ...medico });

  const especialidades = [
    { id: 1, nombre: "Medicina General" },
    { id: 2, nombre: "Pediatría" },
    { id: 3, nombre: "Cardiología" },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl w-96 space-y-3">
        <h2 className="text-xl font-bold">Editar Médico</h2>

        <input
          className="w-full p-2 border rounded"
          value={editado.nombre}
          onChange={(e) => setEditado({ ...editado, nombre: e.target.value })}
        />
        <input
          className="w-full p-2 border rounded"
          value={editado.correo}
          onChange={(e) => setEditado({ ...editado, correo: e.target.value })}
        />

        <select
          className="w-full p-2 border rounded"
          value={editado.id_especialidad}
          onChange={(e) =>
            setEditado({ ...editado, id_especialidad: Number(e.target.value) })
          }
        >
          {especialidades.map((es) => (
            <option key={es.id} value={es.id}>
              {es.nombre}
            </option>
          ))}
        </select>x

        <CalendarComponent
          onAdd={(d) =>
            setEditado({
              ...editado,
              disponibilidad: [...(editado.disponibilidad || []), d],
            })
          }
        />

        <button
          className="bg-purple-600 text-white w-full p-2 rounded-lg"
          onClick={() => {
            editarMedico(editado);
            onClose();
          }}
        >
          Guardar Cambios
        </button>
        <button className="text-red-500 w-full" onClick={onClose}>
          Cancelar
        </button>
      </div>
    </div>
  );
};
