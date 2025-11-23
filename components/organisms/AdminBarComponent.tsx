"use client";

import React, { useState } from "react";
import Link from "next/link";
import ButtonComponent from "../atoms/ButtonComponent";

export default function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* ──────────────── BOTÓN PARA ABRIR EL SIDEBAR ──────────────── */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 p-2 bg-purple-500 text-white rounded-lg shadow-lg hover:bg-purple-600"
      >
        {/* Icono hamburger */}
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* ──────────────── FONDO OSCURO (solo cuando está abierto) ──────────────── */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* ──────────────── SIDEBAR ──────────────── */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-xl z-50 transform 
        transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Barra morada */}
        <div className="w-full bg-[#9155A7] h-10 flex items-center justify-end px-3">
          {/* Botón para cerrar */}
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-gray-200"
          >
            ✕
          </button>
        </div>

        {/* Contenido */}
        <div className="flex flex-col p-6 space-y-6">

          {/* Logo */}
          <Link href="/../" onClick={() => setIsOpen(false)}>
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

          {/* Enlaces */}
          <nav className="flex flex-col space-y-4 text-sm font-medium mt-2">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-purple-500">
              INICIO
            </Link>
            <Link href="/specialities" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-purple-500">
              ACERCA DE
            </Link>
            <Link href="/doctors" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-purple-500">
              DEPARTAMENTOS
            </Link>
            <Link href="/seguro" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-purple-500">
              SEGURO
            </Link>
            <Link href="/contacto" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-purple-500">
              CONTACTO
            </Link>
          </nav>

          {/* Menú usuario */}
          <div className="relative">
            <ButtonComponent
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center space-x-1 text-purple-500 hover:text-purple-600 cursor-pointer"
            >
              <span>Entrar</span>
            </ButtonComponent>

            {isMenuOpen && (
              <div className="absolute top-full mt-2 left-0 w-56 shadow-lg bg-white z-[999] rounded-lg">
                <div className="py-1">
                  <Link href="/login" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Inicia sesión
                  </Link>
                  <Link href="/register" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Regístrate
                  </Link>
                  <Link href="/account" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Mi cuenta
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
