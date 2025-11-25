"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Departments() {
  const items = [
    {
      title: "Medicina General",
      img:"https://static.wixstatic.com/media/3b1f25_f5ab27214c6e4cda8b8814a072cf1227.jpg/v1/fill/w_412,h_239,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/3b1f25_f5ab27214c6e4cda8b8814a072cf1227.jpg",
      desc: "Atención primaria integral para el diagnóstico, manejo y prevención de enfermedades comunes.",
    },
    {
      title: "Cardiología",
     img:"https://static.wixstatic.com/media/3b1f25_f5ab27214c6e4cda8b8814a072cf1227.jpg/v1/fill/w_412,h_239,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/3b1f25_f5ab27214c6e4cda8b8814a072cf1227.jpg",
      desc: "Evaluación y tratamiento especializado para el cuidado del corazón y sistema cardiovascular.",
    },
    {
      title: "Neurología",
      img:"https://static.wixstatic.com/media/3b1f25_f5ab27214c6e4cda8b8814a072cf1227.jpg/v1/fill/w_412,h_239,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/3b1f25_f5ab27214c6e4cda8b8814a072cf1227.jpg",
      desc: "Diagnóstico avanzado y manejo de trastornos del sistema nervioso central y periférico.",
    },
    {
      title: "Ortopedia",
      img:"https://static.wixstatic.com/media/3b1f25_f5ab27214c6e4cda8b8814a072cf1227.jpg/v1/fill/w_412,h_239,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/3b1f25_f5ab27214c6e4cda8b8814a072cf1227.jpg",
      desc: "Atención especializada en lesiones musculoesqueléticas, huesos y articulaciones.",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-center text-[#9155A7]"
      >
        Departamentos Médicos
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-2xl mx-auto mt-4 text-center text-gray-700 text-sm sm:text-base"
      >
        Conoce las áreas de especialidad de nuestra clínica, cada una diseñada para brindarte una atención profesional y humana.
      </motion.p>

      {/* Grid de departamentos */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {items.map((d, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden group"
          >
            <div className="relative w-full h-48">
              <Image
                src={d.img}
                alt={d.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-[#c38dd6]">
                {d.title}
              </h3>
              <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                {d.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}