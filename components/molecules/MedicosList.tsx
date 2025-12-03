// /components/MedicosList.tsx
"use client";

export const MedicosList = ({ medicos }: any) => {
  return (
    <div className="space-y-4">
      {medicos.map((m: any) => (
        <div key={m.id_medico} className="border p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold">{m.nombre}</h2>
          <p><strong>Cédula:</strong> {m.cedula}</p>
          <p><strong>Correo:</strong> {m.correo}</p>
          <p><strong>Teléfono:</strong> {m.telefono}</p>
          <p><strong>Especialidad:</strong> {m.especialidad}</p>
        </div>
      ))}
    </div>
  );
};
