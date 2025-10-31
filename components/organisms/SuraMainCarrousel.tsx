"use client";
import { useEffect, useRef, useState } from "react";
import {
  MousePointerClick,
  CreditCard,
  Calendar,
  BookOpen,
  User,
} from "lucide-react";

const items = [
  {
    img: "https://www.epssura.com/files/home-2021/img/foro-17-septiembre.jpg",
    alt: "Logo EPS Sura",
    text: "Hablemos de prevención del suicidio: botiquín de primeros auxilios en salud mental. - Conéctate a nuestro foro en vivo este miércoles 17 de septiembre a las 6:00 p. m.",
    button: "INGRESA",
    class: "font-bold text-[18px] mb-5",
  },
  {
    img: "https://www.epssura.com/files/home-2021/img/banner-fraude-ginecologia-junio-2025.png",
    alt: "Imagen salud",
    text: "Ninguna persona o institución de salud te va a solicitar en nombre de SURA, mostrar tus partes íntimas en una videollamada. Si te lo piden, ¡no lo hagas!",
    class: "font-bold text-[18px] mb-5 mt-5",
  },
  {
    img: "https://www.epssura.com/files/home-2021/img/banner-farmadomicilios.png",
    alt: "Imagen afiliados",
    text: "Farmadomicilios - La mejor opción para solicitar tus medicamentos sin filas ni desplazamientos.",
    button: "INGRESA AQUÍ",
    class: "font-bold text-[24px] mb-5",
  },
  {
    img: "https://www.epssura.com/files/home-2021/img/banner-como-reclamar-los-medicamentos-2024.jpg",
    alt: "Imagen afiliados",
    text: "¿Cómo reclamar los medicamentos que te ordena tu médico?",
    button: "AQUÍ TE CONTAMOS",
    class: "font-bold text-[24px] mb-5",
  },
];

const ImageCarousel: React.FC = () => {
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
        {[
          { title: "Cardiología", text: "Párrafo. Haz clic aquí para agregar tu texto y editar. Permite que tus usuarios te conozcan." },
          { title: "Neurología", text: "Párrafo. Haz clic aquí para agregar tu texto y editar. Permite que tus usuarios te conozcan." },
          { title: "Ortopedia", text: "Párrafo. Haz clic aquí para agregar tu texto y editar. Permite que tus usuarios te conozcan." },
        ].map((card, idx) => (
          <div
            key={idx}
            className="bg-green-600/30 text-white p-6 w-72 shadow-lg backdrop-blur-sm"
          >
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-sm mb-4">{card.text}</p>
            <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 text-sm rounded transition">
              Leer más
            </button>
          </div>
        ))}
      </div>
      {/* Botones de navegación del carrusel */}
      {/* Flecha izquierda */}
      <div className="absolute inset-y-0 left-0 flex items-center text-[#C2C2C2]">
        <button
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
        </button>
      </div>

      {/* Flecha derecha */}
      <div className="absolute inset-y-0 right-0 flex items-center text-[#C2C2C2]">
        <button
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
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
