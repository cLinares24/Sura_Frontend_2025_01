"use client";

import React, { useState } from "react";
import Link from "next/link";
import ButtonComponent from "../atoms/ButtonComponent";
import { ConfirmDeleteModal } from "../atoms/ConfirmDeleteModal";
import { usePathname } from "next/navigation";
import { useAdminBar } from "@/hooks/useAdminBar";
import { useLogout } from "@/hooks/useLogout";
import { useActiveLink } from "@/hooks/useActiveLink";

export default function HeaderComponent() {
  const { isOpen, openSidebar, closeSidebar } = useAdminBar();
  const { logout } = useLogout();
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
    const pathname = usePathname();
  
    const { linkClass } = useActiveLink();


  return (
    <>
      {/* Botón para abrir */}
      <ButtonComponent
        onClick={openSidebar}
        className="fixed top-4 left-4 z-50 p-2 bg-gray-500 text-white rounded-lg shadow-lg hover:bg-gray-600"
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth="2"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </ButtonComponent>

      {/* Fondo oscuro */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-xl z-50 transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="w-full bg-[#9155A7] h-10 flex items-center justify-end px-3">
          <ButtonComponent onClick={closeSidebar} className="text-white">
            ✕
          </ButtonComponent>
        </div>

        <div className="flex flex-col p-6 space-y-6">
          <Link href="/../" onClick={closeSidebar}>
            <div className="flex items-center space-x-2 cursor-pointer">
              <svg
                fill="#ad46ff"
                width="32px"
                height="32px"
                viewBox="0 0 32 32"
                stroke="#ad46ff"
              >
                <path d="M15.988,1.988c-7.727,-0 -14,6.273 -14,14c-0,7.726 6.273,14 14,14c7.726,-0 14,-6.274 14,-14c-0,-7.727 -6.274,-14 -14,-14Zm-0,2c6.623,-0 12,5.377 12,12c-0,6.623 -5.377,12 -12,12c-6.623,-0 -12,-5.377 -12,-12c-0,-6.623 5.377,-12 12,-12Z"></path>
                <path d="M11.976,11.992l-2.976,-0c-1.657,-0 -3,1.343 -3,3l0,2.023c0,1.657 1.343,3 3,3c0,-0 2.976,-0 2.976,-0c-0,-0 -0,2.998 -0,2.998c-0,1.657 1.343,3 3,3l2.023,0c1.657,0 3,-1.343 3,-3c-0,0 -0,-2.998 -0,-2.998c-0,-0 3.001,-0 3.001,-0c1.657,-0 3,-1.343 3,-3l-0,-2.023c-0,-1.657 -1.343,-3 -3,-3c-0,-0 -3.001,-0 -3.001,-0c-0,-0 -0,-2.953 -0,-2.953c-0,-1.657 -1.343,-3 -3,-3l-2.023,-0c-1.657,-0 -3,1.343 -3,3l-0,2.953Zm1,2c0.552,-0 1,-0.448 1,-1l-0,-3.953c-0,-0.553 0.447,-1 1,-1c-0,-0 2.023,-0 2.023,-0c0.552,-0 1,0.447 1,1l-0,3.953c-0,0.552 0.447,1 1,1l4.001,-0c0.552,-0 1,0.447 1,1c0,-0 -0,2.023 -0,2.023c-0,0.552 -0.448,1 -1,1l-4.001,-0c-0.553,-0 -1,0.447 -1,1l-0,3.998c-0,0.553 -0.448,1 -1,1c-0,0 -2.023,0 -2.023,0c-0.553,0 -1,-0.447 -1,-1l-0,-3.998c-0,-0.553 -0.448,-1 -1,-1l-3.976,-0c-0.552,-0 -1,-0.448 -1,-1c-0,-0 0,-2.023 0,-2.023c0,-0.553 0.448,-1 1,-1l3.976,-0Z"></path>
              </svg>

              <div className="flex flex-col leading-tight">
                <div>
                  <span className="text-purple-500 font-semibold text-xl">
                    Medici
                  </span>
                  <span className="text-green-500 font-semibold text-xl">
                    Col
                  </span>
                </div>
                <span className="text-gray-400 text-sm">
                  Medicamentos y citas
                </span>
              </div>
            </div>
          </Link>

          <nav className="flex flex-col space-y-4 text-sm font-medium mt-2 text-gray-700">
            <Link href="/users" onClick={closeSidebar}  className={linkClass("/users")}>
              USUARIOS
            </Link>
            <Link href="/specialities" onClick={closeSidebar}  className={linkClass("/specialities")}>
              ESPECIALIDADES
            </Link>
            <Link href="/doctors" onClick={closeSidebar}  className={linkClass("/doctors")}>
              DOCTORES
            </Link>
            <span className="text-gray-300 -mt-3">________________</span>

            <ButtonComponent
              onClick={() => setIsLogoutOpen(true)}
              className="text-gray-700 hover:text-red-500 text-left"
            >
              CERRAR SESIÓN
            </ButtonComponent>

            <ConfirmDeleteModal
              open={isLogoutOpen}
              onClose={() => setIsLogoutOpen(false)}
              onConfirm={logout}
              title="Cerrar Sesión"
              boton="Cerrar Sesión"
            />
          </nav>
        </div>
      </aside>
    </>
  );
}
