"use client";
import { motion } from "framer-motion";

export interface AboutCard {
  title: string;
  desc: string;
}

export default function AboutCards({ data }: { data: AboutCard[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 w-full">
      {data.map((v, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: i * 0.2 }}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow w-full"
        >
          <h3 className="text-xl font-semibold text-[#097747] text-center">
            {v.title}
          </h3>

          <p className="mt-3 text-gray-700 text-sm leading-relaxed text-center">
            {v.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
