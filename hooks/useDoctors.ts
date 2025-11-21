"use client";

import { useContext } from "react";
import { DoctorsContext } from "@/context/DoctorsContext";

export function useDoctors() {
  const ctx = useContext(DoctorsContext);

  if (!ctx) {
    throw new Error("useDoctors debe usarse dentro de <DoctorsProvider />");
  }

  return ctx;
}
