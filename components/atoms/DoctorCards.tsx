import { Medico } from "@/context/DoctorsContext";
import ButtonComponent from "./ButtonComponent";

export const DoctorCard = ({
  m,
  onEdit,
  onDelete,
}: {
  m: Medico;
  onEdit: () => void;
  onDelete: () => void;
}) => (
  <div className="p-4 rounded-xl shadow-lg transition-transform hover:scale-102  hover:shadow-green-300 hover:shadow-sm">
    <div className="space-y-1">
      <h2 className="font-bold text-lg text-[#0db26b]">{m.nombre}</h2>
      <p className="text-sm text-gray-800">Cédula: {m.cedula}</p>
      <p className="text-sm text-gray-800">Correo: {m.correo}</p>
      <p className="text-sm text-gray-800">Teléfono: {m.telefono}</p>
    </div>

    <div className="flex space-x-2 mt-4">
      <ButtonComponent
        className="bg-[#9155A7] hover:bg-[#5e3b6b] text-white px-4 py-2 rounded-xl font-medium transition-all shadow-sm hover:shadow-md"
        onClick={onEdit}
      >
        Editar
      </ButtonComponent>

      <ButtonComponent
        className="bg-gray-500 hover:bg-gray-800 text-white px-4 py-2 rounded-xl font-medium transition-all shadow-sm hover:shadow-md"
        onClick={onDelete}
      >
        Eliminar
      </ButtonComponent>
    </div>
  </div>
);
