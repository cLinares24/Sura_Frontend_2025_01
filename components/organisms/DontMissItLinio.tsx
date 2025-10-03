'use client'
import React from 'react';
import Image from "next/image";
const offers = [
  {
    title: 'BELLEZA',
    image: 'https://images.falabella.com/v3/assets/bltf612eb601c634386/blt6c2d5e1587ec5932/65f78ff3a7eab4c59b9164d4/GridOn_1.1_CO_SIS_Grids_AO.jpg',
  },
  {
    title: 'MUNDO BEBÉS',
    image: 'https://images.falabella.com/v3/assets/bltf612eb601c634386/blta19b9c5eaf69e263/65f78ff35a287d3a2df2e766/GridOn_1.2_CO_SIS_Grids_AO.jpg',
  },
  {
    title: 'VITAMINAS Y SUPLEMENTOS',
    image: 'https://images.falabella.com/v3/assets/bltf612eb601c634386/blt17447d33c3a4c615/65f78ff354369a5bb8694b88/GridOn_1.3_CO_SIS_Grids_AO.jpg',
  },
];

const DontMissIt = () => {
  return (

    <div className="w-full max-w-[1200px] mx-auto mt-10 p-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">¡No te lo pierdas!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* El primer elemento es más ancho, ocupa 1/2 en pantallas medianas */}
        <div key={0} className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-md">
          <Image
            src={offers[0].image}
            alt={offers[0].title}
            width={800}  // valor base (ajústalo según tu caso)
            height={600} // valor base (ajústalo según tu caso)
            className="w-full h-full"
          />
          <div className="absolute top-4 left-4">
          </div>
        </div>

        {/* Los siguientes dos elementos están en la misma columna */}
        <div className="flex gap-4">
          {offers.slice(1).map((offer, index) => (
            <div key={index + 1} className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-md">
              <Image
                src={offer.image}
                alt={offer.title}
                width={800}   // referencia, no afecta porque usas w-full h-full
                height={600}
                className="w-full h-full"
              />
              <div className="absolute top-4 left-4">
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default DontMissIt;
