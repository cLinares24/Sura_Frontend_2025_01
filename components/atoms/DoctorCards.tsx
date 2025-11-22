import { Medico } from "@/context/DoctorsContext";


export const DoctorCard = ({ m, onEdit, onDelete }: { m: Medico; onEdit: () => void; onDelete: () => void }) => (
<div className="border p-4 rounded-xl shadow-sm flex justify-between items-center">
<div>
<h2 className="font-bold text-lg">{m.nombre}</h2>
<p className="text-sm text-gray-600">{m.correo}</p>
</div>


<div className="space-x-2">
<button className="bg-yellow-500 text-white px-3 py-1 rounded" onClick={onEdit}>Editar</button>
<button className="bg-red-500 text-white px-3 py-1 rounded" onClick={onDelete}>Eliminar</button>
</div>
</div>
);