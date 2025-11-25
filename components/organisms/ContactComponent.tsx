"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactComponent() {
  return (
    <section className="w-full min-h-screen bg-gray-50 py-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-center text-[#097747]"
      >
        Contacto
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-2xl mx-auto mt-4 text-center text-gray-700 text-sm sm:text-base"
      >
        Comunícate con nosotros para agendar citas, resolver dudas o recibir
        orientación médica. Estamos aquí para ayudarte.
      </motion.p>

      {/* Grid principal */}
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Información de contacto */}
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
            <div>
              <h4 className="font-semibold text-lg text-[#097747]">
                Teléfonos
              </h4>
              <p className="mt-1">
                Línea principal:{" "}
                <span className="font-medium">(601) 555 8899</span>
              </p>
              <p>
                Urgencias 24/7:{" "}
                <span className="font-medium">320 555 1122</span>
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-[#097747]">
                Correo electrónico
              </h4>
              <p className="mt-1">contacto@medicicol.com</p>
              <p>citas@medicicol.com</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-[#097747]">
                Dirección
              </h4>
              <p className="mt-1">Universidad Autónoma de Manizales - Manizales, Colombia</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-[#097747]">
                Horario de Atención
              </h4>
              <p className="mt-1">Lunes a Viernes: 7:00 AM - 7:00 PM</p>
              <p>Sábados: 8:00 AM - 3:00 PM</p>
              <p>Domingos y Festivos: Urgencias 24/7</p>
            </div>
          </div>

          {/* Redes sociales (espacios para íconos) */}
          <div className="mt-10">
            <h4 className="font-semibold text-lg text-[#097747] mb-3">
              Síguenos
            </h4>

            <div className="flex items-center gap-4">
              {/* Facebook */}
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer">
                {/* SVG o icono va aquí */}
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

        {/* Formulario de contacto */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-[350px] sm:h-[450px] rounded-2xl overflow-hidden shadow-xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.223620833309!2d-75.5031743!3d5.067469399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e476f8c1179651b%3A0x18322787cebd6883!2sUniversidad%20Aut%C3%B3noma%20de%20Manizales!5e0!3m2!1ses-419!2sco!4v1764039105667!5m2!1ses-419!2sco"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
