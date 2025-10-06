"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const affiliationsItems = [
  {
    title: "Plan de Beneficios en Salud",
    img: "https://www.epssura.com/files/home-2021/img/plan-de-beneficios-en-salud-2025.webp",
    link: "#",
  },
  {
    title: "Régimen subsidiado",
    img: "https://www.epssura.com/files/home-2021/img/regimen-subsidiado-2025.webp",
    link: "#",
  },
];

class Affiliations extends React.Component {
  render() {
    return (
      <section className="bg-[#ecf0f1] py-10 w-full h-[650px]">
        <div className="mx-auto text-center mb-15">
          <h2 className="text-[#0133a1] text-3xl md:text-4xl font-bold py-2">
            Todo sobre afiliaciones
          </h2>
          <div className="border-t-2 border-[#ccd6ec] max-w-[60px] mx-auto"></div>
        </div>

        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start gap-10 px-4 mt-5 mb-">


          {/* ----------- COLUMNA IZQUIERDA ----------- */}
          <div className="md:w-[45%] w-full flex flex-col gap-6">


            <div className="flex flex-col gap-4">
              {affiliationsItems.map((item, i) => (
                <div
                  key={i}
                  className="flex bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  {/* Imagen izquierda */}
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={128}   // equivale a w-32 (32*4px = 128px)
                    height={96}   // equivale a h-24 (24*4px = 96px)
                    className="w-32 h-24 object-cover"
                  />

                  {/* Texto + enlace */}
                  <div className="flex flex-1 justify-between items-center px-4">
                    <h3 className="font-semibold text-gray-700 text-md">
                      {item.title}
                    </h3>
                    <a
                      href={item.link}
                      className="text-[#003DA5] font-bold flex items-center gap-1 hover:text-[#1f57cf]"
                    >
                      IR <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="flex items-center gap-2 text-[#003DA5] font-bold underline hover:no-underline"
            >
              {/* Icono */}
              <svg fill="#003DA5" width="24px" height="24px" viewBox="0 0 32.00 32.00" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#003DA5" strokeWidth="0.8640000000000001"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>pointer</title> <path d="M9.313 5.594v1.313h-2.656v-1.313h2.656zM9.313 10.906v-4h1.313v4h5.313v1.313h-1.313v2.656h-1.344v-2.656h-2.656v2.656h-1.313v-3.969zM4 13.563v1.313h-2.656v-1.313h2.656zM17.281 14.875h-1.344v-2.656h2.656v1.344h-1.313v1.313zM18.594 14.875v-1.313h1.344v6.625h-1.344v-5.313zM0 14.875h1.344v2.656h-1.344v-2.656zM5.313 17.531v-1.313h-1.313v-1.344h1.313v-7.969h1.344v10.625h-1.344zM1.344 18.875v-1.344h1.313v1.344h-1.313zM9.313 20.188v-2.656h1.313v5.313h-1.313v-2.656zM11.969 20.188v-2.656h1.313v5.313h-1.313v-2.656zM2.656 18.875h1.344v2.656h-1.344v-2.656zM15.938 18.875v3.969h-1.313v-5.313h1.313v1.344zM17.281 22.844v-2.656h1.313v2.656h-1.313zM4 22.844v-1.313h1.313v1.313h-1.313zM5.313 24.188v-1.344h1.344v1.344h-1.344zM15.938 25.531v-2.688h1.344v4h-2.656v-1.313h1.313zM13.281 25.531v-1.344h1.344v1.344h-1.344zM9.313 25.531h3.969v1.313h-6.625v-2.656h1.313v1.344h1.344z"></path> </g></svg>

              {/* Texto */}
              <span className="text-sm">Solicitar turno virtual de afiliación</span>
            </a>

          </div>

          {/* ----------- COLUMNA DERECHA ----------- */}
          {/* ----------- COLUMNA DERECHA ----------- */}
          <div className="md:w-[55%] w-full relative flex justify-center items-center z-0">
            <div className="relative w-full max-w-[520px] flex justify-center items-center">

              {/* Cuadro azul de fondo */}
              <div className="absolute -top-6 -left-6 w-[450px] h-[450px] bg-[#00a3e0] z-0"></div>

              {/* Imagen encima del cuadro azul */}
              <div className="relative mt-6">
                {/* Imagen oscurecida */}
                <Image
                  src="https://www.epssura.com/files/home-2021/img/todo-lo-que-debes-saber_principal-2025.webp"
                  alt="Afiliación EPS"
                  width={1920} // ancho base grande (puedes ajustarlo)
                  height={340} // alto exacto al h-[340px]
                  className="w-full h-[340px] object-cover brightness-50 shadow-lg"
                />

                {/* Overlay + Texto (abajo) */}
                <div className="absolute inset-0 flex flex-col justify-end px-8 pb-6 z-20">
                  <p className="text-white text-lg font-semibold mb-2">
                    Si te trasladaron a EPS SURA
                  </p>
                  <a
                    href="#"
                    className="text-white font-bold px-4 py-2 flex items-center gap-1 hover:bg-[#1f57cf] w-max"
                  >
                    INGRESA AQUÍ <ArrowRight size={18} />
                  </a>
                </div>
              </div>

            </div>
          </div>


        </div>
      </section>
    );
  }
}

export default Affiliations;
