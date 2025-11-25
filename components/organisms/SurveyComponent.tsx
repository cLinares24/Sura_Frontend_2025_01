"use client";

import React from "react";
import { useQAList } from "@/hooks/useQAList";

export default function QAList() {
  const { qaList, loading, error, deleteQA } = useQAList();

  if (loading) return <p>Cargando dudas y quejas...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Dudas y Quejas</h1>

      {qaList.length === 0 && <p>No hay entradas registradas</p>}

      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Nombre</th>
            <th className="border px-4 py-2">Correo</th>
            <th className="border px-4 py-2">Observaciones</th>
            <th className="border px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {qaList.map((qa) => (
            <tr key={qa.id_observacion}>
              <td className="border px-4 py-2">{qa.nombre}</td>
              <td className="border px-4 py-2">{qa.correo}</td>
              <td className="border px-4 py-2">{qa.observaciones}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => deleteQA(qa.id_observacion)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
