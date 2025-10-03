"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Services = () => {
  const items = [
    {
      img: "https://www.epssura.com/files/home-2021/img/procesos-con-eps-sura_citas-medicas-2025.webp",
      title: "Citas médicas",
      link: "IR",
    },
    {
      img: "https://www.epssura.com/files/home-2021/img/procesos-con-eps-sura_medicamentos-2025.webp",
      title: "Farmadomicilios: solicita tus medicamentos a domicilio",
      link: "IR",
    },
    {
      img: "https://www.epssura.com/files/home-2021/img/procesos-con-eps-sura_cambios-ips-2025.webp",
      title: "Cambios de IPS",
      link: "IR",
    },
  ];

  return (
    <div className="flex flex-mx full-width">
      <div className="p-20 flex flex-col justify-center max-h-[800px] md:w-[40%] w-full relative z-8 ">
        <div className="border-t-2 border-[#00aec7] ml-[35%] max-w-[60px]"></div>
        <h2 className="text-[#0133a1] text-4xl font-bold  mb-4 text-left max-w-[280px] ml-[35%] mt-2">
          Servicios a un clic
        </h2>
        <p className="font-semibold text-gray-700 text-md mb-3 ml-[35%] text-left max-w-[270px] mt-3">
          Realiza fácilmente tus procesos con EPS SURA. ¡Conoce aquí las
          soluciones virtuales que tenemos especialmente para ti!
        </p>
        <button className="bg-[#0033A0] text-white font-bold  py-1 text-center rounded-full cursor-pointer max-w-[270px] ml-[35%] hover:underline">
          VER TODOS LOS SERVICIOS
        </button>
      </div>

      {/* Tarjetas */}
      <div className="flex flex-wrap gap-3 p-9 md:-ml-23 relative z-20 md:w-[70%] mt-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white text-center flex flex-col border border-gray-200 w-[230px] h-[340px] rounded-sm shadow-lg"
          >
            {/* Contenedor central */}
            <div className="flex-1 flex flex-col items-center justify-center">
              <h3 className="text-md text-gray-600 font-semibold px-2 max-w-[170px] leading-tight m-0 mb-3 -mt-3">
                {item.title}
              </h3>
              <Image
                src={item.img}
                alt={item.title}
                width={140}
                height={160}
                className="w-[140px] h-[160px] object-contain"
              />
            </div>

            {/* Link abajo */}
            <div className="p-4">
              <a
                href="#"
                className="text-[#003DA5] font-bold flex items-center justify-end gap-1 hover:text-[#1f57cf]"
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

export default Services;
