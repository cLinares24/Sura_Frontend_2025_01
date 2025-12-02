// // src/components/admin/ReprogramModal.tsx
// "use client";

// import React, { useState } from "react";
// import Swal from "sweetalert2";

// export const ReprogramModal = ({
//   open,
//   onClose,
//   onSubmit,
//   cita,
// }: {
//   open: boolean;
//   onClose: () => void;
//   onSubmit: (payload: { fecha?: string; hora?: string; id_medico?: number }) => Promise<void>;
//   cita: any | null;
// }) => {
//   const [fecha, setFecha] = useState<string>(cita?.fecha || "");
//   const [hora, setHora] = useState<string>(cita?.hora || "");
//   const [medico, setMedico] = useState<number | undefined>(cita?.id_medico);

//   React.useEffect(() => {
//     if (cita) {
//       setFecha(cita.fecha);
//       setHora(cita.hora);
//       setMedico(cita.id_medico);
//     }
//   }, [cita]);

//   if (!open) return null;

//   const handleSubmit = async () => {
//     try {
//       await onSubmit({ fecha, hora, id_medico: medico });
//       Swal.fire("Listo", "Cita reprogramada", "success");
//       onClose();
//     } catch (e: any) {
//       Swal.fire("Error", e.message || "Error al reprogramar", "error");
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
//       <div className="bg-white p-6 rounded-lg w-[420px]">
//         <h3 className="font-bold text-lg mb-3">Reprogramar cita</h3>

//         <label className="text-sm">Fecha</label>
//         <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} className="w-full p-2 border rounded mb-2" />

//         <label className="text-sm">Hora</label>
//         <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} className="w-full p-2 border rounded mb-4" />

//         <div className="flex justify-end gap-2">
//           <button onClick={onClose} className="px-4 py-2 rounded border">Cancelar</button>
//           <button onClick={handleSubmit} className="px-4 py-2 rounded bg-[#9155A7] text-white">Guardar</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// src/components/admin/ReprogramModal.ts
// src/components/admin/ReprogramModal.ts
"use client";

import Swal from "sweetalert2";

export const openReprogramModal = async () => {
  const { value: form } = await Swal.fire({
    title: "Reprogramar cita",
    html: `
      <input type="date" id="fecha" class="swal2-input" />
      <input type="time" id="hora" class="swal2-input" />
      <p class="text-xs text-gray-500">* No se permiten domingos</p>
    `,
    focusConfirm: false,
    preConfirm: () => {
      const fecha = (document.getElementById("fecha") as HTMLInputElement).value;
      const hora = (document.getElementById("hora") as HTMLInputElement).value;

      if (!fecha || !hora) return Swal.showValidationMessage("Completa ambos campos");

      if (new Date(fecha).getDay() === 0)
        return Swal.showValidationMessage("No se permiten domingos");

      return { fecha, hora };
    },
    showCancelButton: true,
  });

  return form;
};
