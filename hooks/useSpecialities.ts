"use client";

import { useContext } from "react";
import { SpecialitiesContext } from "@/context/SpecialitiesContext";

export function useSpecialities() {
  const ctx = useContext(SpecialitiesContext);
  if (!ctx) {
    throw new Error(
      "useSpecialities debe usarse dentro de un <SpecialitiesProvider>"
    );
  }
  return ctx;
}
