"use client";

import { ReactNode } from "react";

type CardHealthProps = {
  icon: ReactNode;     // permite pasar un <svg />, <Icon />, etc.
  title: string;
  text: string;
  link: string;
};

export default function CardHealth({ icon, title, text, link }: CardHealthProps) {
  return (
    <div className="flex flex-col gap-5 items-center text-[#0db26b] hover:shadow-lg border-1 hover:h-[103%] hover:-translate-y-1 transition-shadow duration-300 rounded-2xl p-6">
      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#0db26b] text-white text-4xl mb-4">
        {icon}
      </div>

      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm text-center">{text}</p>


    </div>
  );
}
