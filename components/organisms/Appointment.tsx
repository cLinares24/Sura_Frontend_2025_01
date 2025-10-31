"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Appointment = () => {


  return (

    <header className=" bg-white shadow-md">
      {/* Barra Morada */}
      <div className="w-full bg-[#9155A7]">
        <div className="max-w-[1200px] flex items-center gap-8 h-[100px] px-4 text-white">
          <p>Barra Morada</p>
          <button
            className="absolute top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 bg-[#7A3E96] text-white px-6 py-2 rounded-md text-sm sm:text-base hover:bg-[#6a3584] transition"
          >
            Reserva una cita
          </button>
        </div>
      </div>

      {/* Barra Blanca */}
    </header>

  );
};

export default Appointment;
