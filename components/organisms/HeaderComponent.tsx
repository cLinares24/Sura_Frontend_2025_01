"use client";

import SuraLogin from "@/app/(webpage)/login/page";
import React, { useState } from "react";
import Link from "next/link"

export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState("header");
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "INICIO", href: "/" },
    { label: "AFILIADOS", href: "/afiliados" },
    { label: "EMPLEADORES", href: "/empleadores" },
    { label: "INDEPENDIENTES", href: "/independientes" },
    { label: "ASESORES COMERCIALES", href: "/asesores" },
    { label: "PRESTADORES DE SERVICIO", href: "/prestadores" },
    { label: "PAC", href: "/pac" },
  ];

  //const [activeCategory, setActiveCategory] = useState<keyof typeof categories>("Tecnología");
  const slugify = (str: string) =>
    str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/\s+/g, "-");

  if (currentView === "login") {
    return <SuraLogin />;
  }
  return (
    <header className="sticky top-0 w-full z-50 bg-white shadow-md">
      {/* Barra superior blanca */}
      <div className="w-full bg-[#53575b] ">
        <div className="max-w-[1200px] flex items-center gap-8 h-[34px] px-4"></div>
      </div>

      <div className="w-full bg-white flex justify-center">
        <div className=" flex items-center h-18 px-4">
          {/* Logo */}
          <div className="ml-15 max-w-[190px] max-h-[190px] cursor-pointer">
            <img
              src="https://www.epssura.com/files/home-2021/header-footer/logo_eps.png"
              alt="epssuralogo"
            />
          </div>
          <div className="flex gap-8 mr-7">
            <a href="" className="ml-8 link-custom">
              Ley de transparencia
            </a>
            <a href="" className="link-custom">
              Preguntas frecuentes
            </a>
            <a href="" className="link-custom">
              Escríbenos tus PQRS
            </a>
            <a href="" className="link-custom">
              Canales de contacto
            </a>
            <a href="" className="link-custom">
              Solicitar clave
            </a>
          </div>

          <div className="flex items-center">
            {/* <!-- Botón --> */}
            <Link href="/login" passHref>
              <button className="bg-[#0033A0] text-white font-bold px-6 py-2 rounded-full flex items-center gap-2 mr-4 cursor-pointer">
                INICIAR SESIÓN
                <svg
                  width="14px"
                  height="14px"
                  viewBox="0 -0.5 17 17"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  //xmlns:xlink="http://www.w3.org/1999/xlink"
                  className="si-glyph si-glyph-triangle-down"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>1237</title> <defs> </defs>{" "}
                    <g
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      {" "}
                      <path
                        d="M10.106,12.69 C9.525,13.27 8.584,13.27 8.002,12.69 L1.561,6.246 C0.979,5.665 0.722,4.143 2.561,4.143 L15.549,4.143 C17.45,4.143 17.131,5.664 16.549,6.246 L10.106,12.69 L10.106,12.69 Z"
                        fill="#FFFFFF"
                        className="si-glyph-fill"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </button>
            </Link>
            {/* <!-- Icono lupa --> */}
            <div className="w-10 h-10 flex items-center justify-center border border-[#EDEDED] rounded-full cursor-pointer">
              {/* <!-- Usando Heroicons (SVG lupa) --> */}
              <svg
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#0033A0"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M19.9604 11.4802C19.9604 13.8094 19.0227 15.9176 17.5019 17.4512C16.9332 18.0247 16.2834 18.5173 15.5716 18.9102C14.3594 19.5793 12.9658 19.9604 11.4802 19.9604C6.79672 19.9604 3 16.1637 3 11.4802C3 6.79672 6.79672 3 11.4802 3C16.1637 3 19.9604 6.79672 19.9604 11.4802Z"
                    stroke="#0033A0"
                    strokeWidth="2"
                  ></path>{" "}
                  <path
                    d="M18.1553 18.1553L21.8871 21.8871"
                    stroke="#0033A0"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* HeaderAzul */}
      <div className="w-full bg-[#08a4e4]">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 h-[40px] text-white font-bold">
          {/* Logo o título */}
          <div className="tracking-wide text-md">
            EPS
          </div>

          {/* Menú de navegación */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 h-full">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative flex items-center justify-center text-xs sm:text-sm text-white h-full"
              >
                {item.label}

                {/* Línea animada */}
                <div
                  className="
             absolute
            bottom-0
            left-0
            h-[0.5px]
            w-full
            bg-white
            origin-center
            scale-x-0
            scale-y-100      /* ✅ mantiene el alto en 1px */
            transition-transform
            duration-300
            group-hover:scale-x-100
            "
                />
              </Link>
            ))}
          </nav>
        </div>
      </div>


    </header>
  );
}
