"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ButtonComponent from "../atoms/ButtonComponent";

import { useAuth } from "@/context/AuthContext";
import { ConfirmDeleteModal } from "../atoms/ConfirmDeleteModal";
import { useLogout } from "@/hooks/useLogout";
import { useRole } from "@/hooks/useRole";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  linkClass: (path: string) => string;
};

// ===================================================
// 📌 FUNCIÓN PRINCIPAL
// ===================================================
export default function MobileMenu({ isOpen, onClose, linkClass }: MobileMenuProps) {
  const { logout } = useLogout();
  const { user } = useAuth();


  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  const { rol } = useRole();
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

          {/* ==========================
              LINKS PRINCIPALES
          =========================== */}
          <div className="flex flex-col gap-5 mt-10 text-lg">
            <Link href="/" onClick={onClose} className={linkClass("/")}>
              Inicio
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

            <Link
              href="/contact"
              onClick={onClose}
              className={linkClass("/contact")}
            >
              Contacto
            </Link>

            <hr className="my-2 w-30" />

            {/* SIN LOGIN */}
            {!rol && (
              <>
                <Link href="/login" onClick={onClose} className="text-left text-gray-500 font-bold">
                  Iniciar sesión
                </Link>

                <Link
                  href="/register"
                  onClick={onClose}
                  className="text-left text-gray-500 font-bold"
                >
                  Registrarse
                </Link>
              </>
            )}

            {/* ADMIN + MEDICO */}
            {(rol === "admin" || rol === "medico") && (
              <Link
                href="/users"
                onClick={onClose}
                className={linkClass("/account")}
              >
                Administración
              </Link>
            )}

            {/* PACIENTE */}
            {rol === "paciente" && (
              <Link
                href="/account"
                onClick={onClose}
                className="text-purple-600 font-semibold"
              >
                Mi cuenta
              </Link>
            )}

            {/* LOGOUT */}
            {rol && (
              <ButtonComponent
                onClick={() => {
                  setIsLogoutOpen(true);
                }}
                className="text-left text-gray-500 font-bold"
              >
                Cerrar sesión
              </ButtonComponent>
            )}
          </div>

          {/* MODAL LOGOUT */}
          <ConfirmDeleteModal
            open={isLogoutOpen}
            onClose={() => setIsLogoutOpen(false)}
            onConfirm={logout}
            title="Cerrar Sesión"
            boton="Cerrar Sesión"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
