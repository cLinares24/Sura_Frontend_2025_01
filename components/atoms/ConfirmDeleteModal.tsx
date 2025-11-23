"use client";
import { motion } from "framer-motion";

export const ConfirmDeleteModal = ({
  open,
  onClose,
  onConfirm,
  name,
}: {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  name?: string;
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white p-6 rounded-2xl shadow-2xl w-[90%] max-w-sm"
      >
        <h2 className="text-xl font-bold text-red-600 text-center">
          Confirmar eliminación
        </h2>

        <p className="text-gray-700 mt-3 text-center">
          ¿Seguro que deseas eliminar{" "}
          <span className="font-semibold">{name}</span>?
        </p>

        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-gray-300 hover:bg-gray-400 transition"
          >
            Cancelar
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-800 text-white shadow"
          >
            Eliminar
          </button>
        </div>
      </motion.div>
    </div>
  );
};
