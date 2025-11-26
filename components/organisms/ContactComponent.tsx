"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactInfo from "../molecules/ContactInfo";

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
        <ContactInfo />

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
