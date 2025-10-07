import React from 'react';
import Image from "next/image";
import Link from "next/link";


const Footer = () => {
  return (
<footer className="w-full bg-white mt-16 px-6 py-10">
  {/* Logo principal arriba */}
  <div className="flex justify-center mb-10">
    <div className="max-w-[190px] max-h-[190px] cursor-pointer">
      <Image
        src="https://www.epssura.com/files/home-2021/header-footer/logo_eps.png"
        alt="epssuralogo"
        width={200}
        height={60}
      />
    </div>
  </div>

  {/* Contenedor inferior: columna delgada izquierda + contenido */}
  <div className="max-w-7xl mx-auto grid grid-cols-[60px_1fr] gap-3 relative">
    {/* Columna izquierda: logo lateral */}
    <div className="flex items-end justify-center md:justify-start">
      <Image
        src="https://epssura.com/files/home-2021/header-footer/logo_supersalud_2025.png"
        alt="Vigilado Supersalud"
        width={30}
        height={30}
        className="mb-2"
      />
  
    </div>

    {/* Columna derecha: contenido principal */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-gray-700 text-sm">
      {/* SOBRE NOSOTROS */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3 uppercase">
          SOBRE NOSOTROS
        </h3>
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

      {/* SERVICIOS AL USUARIO */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3 uppercase">
          SERVICIOS AL USUARIO
        </h3>
        <ul className="space-y-1">
          <li>Tiempo para ti</li>
          <li>Maternidad y primera infancia</li>
          <li>Para siempre</li>
          <li>Deberes y derechos del afiliado</li>
          <li>Afiliación para desempleados</li>
          <li>Atención virtual en Salud</li>
          <li>Cuotas moderadoras y tarifas</li>
          <li>Negación de Servicios de Salud</li>
        </ul>

        <div className="mt-4">
          <p className="font-medium">Notificaciones judiciales:</p>
          <p className="text-blue-600">
            notificacionesjudiciales@suraamericana.com.co
          </p>
        </div>
        <div className="mt-3">
          <p className="font-medium">
            Requerimientos externos institucionales:
          </p>
          <p className="text-blue-600">rqext@suraamericana.com.co</p>
        </div>
      </div>

      {/* LÍNEAS DE ATENCIÓN */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3 uppercase">
          LÍNEAS DE ATENCIÓN
        </h3>
        <ul className="space-y-1">
          <li>Medellín: +57 604 448 6115</li>
          <li>Bogotá: +57 601 489 7941</li>
          <li>Resto del país: +57 01 8000 519 519</li>
        </ul>
        <Link
          href="#"
          className="text-blue-600 hover:underline mt-2 block font-medium"
        >
          Escríbenos tus PQRS
        </Link>
      </div>

      {/* CONSULTA */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3 uppercase">CONSULTA</h3>
        <ul className="space-y-1">
          <li>
            <Link href="#" className="text-blue-600 hover:underline">
              - Políticas de uso y seguridad
            </Link>
          </li>
          <li>
            <Link href="#" className="text-blue-600 hover:underline">
              - Política de Seguridad y Ciberseguridad
            </Link>
          </li>
          <li>
            <Link href="#" className="text-blue-600 hover:underline">
              - Políticas de privacidad y datos y Ley de datos personales
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>


  );
};

export default Footer;
