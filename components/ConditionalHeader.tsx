"use client";

import { usePathname } from "next/navigation";
import HeaderComponent from "@/components/organisms/HeaderComponent";

export default function ConditionalHeader() {
  const pathname = usePathname();

  // Mostrar el header solo si no estamos en /login
  if (pathname === "/login") {
    return null;
  }

  return <HeaderComponent />;
}
