"use client";
import ButtonComponent from "../atoms/ButtonComponent";

type CardCarrouselProps = {
  title: string;
  text: string;
  linkText?: string;
};

export default function CardCarrousel({
  title,
  text,
  linkText = "Leer más",
}: CardCarrouselProps) {
  return (
    <div className="bg-[#6DCCA3]/70 text-white p-6 w-72 shadow-lg backdrop-blur-sm">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm mb-4">{text}</p>
      <ButtonComponent className="bg-[#2A7957] hover:bg-green-800 text-white px-4 py-2 text-sm rounded transition">
        {linkText}
      </ButtonComponent>
    </div>
  );
}
