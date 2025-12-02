"use client";

import { motion } from "framer-motion";
import { DepartmentCards } from "@/components/atoms/DepartamentsCards";

interface DepartmentItem {
  id: number;
  title: string;
  img: string;
  desc: string;
}

export default function Departments() {
  const items: DepartmentItem[] = [
    {
      id: 4,
      title: "Medicina General",
      img: "https://static.wixstatic.com/media/1c689e9819f648048aefa42b780c640d.jpg/v1/fill/w_752,h_502,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1c689e9819f648048aefa42b780c640d.jpg",
      desc: "Atención primaria integral para el diagnóstico, manejo y prevención de enfermedades comunes.",
    },
    {
      id: 1,
      title: "Cardiología",
      img: "https://www.modernheartandvascular.com/wp-content/uploads/2022/10/cardiologo-1024x608.png",
      desc: "Evaluación y tratamiento especializado para el cuidado del corazón y sistema cardiovascular.",
    },
    {
      id: 5,
      title: "Neurología",
      img: "https://giovanafemat.com/wp-content/uploads/2020/12/neurologia-historia.jpg",
      desc: "Diagnóstico avanzado y manejo de trastornos del sistema nervioso central y periférico.",
    },
    {
      id: 6,
      title: "Ortopedia",
      img: "https://urosario.edu.co/sites/default/files/hero/2022-10/Banner-Ortopedia.jpg",
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
        Conoce las áreas de especialidad de nuestra clínica, cada una diseñada
        para brindarte una atención profesional y humana.
      </motion.p>

      {/* GRID */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {items.map((item, index) => (
          // <DepartmentCards
          //   key={index}
          //   title={item.title}
          //   img={item.img}
          //   desc={item.desc}
          //   index={index}
          // />
          <DepartmentCards
          key={index}
          id={item.id}
          title={item.title}
          img={item.img}
          desc={item.desc}
          index={index}
        />

        ))}
      </div>
    </section>
  );
}
