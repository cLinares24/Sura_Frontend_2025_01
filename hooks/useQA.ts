"use client";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { sendQAService } from "@/libs/qaService";
import { QADTO } from "@/interfaces/QADTO";

export function useQA() {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const sendQA = async (data: QADTO) => {
    try {
      setLoading(true);
      setSuccessMessage(null);
      setErrorMessage(null);

      const res = await sendQAService(data);
      setSuccessMessage("Tu duda/queja fue enviada correctamente.");
      return res;

    } catch (error) {
      setErrorMessage("Error enviando la información.");
      throw error;

    } finally {
      setLoading(false);
    }
  };

  // ⭐ Ahora el SweetAlert está dentro del hook
  useEffect(() => {
    if (successMessage) {
      Swal.fire({
        icon: "success",
        title: "¡Enviado!",
        text: successMessage,
      });
    }

    if (errorMessage) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage,
      });
    }
  }, [successMessage, errorMessage]);

  return {
    sendQA,
    loading,
    successMessage,
    errorMessage,
  };
}
