"use client";
import { motion } from "framer-motion";
import ModalPortal from "./ModalPortal";
import ButtonComponent from "./ButtonComponent";

export const ConfirmDeleteModal = ({
  open,
  onClose,
  onConfirm,
  title = "Confirmar acción",
  message = "¿Seguro que deseas continuar?",
  name,
  boton = "Eliminar"
}: {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  name?: string;
  boton?: string
}) => {
  if (!open) return null;

  return (
    <ModalPortal>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999]">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-6 rounded-2xl shadow-2xl w-[90%] max-w-sm"
        >
          <h2 className="text-xl font-bold text-red-600 text-center">
            {title}
          </h2>

          <p className="text-gray-700 mt-3 text-center">
            {message}
            {name && (
              <>
                {" "}
                <span className="font-semibold">{name}</span>?
              </>
            )}
          </p>

          <div className="flex justify-center mt-6 space-x-4">
            <ButtonComponent
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-gray-300 hover:bg-gray-400 transition"
            >
              Cancelar
            </ButtonComponent>

            <ButtonComponent
              onClick={onConfirm}
              className="px-4 py-2 rounded-xl bg-gray-600 hover:bg-gray-800 text-white shadow"
            >
              {boton}
            </ButtonComponent>
          </div>
        </motion.div>
      </div>
    </ModalPortal>
  );
};
