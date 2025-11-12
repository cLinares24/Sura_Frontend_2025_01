import React from "react";

interface Medico {
  id_medico: number;
  nombre: string;
  cedula: string;
  correo: string;
  telefono?: string;
}

interface ListaMedicosProps {
  medicos: Medico[];
}

const ListaMedicos: React.FC<ListaMedicosProps> = ({ medicos }) => {
  return (
    <div className="mt-4">
      {medicos.length > 0 ? (
        <ul className="space-y-2">
          {medicos.map((med) => (
            <li
              key={med.id_medico}
              className="p-3 border border-gray-200 rounded-lg bg-white hover:shadow-sm transition"
            >
              <p className="text-gray-800 font-medium">{med.nombre}</p>
              <p className="text-gray-500 text-sm">Cédula: {med.cedula}</p>
              <p className="text-gray-500 text-sm">Correo: {med.correo}</p>
              {med.telefono && (
                <p className="text-gray-500 text-sm">Teléfono: {med.telefono}</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-sm text-center">
          No hay médicos registrados en esta especialidad.
        </p>
      )}
    </div>
  );
};

export default ListaMedicos;
