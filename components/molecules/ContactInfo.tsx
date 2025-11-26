"use client";

import { motion } from "framer-motion";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-2xl shadow-xl p-8"
    >
      <h3 className="text-2xl font-semibold text-[#1a8c68] mb-6">
        Información General
      </h3>

      <div className="space-y-6 text-gray-700 text-sm sm:text-base">
        {/* Teléfonos */}
        <div>
          <h4 className="font-semibold text-lg text-[#097747]">Teléfonos</h4>
          <p className="mt-1">
            Línea principal:{" "}
            <span className="font-medium">(601) 555 8899</span>
          </p>
          <p>
            Urgencias 24/7:{" "}
            <span className="font-medium">320 555 1122</span>
          </p>
        </div>

        {/* Correo */}
        <div>
          <h4 className="font-semibold text-lg text-[#097747]">
            Correo electrónico
          </h4>
          <p className="mt-1">contacto@medicicol.com</p>
          <p>citas@medicicol.com</p>
        </div>

        {/* Dirección */}
        <div>
          <h4 className="font-semibold text-lg text-[#097747]">Dirección</h4>
          <p className="mt-1">
            Universidad Autónoma de Manizales - Manizales, Colombia
          </p>
        </div>

        {/* Horario */}
        <div>
          <h4 className="font-semibold text-lg text-[#097747]">
            Horario de Atención
          </h4>
          <p className="mt-1">Lunes a Viernes: 7:00 AM - 7:00 PM</p>
          <p>Sábados: 8:00 AM - 3:00 PM</p>
          <p>Domingos y Festivos: Urgencias 24/7</p>
        </div>
      </div>

      {/* Redes sociales */}
      <div className="mt-10">
        <h4 className="font-semibold text-lg text-[#097747] mb-3">
          Síguenos
        </h4>

        <div className="flex items-center gap-4">
          {/* Facebook */}
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer">
            FB
          </div>

          {/* Instagram */}
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer">
            IG
          </div>

          {/* YouTube */}
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer">
            YT
          </div>
        </div>
      </div>
    </motion.div>
  );
}
