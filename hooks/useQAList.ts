// hooks/useQAList.ts
import { useEffect, useState } from "react";
import { getAllQAService, deleteQAService } from "@/libs/qaService";
import Swal from "sweetalert2";

export function useQAList() {
  const [qaList, setQAList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Cargar la lista
  const fetchQA = async () => {
    try {
      setLoading(true);
      const data = await getAllQAService();
      setQAList(data);
    } catch (e: any) {
      setError(e.message || "Error cargando las dudas/quejas");
    } finally {
      setLoading(false);
    }
  };

  // Eliminar una duda/queja
  const deleteQA = async (id: number) => {
    try {
      const result = await Swal.fire({
        title: "¿Estás seguro?",
        text: "No podrás revertir esto",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      });

      if (result.isConfirmed) {
        await deleteQAService(id);
        Swal.fire("Eliminado!", "La entrada fue eliminada.", "success");
        fetchQA(); // refrescar lista
      }
    } catch (e: any) {
      Swal.fire("Error", e.message || "No se pudo eliminar", "error");
    }
  };

  useEffect(() => {
    fetchQA();
  }, []);

  return { qaList, loading, error, deleteQA, fetchQA };
}
