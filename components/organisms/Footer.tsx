import React from 'react';
import Image from "next/image";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="w-full bg-[#6dcca3] px-6 py-10">
      {/* Logo principal arriba */}
      <div className="mb-3">
        <div className="flex items-center space-x-2">
          {/* Icono tipo ECG */}
          <svg fill="#ffffffff" width="32px" height="32px" viewBox="0 0 32 32" style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: 2,
          }} version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ad46ff" strokeWidth="0.00032" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15.988,1.988c-7.727,-0 -14,6.273 -14,14c-0,7.726 6.273,14 14,14c7.726,-0 14,-6.274 14,-14c-0,-7.727 -6.274,-14 -14,-14Zm-0,2c6.623,-0 12,5.377 12,12c-0,6.623 -5.377,12 -12,12c-6.623,-0 -12,-5.377 -12,-12c-0,-6.623 5.377,-12 12,-12Z"></path><path d="M11.976,11.992l-2.976,-0c-1.657,-0 -3,1.343 -3,3l0,2.023c0,1.657 1.343,3 3,3c0,-0 2.976,-0 2.976,-0c-0,-0 -0,2.998 -0,2.998c-0,1.657 1.343,3 3,3l2.023,0c1.657,0 3,-1.343 3,-3c-0,0 -0,-2.998 -0,-2.998c-0,-0 3.001,-0 3.001,-0c1.657,-0 3,-1.343 3,-3l-0,-2.023c-0,-1.657 -1.343,-3 -3,-3c-0,-0 -3.001,-0 -3.001,-0c-0,-0 -0,-2.953 -0,-2.953c-0,-1.657 -1.343,-3 -3,-3l-2.023,-0c-1.657,-0 -3,1.343 -3,3l-0,2.953Zm1,2c0.552,-0 1,-0.448 1,-1l-0,-3.953c-0,-0.553 0.447,-1 1,-1c-0,-0 2.023,-0 2.023,-0c0.552,-0 1,0.447 1,1l-0,3.953c-0,0.552 0.447,1 1,1l4.001,-0c0.552,-0 1,0.447 1,1c0,-0 -0,2.023 -0,2.023c-0,0.552 -0.448,1 -1,1l-4.001,-0c-0.553,-0 -1,0.447 -1,1l-0,3.998c-0,0.553 -0.448,1 -1,1c-0,0 -2.023,0 -2.023,0c-0.553,0 -1,-0.447 -1,-1l-0,-3.998c-0,-0.553 -0.448,-1 -1,-1l-3.976,-0c-0.552,-0 -1,-0.448 -1,-1c-0,-0 0,-2.023 0,-2.023c0,-0.553 0.448,-1 1,-1l3.976,-0Z"></path></g></svg>

          <div className="flex flex-col leading-tight">
            <div>
              <span className="text-white font-semibold text-xl">Medici</span>
              <span className="text-white font-semibold text-xl">Col</span>
            </div>
          </div>
        </div>
      </div>


      {/* Contenedor inferior: columna delgada izquierda + contenido */}
      <div className="max-w-[60%] mx-auto grid">

            <ul className="space-y-1">
              <li>CE0008 de 2020</li>
              <li>Estados financieros</li>
              <li>Normatividad</li>
              <li>Corporativo</li>
              <li>Nuestras oficinas</li>
              <li>Trabaje con nosotros</li>
              <li>Consulta de oportunidad</li>
              <li>Indicadores de Salud</li>
              <li>Línea ética</li>
              <li>Participación ciudadana</li>
              <li>Rendición de cuentas</li>
              <li>Mapa del sitio</li>
            </ul>
      </div>
    </footer>


  );
};

export default Footer;
