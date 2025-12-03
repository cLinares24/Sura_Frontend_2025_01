"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRole } from "@/hooks/useRole";

interface DepartmentCardProps {
  id: number;
  title: string;
  img: string;
  desc: string;
  index: number;
}

export const DepartmentCards: React.FC<DepartmentCardProps> = ({
  id,
  title,
  img,
  desc,
  index,
}) => {
  const { rol } = useRole();

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden group cursor-pointer"
    >
      {/* Imagen */}
      <div className="relative w-full h-48">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Texto */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-[#c38dd6]">{title}</h3>
        <p className="mt-3 text-gray-700 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );

  // Si hay rol, envolvemos en Link; si no, solo el div
  return rol ? <Link href={`/departamentos/${id}`}>{content}</Link> : content;
};
