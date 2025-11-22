"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ButtonComponent from "../atoms/ButtonComponent";

export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full z-50 bg-white shadow-md">
      {/* Barra Morada */}
      <div className="w-full bg-[#9155A7] ">
        <div className="max-w-[1200px] flex items-center gap-8 h-[34px] px-4"></div>
      </div>
      {/* Barra Blanca */}
     <div className="w-full max-w-7xl mx-auto flex items-center h-17 px-6 relative">
        {/* Logo */}
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
        {/* Menú */}
        <nav className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-8 text-sm font-medium">
          <Link href="/" className="text-purple-500">
            INICIO
          </Link>
          <Link
            href="/specialities"
            className="text-gray-700 hover:text-purple-500"
          >
            ACERCA DE
          </Link>
          <Link href="/doctors" className="text-gray-700 hover:text-purple-500">
            DEPARTAMENTOS
          </Link>
          <Link href="/seguro" className="text-gray-700 hover:text-purple-500">
            SEGURO
          </Link>
          <Link
            href="/contacto"
            className="text-gray-700 hover:text-purple-500"
          >
            CONTACTO
          </Link>
        </nav>

        {/* Botón de usuario */}
        <div className="absolute left-[99%] transform -translate-x-1/2 inline-block text-left">
          {/* Botón */}
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
            <span>Entrar</span>
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

                <Link
                  href="/account"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mi cuenta
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
