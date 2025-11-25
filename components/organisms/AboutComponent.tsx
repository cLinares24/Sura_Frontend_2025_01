"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutComponent() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      {/* Header verde (sin animación) */}
      <div className="bg-[#097747] py-10 md:py-10 px-4 md:px-10 w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Acerca de
        </h1>
      </div>

      {/* Contenido general */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full mx-auto px-4 sm:px-6 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14"
      >
        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <div className="relative w-full aspect-video md:aspect-[4/3] lg:aspect-[16/10]">
            <Image
              src="https://static.wixstatic.com/media/3b1f25_f5ab27214c6e4cda8b8814a072cf1227.jpg/v1/fill/w_412,h_239,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/3b1f25_f5ab27214c6e4cda8b8814a072cf1227.jpg"
              alt="Acerca de nosotros"
              fill
              className="rounded-lg shadow-md object-cover"
              sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 50vw,
                     600px"
            />
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1a8c68]">
            Acerca de Clínica Médica
          </h2>

          <p className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
            En Medicicol trabajamos para brindar una atención en salud humana,
            cercana y confiable, enfocada en el bienestar integral de nuestros
            pacientes. Somos una clínica colombiana que combina experiencia
            médica, tecnología actualizada y un equipo humano comprometido con
            ofrecer servicios oportunos y de calidad para toda la comunidad.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
            Nuestro propósito es acompañar a cada paciente durante todo su
            proceso de atención, con un enfoque humano, ético y seguro. En
            Medicicol encontrarás profesionales capacitados, diagnósticos
            precisos y servicios diseñados para responder a las necesidades
            reales de las familias colombianas. Estamos aquí para cuidarte,
            orientarte y mejorar tu calidad de vida.
          </p>
        </motion.div>
      </motion.div>

      {/* Sección extensiva */}
      <section className="w-full bg-gray-50 py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Sección de valores */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 w-full">
            {[
              {
                title: "Calidad Internacional",
                desc: "Aplicamos estándares globales de atención, asegurando procesos clínicos confiables, diagnósticos precisos y seguimiento continuo basado en buenas prácticas médicas.",
              },
              {
                title: "Atención Humana",
                desc: "Más allá de la medicina, brindamos acompañamiento cercano y empático, pensando siempre en la tranquilidad y bienestar de cada paciente y su familia.",
              },
              {
                title: "Innovación Médica",
                desc: "Integramos tecnología moderna, equipos de alta precisión y sistemas digitales que facilitan una atención más ágil, segura y eficiente.",
              },
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow w-full"
              >
                <h3 className="text-xl font-semibold text-[#097747] text-center">
                  {v.title}
                </h3>
                <p className="mt-3 text-gray-700 text-sm leading-relaxed text-center">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Sección de compromiso */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mt-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#097747] text-center">
              Nuestro Compromiso Contigo
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed text-sm sm:text-base text-center">
              En Medicicol trabajamos todos los días para que cada persona que
              cruza nuestras puertas reciba una experiencia de atención
              completa, transparente y confiable. Nos guiamos por el respeto,
              la ética profesional y el compromiso permanente de mejorar la
              salud y calidad de vida de nuestros pacientes.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}