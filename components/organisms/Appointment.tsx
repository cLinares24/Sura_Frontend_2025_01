"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ButtonComponent from "../atoms/ButtonComponent";

const Appointment = () => {
  return (
    <header className=" bg-white shadow-md">
      {/* Barra Morada */}
      <div className="w-full bg-[#9155A7]">
        <div className="max-w-[1200px] flex items-center gap-8 h-[100px] px-4 text-white">
          <div className="absolute left-[20%] -translate-x-1/2 flex items-center gap-5">
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M3 10H21M7 3V5M17 3V5M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <h1 className="text-xl">Agende aquí su cita</h1>
          </div>

          <ButtonComponent className="cursor-pointer absolute left-[80%] -translate-x-1/2 bg-[#7A3E96] text-white px-6 py-2 rounded-md text-sm sm:text-base hover:bg-[#6a3584] transition">
            Reserva una cita
          </ButtonComponent>
        </div>
      </div>

      {/* Barra Blanca */}
    </header>
  );
};

export default Appointment;
