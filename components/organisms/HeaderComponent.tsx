"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import ButtonComponent from "../atoms/ButtonComponent";
import { useActiveLink } from "@/hooks/useActiveLink";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import MobileMenu from "../molecules/MobileMenu";
import { useAuth } from "@/context/AuthContext";
import { ConfirmDeleteModal } from "../atoms/ConfirmDeleteModal";
import { useLogout } from "@/hooks/useLogout";
import { useRole } from "@/hooks/useRole";

export default function HeaderComponent() {
  const { isMenuOpen, setIsMenuOpen, isMobileMenu, setIsMobileMenu } =
    useMobileMenu();

  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const { linkClass } = useActiveLink();
  const { logout } = useLogout();

  const { user } = useAuth();
  const { rol } = useRole();
return (
    <header className="sticky top-0 w-full z-50 bg-white shadow-md">
      {/* TOP PURPLE BAR */}
      <div className="w-full bg-[#9155A7]">
        <div className="max-w-[1200px] h-[34px] px-4"></div>
      </div>

      {/* MAIN HEADER */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between h-20 px-6 relative">
        {/* --- LOGO --- */}
        <Link href="/../">
          <div className="flex items-center space-x-2 cursor-pointer">
            {/* Icono tipo ECG */}
            <svg
              fill="#ad46ff"
              width="32px"
              height="32px"
              viewBox="0 0 32 32"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinejoin: "round",
                strokeMiterlimit: 2,
              }}
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ad46ff"
              strokeWidth="0.00032"
              transform="rotate(0)"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M15.988,1.988c-7.727,-0 -14,6.273 -14,14c-0,7.726 6.273,14 14,14c7.726,-0 14,-6.274 14,-14c-0,-7.727 -6.274,-14 -14,-14Zm-0,2c6.623,-0 12,5.377 12,12c-0,6.623 -5.377,12 -12,12c-6.623,-0 -12,-5.377 -12,-12c-0,-6.623 5.377,-12 12,-12Z"></path>
                <path d="M11.976,11.992l-2.976,-0c-1.657,-0 -3,1.343 -3,3l0,2.023c0,1.657 1.343,3 3,3c0,-0 2.976,-0 2.976,-0c-0,-0 -0,2.998 -0,2.998c-0,1.657 1.343,3 3,3l2.023,0c1.657,0 3,-1.343 3,-3c-0,0 -0,-2.998 -0,-2.998c-0,-0 3.001,-0 3.001,-0c1.657,-0 3,-1.343 3,-3l-0,-2.023c-0,-1.657 -1.343,-3 -3,-3c-0,-0 -3.001,-0 -3.001,-0c-0,-0 -0,-2.953 -0,-2.953c-0,-1.657 -1.343,-3 -3,-3l-2.023,-0c-1.657,-0 -3,1.343 -3,3l-0,2.953Zm1,2c0.552,-0 1,-0.448 1,-1l-0,-3.953c-0,-0.553 0.447,-1 1,-1c-0,-0 2.023,-0 2.023,-0c0.552,-0 1,0.447 1,1l-0,3.953c-0,0.552 0.447,1 1,1l4.001,-0c0.552,-0 1,0.447 1,1c0,-0 -0,2.023 -0,2.023c-0,0.552 -0.448,1 -1,1l-4.001,-0c-0.553,-0 -1,0.447 -1,1l-0,3.998c-0,0.553 -0.448,1 -1,1c-0,0 -2.023,0 -2.023,0c-0.553,0 -1,-0.447 -1,-1l-0,-3.998c-0,-0.553 -0.448,-1 -1,-1l-3.976,-0c-0.552,-0 -1,-0.448 -1,-1c-0,-0 0,-2.023 0,-2.023c0,-0.553 0.448,-1 1,-1l3.976,-0Z"></path>
              </g>
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

        {/* =======================
         DESKTOP NAVIGATION
        ========================= */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="/" className={linkClass("/")}>
            INICIO
          </Link>

          <Link href="/about" className={linkClass("/about")}>
            ACERCA DE
          </Link>

          <Link href="/departaments" className={linkClass("/departaments")}>
            {user ? <span>CITAS</span> : <span>DEPARTAMENTOS</span>}
          </Link>

          <Link href="/contact" className={linkClass("/contact")}>
            CONTACTO
          </Link>
        </nav>

        {/* =======================
         LOGIN BUTTON
        ========================= */}
        <div className="hidden md:block">
          <ButtonComponent
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center space-x-1 text-purple-500 hover:text-purple-600 cursor-pointer"
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24.00 24.00"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <circle
                  opacity="0.5"
                  cx="12"
                  cy="9"
                  r="3"
                  stroke="#ad46ff"
                  strokeWidth="1.5"
                ></circle>{" "}
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#ad46ff"
                  strokeWidth="1.5"
                ></circle>{" "}
                <path
                  opacity="0.5"
                  d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"
                  stroke="#ad46ff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>{" "}
              </g>
            </svg>
            {user ? <span>Hola, {user}</span> : <p>Entrar</p>}
          </ButtonComponent>

          {/* Menú desplegable */}
          {isMenuOpen && (
            <div
              className="absolute right-0 top-full mt-2 w-56 shadow-lg bg-white focus:outline-none z-50 rounded-lg"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <div className="py-1" role="none">
                <>
                  {rol === "admin" || rol === "medico" ? (
                    <>
                      {/* ADMIN + MEDICO */}
                      <Link
                        href="/users"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Administración
                      </Link>

                      <ButtonComponent
                        onClick={() => setIsLogoutOpen(true)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-red-500"
                      >
                        Cerrar sesión
                      </ButtonComponent>

                      <ConfirmDeleteModal
                        open={isLogoutOpen}
                        onClose={() => setIsLogoutOpen(false)}
                        onConfirm={logout}
                        title="Cerrar Sesión"
                        boton="Cerrar Sesión"
                      />
                    </>
                  ) : rol === "paciente" ? (
                    <>
                      {/* PACIENTE */}
                      <Link
                        href="/account"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Mi cuenta
                      </Link>

                      <ButtonComponent
                        onClick={() => setIsLogoutOpen(true)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-red-500"
                      >
                        Cerrar sesión
                      </ButtonComponent>

                      <ConfirmDeleteModal
                        open={isLogoutOpen}
                        onClose={() => setIsLogoutOpen(false)}
                        onConfirm={logout}
                        title="Cerrar Sesión"
                        boton="Cerrar Sesión"
                      />
                    </>
                  ) : (
                    <>
                      {/* SIN LOGIN */}
                      <Link
                        href="/login"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Inicia sesión
                      </Link>

                      <Link
                        href="/register"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Regístrate
                      </Link>
                    </>
                  )}
                </>
              </div>
            </div>
          )}
        </div>

        {/* =======================
         MOBILE MENU BUTTON
        ========================= */}
        <ButtonComponent
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsMobileMenu(true)}
        >
          <span className="w-6 h-[3px] bg-purple-500 rounded"></span>
          <span className="w-6 h-[3px] bg-purple-500 rounded"></span>
          <span className="w-6 h-[3px] bg-purple-500 rounded"></span>
        </ButtonComponent>
      </div>

      {/* =======================
       MOBILE SIDEBAR MENU
      ========================= */}
      <MobileMenu
        isOpen={isMobileMenu}
        onClose={() => setIsMobileMenu(false)}
        linkClass={linkClass}
      />
    </header>
  );
}
