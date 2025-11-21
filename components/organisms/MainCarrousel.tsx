"use client";
import { useEffect, useRef, useState } from "react";
import CardCarrousel from "../molecules/CardsCarrouselComponent";
import ButtonComponent from "../atoms/ButtonComponent";
const items = [
  {
    img: "https://www.elhospital.com/uploads/news-pictures/pphoto-1033.jpg",
    alt: "Cardiologia",
  },
  {
    img: "https://ismet.es/wp-content/uploads/2023/07/Sin-titulo-1-770x400.jpg",
    alt: "Neurologia",
  },
  {
    img: "https://www.clinicadelnorte.org/wp-content/uploads/2022/01/asian-woman-patient-with-bandage-compression-knee-brace-support-injury-on-the-bed-in-nursing-hospital-healthcare-and-medical-support-768x513.jpg",
    alt: "Ortopedia",
  },
  {
    img: "https://magnetosur.com/wp-content/uploads/2021/11/Que-diferencias-existen-entre-la-medicina-general-y-la-medicina-interna.jpg",
    alt: "Medicina General",
  },
];
const cards = [
  {
    title: "Cardiología",
    text: "Párrafo. Haz clic aquí para agregar tu texto y editar. Permite que tus usuarios te conozcan.",
  },
  {
    title: "Neurología",
    text: "Párrafo. Haz clic aquí para agregar tu texto y editar. Permite que tus usuarios te conozcan.",
  },
  {
    title: "Ortopedia",
    text: "Párrafo. Haz clic aquí para agregar tu texto y editar. Permite que tus usuarios te conozcan.",
  },
];


const MainCarrousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(nextSlide, 10000);
    return resetTimeout;
  }, [currentIndex]);

  return (
    <div className="w-full  mx-auto relative h-[600px] overflow-hidden group">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="relative min-w-full h-full bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(24,23,23,0.38), rgb(0,0,0)), url(${item.img})`,
            }}
          >

          </div>
        ))}
      </div>


      {/* 🟩 Tarjetas sobrepuestas */}
      <div className="absolute left-1/2 top-[80%] -translate-x-1/2 -translate-y-4/5 flex gap-6 z-20">
        {cards.map((card, idx) => (
          <CardCarrousel key={idx} title={card.title} text={card.text} />
        ))}
      </div>
      {/* Botones de navegación del carrusel */}
      {/* Flecha izquierda */}
      <div className="absolute inset-y-0 left-0 flex items-center text-[#C2C2C2]">
        <ButtonComponent
          onClick={prevSlide}
          className="p-3 ml-2 rounded-full transition hover:text-white
                     opacity-100 -translate-x-12  group-hover:translate-x-0 duration-300"
        >
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 1024 1024"
            className="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </ButtonComponent>
      </div>

      {/* Flecha derecha */}
      <div className="absolute inset-y-0 right-0 flex items-center text-[#C2C2C2]">
        <ButtonComponent
          onClick={nextSlide}
          className="p-3 ml-2 rounded-full transition hover:text-white
                     opacity-100 translate-x-12  group-hover:translate-x-0 duration-300"
        >
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 1024 1024"
            className="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            transform="rotate(180)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </ButtonComponent>
      </div>
    </div>
  );
};

export default MainCarrousel;
