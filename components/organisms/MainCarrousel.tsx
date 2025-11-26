"use client";
import { useCarrousel } from "@/hooks/useCarrousel";
import CardCarrousel from "../molecules/CardsCarrouselComponent";
import ButtonComponent from "../atoms/ButtonComponent";

const items = [
  { img: "https://www.elhospital.com/uploads/news-pictures/pphoto-1033.jpg", alt: "Cardiologia" },
  { img: "https://ismet.es/wp-content/uploads/2023/07/Sin-titulo-1-770x400.jpg", alt: "Neurologia" },
  {
    img: "https://www.clinicadelnorte.org/wp-content/uploads/2022/01/asian-woman-patient-with-bandage-compression-knee-brace-support-injury-on-the-bed-in-nursing-hospital-healthcare-and-medical-support-768x513.jpg",
    alt: "Ortopedia",
  },
  { img: "https://magnetosur.com/wp-content/uploads/2021/11/Que-diferencias-existen-entre-la-medicina-general-y-la-medicina-interna.jpg", alt: "Medicina General" },
];

const cards = [
   {
    title: "Cardiología",
    text: "Diagnóstico y tratamiento de enfermedades del corazón y del sistema cardiovascular con tecnología avanzada.",
  },
  {
    title: "Neurología",
    text: "Atención especializada para trastornos del sistema nervioso, incluyendo migrañas, epilepsia y enfermedades neurodegenerativas.",
  },
  {
    title: "Ortopedia",
    text: "Cuidado integral de huesos, articulaciones y músculos, incluyendo lesiones deportivas y rehabilitación cuidadosa.",
  }
];

export default function MainCarrousel() {
  const { currentIndex, nextSlide, prevSlide } = useCarrousel(items.length, 10000);

  return (
    <div className="w-full mx-auto relative h-[600px] md:h-[600px] h-[450px] overflow-hidden group">

  {/* Slides */}
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
      ></div>
    ))}
  </div>

  {/* Tarjetas sobrepuestas */}
  <div
    className="
      absolute 
      left-1/2 
      top-[78%] 
      -translate-x-1/2 
      -translate-y-1/2 
      flex 
      gap-6 
      z-20

      /* 📱 Mobile */
      flex-col 
      items-center 
      w-full px-4

      /* 🖥 Desktop */
      md:flex-row 
      md:top-[80%] 
      md:-translate-y-[80%] 
      md:w-auto 
      md:px-0
    "
  >
    {cards.map((card, idx) => (
      <CardCarrousel key={idx} title={card.title} text={card.text} />
    ))}
  </div>

  {/* Flecha izquierda */}
  <div className="absolute inset-y-0 left-0 flex items-center text-[#C2C2C2]">
    <ButtonComponent
      onClick={prevSlide}
      className="p-3 ml-2 rounded-full transition hover:text-white
      opacity-100 
      -translate-x-2  
      md:-translate-x-12 
      group-hover:translate-x-0 
      duration-300"
    >
      <svg width="30px" height="30px" viewBox="0 0 1024 1024" fill="currentColor">
        <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" />
      </svg>
    </ButtonComponent>
  </div>

  {/* Flecha derecha */}
  <div className="absolute inset-y-0 right-0 flex items-center text-[#C2C2C2]">
    <ButtonComponent
      onClick={nextSlide}
      className="p-3 mr-2 rounded-full transition hover:text-white
      opacity-100  
      translate-x-2  
      md:translate-x-12  
      group-hover:translate-x-0 
      duration-300"
    >
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 1024 1024"
        fill="currentColor"
        transform="rotate(180)"
      >
        <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" />
      </svg>
    </ButtonComponent>
  </div>

</div>

  );
}
