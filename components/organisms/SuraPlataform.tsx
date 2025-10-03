"use client";
import { ArrowRight } from "lucide-react";

import Image from "next/image";

const Plataform = () => {
  const items = [
    {
      img: "https://www.epssura.com/files/home-2021/img/aprender-cualquier-lugar.webp",
      title: "¡Puedes aprender desde cualquier lugar!",
      desc: "Esta plataforma es virtual y te permite aprender desde tu casa, tu lugar de trabajo o la casa de tus familiares. Tienes acceso a toda la información sin tener que desplazarte.",
      link: "IR",
    },
    {
      img: "https://www.epssura.com/files/home-2021/img/programas-2025.webp",
      title: "Programas",
      desc: "Tenemos cursos y contenidos pensados para cada momento de vida o salud. Vas a aprender a través de videos con expertos, juegos, audios, entre otros.",
      link: "IR",
    },
    {
      img: "https://www.epssura.com/files/home-2021/img/foros-en-vivo-2025.webp",
      title: "Foros en vivo",
      desc: "Los jueves cada 15 días tenemos foros virtuales en los que conversamos con expertos sobre diversos temas valiosos para tu salud y bienestar.",
      link: "IR",
    },
  ];

  return (
    
      <div className="flex flex-mx full-width">
        {/* Lado azul */}
        <div className="bg-[#0133a1] text-white p-20 flex flex-col justify-center max-h-[800px] md:w-[43%] w-full relative z-10 ">
        <div className="border-t-2 border-[#00aec7] ml-[47%] max-w-[60px]"></div>
          <h2 className="text-4xl font-bold  mb-4 text-left max-w-[230px] ml-[47%] mt-2">
            Conoce la plataforma educativa de EPS SURA
          </h2>
          <p className="font-bold text-sm mb-6 ml-[45%] text-center max-w-[300px] mt-3">
            Te entregamos contenidos y experiencias de aprendizaje para cuidar
            tu salud y la de tu familia
          </p>
        </div>

        {/* Tarjetas */}
        <div className="flex flex-mx gap-7 p-9 md:-ml-36 relative z-20 md:w-[57%] mt-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-md overflow-hidden text-left flex flex-col border-1 border-white max-w-[270px]"
            >
             <Image
  src={item.img}
  alt={item.title}
  width={800}
  height={160}
  className="w-full h-40 object-cover"
/>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg text-gray-700  font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 flex-1">{item.desc}</p>
                <a
                  href="#"
                  className="mt-3 text-[#003DA5] font-bold flex items-center gap-1 hover:text-[#1f57cf] self-end"
                >
                  {item.link} <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
 
  );
};

export default Plataform;
