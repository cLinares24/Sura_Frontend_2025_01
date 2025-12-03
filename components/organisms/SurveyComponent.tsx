"use client";
import { motion } from "framer-motion";
import ButtonComponent from "../atoms/ButtonComponent";
import { useQAList } from "@/hooks/useQAList";

export default function QAList() {
  const { qaList, loading, error, deleteQA } = useQAList();

  if (loading) return <p>Cargando dudas y quejas...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="p-4 mx-auto min-h-[90vh] w-full bg-gradient-to-br from-[#fbf5ff] to-[#f4e1ff] py-12 px-4 rounded-2xl shadow-xl"
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold mb-8 text-[#6b21a8] text-center mt-20"
      >
        Dudas y Quejas
      </motion.h1>

      {qaList.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center text-gray-600 mt-4"
        >
          No hay entradas registradas
        </motion.p>
      )}
      <div className="overflow-x-auto">
        <motion.table
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="table-auto border-collapse border border-gray-300 rounded-xl overflow-hidden shadow-md text-center mx-auto max-w-5xl w-full"
        >
          <thead className="bg-purple-300">
            <tr>
              <th className="border px-4 py-3 text-left">Nombre</th>
              <th className="border px-4 py-3 text-left">Correo</th>
              <th className="border px-4 py-3 text-left">Observaciones</th>
              <th className="border px-4 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {qaList.map((qa, i) => (
              <motion.tr
                key={qa.id_observacion}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="even:bg-white odd:bg-purple-50 hover:bg-purple-200 transition-colors"
              >
                <td className="border px-4 py-2 font-medium">{qa.nombre}</td>
                <td className="border px-4 py-2 font-medium">{qa.correo}</td>
                <td className="border px-4 py-2 text-gray-700">
                  {qa.observaciones}
                </td>
                <td className="border px-4 py-2 text-center">
                  <ButtonComponent
                    onClick={() => deleteQA(qa.id_observacion)}
                    className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 shadow-md hover:scale-105 transform transition-transform"
                  >
                    Eliminar
                  </ButtonComponent>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </motion.div>
  );
}
