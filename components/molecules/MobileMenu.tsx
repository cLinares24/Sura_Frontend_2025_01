"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import ButtonComponent from "@/components/atoms/ButtonComponent";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  linkClass: (path: string) => string; // lo estás usando, así que lo incluyo
};

export default function MobileMenu({ isOpen, onClose, linkClass }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-full bg-white shadow-xl z-50 p-6"
        >
          {/* Close button */}
          <ButtonComponent
            className="absolute top-4 right-4 text-purple-500 text-2xl"
            onClick={onClose}
          >
            ✕
          </ButtonComponent>

          {/* Links */}
          <div className="flex flex-col gap-5 mt-10 text-lg">
            <Link href="/" onClick={onClose} className={linkClass("/")}>
              Inicio
            </Link>

            <Link href="/specialities" onClick={onClose}>
              Admin
            </Link>

            <Link href="/about" onClick={onClose} className={linkClass("/about")}>
              Acerca de
            </Link>

            <Link
              href="/departaments"
              onClick={onClose}
              className={linkClass("/departaments")}
            >
              Departamentos
            </Link>

            <Link href="/contact" onClick={onClose} className={linkClass("/contact")}>
              Contacto
            </Link>

            <hr className="my-2 w-30" />

            <Link href="/login" onClick={onClose} className="text-purple-500">
              Iniciar sesión
            </Link>

            <Link href="/register" onClick={onClose} className="text-purple-500">
              Registrarse
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
