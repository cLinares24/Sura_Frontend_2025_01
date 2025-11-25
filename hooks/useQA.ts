"use client";

import { useState } from "react";
import { sendQAService } from "@/libs/qaService";
import { QADTO } from "@/interfaces/QADTO";

export function useQA() {
  const [loading, setLoading] = useState(false);

  const sendQA = async (data: QADTO) => {
    try {
      setLoading(true);
      console.log("Body: ", data)
      const res = await sendQAService(data);

      return res; // debe devolver algo del backend
    } catch (error) {
      console.error("Error en useQA:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { sendQA, loading };
}
