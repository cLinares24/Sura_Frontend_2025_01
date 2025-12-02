// // src/components/admin/AdminCitasTable.tsx
// "use client";

// import React from "react";
// import Swal from "sweetalert2";
// import { openReprogramModal } from "../atoms/ReprogramModal";

// export const AdminCitasTable = ({
//   citas,
//   onConfirm,
//   onReprogram,
//   onCancel,
//   onDelete,
// }: {
//   citas: any[];
//   onConfirm: (cita: any) => Promise<void>;
//   onReprogram: (cita: any) => Promise<void>;
//   onCancel: (cita: any) => Promise<void>;
//   onDelete: (cita: any) => Promise<void>;
// }) => {
//   return (
//     <div className="overflow-auto bg-white rounded-lg shadow p-4">
//       <table className="w-full">
//         <thead>
//           <tr className="text-left text-sm text-gray-500">
//             <th className="py-2">ID</th>
//             <th>Usuario</th>
//             <th>Médico</th>
//             <th>Especialidad</th>
//             <th>Fecha</th>
//             <th>Hora</th>
//             <th className="text-right">Acciones</th>
//           </tr>
//         </thead>
//         <tbody>
//           {citas.map((c) => (
//             <tr key={c.id_cita} className="border-t">
//               <td className="py-3 text-sm">{c.id_cita}</td>
//               <td className="py-3 text-sm">{c.nombre_usuario || c.id_usuario}</td>
//               <td className="py-3 text-sm">{c.medico || c.id_medico}</td>
//               <td className="py-3 text-sm">{c.especialidad || c.id_especialidad}</td>
//               <td className="py-3 text-sm">{c.fecha}</td>
//               <td className="py-3 text-sm">{c.hora}</td>
//               <td className="py-3 text-right">
//                 <div className="inline-flex gap-2">
//                 <button
//   onClick={() =>
//     Swal.fire({
//       title: "Confirmar cita?",
//       showCancelButton: true,
//     }).then((res) => {
//       if (res.isConfirmed) onConfirm(c);
//     })
//   }
//   className="px-3 py-1 rounded bg-green-600 text-white text-sm"
// >
//   Confirmar
// </button>

// <button
//   onClick={() =>
//     Swal.fire({
//       title: "Cancelar cita?",
//       showCancelButton: true,
//     }).then((res) => {
//       if (res.isConfirmed) onCancel(c);
//     })
//   }
//   className="px-3 py-1 rounded bg-red-600 text-white text-sm"
// >
//   Cancelar
// </button>

// <button
//   onClick={() =>
//     Swal.fire({
//       title: "Eliminar definitivamente?",
//       showCancelButton: true,
//       text: "Esta acción no se puede deshacer",
//     }).then((res) => {
//       if (res.isConfirmed) onDelete(c.id_cita);
//     })
//   }
//   className="px-3 py-1 rounded bg-gray-600 text-white text-sm"
// >
//   Borrar
// </button>

//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// src/components/molecules/AdminCitasTable.tsx
"use client";

import React from "react";
import Swal from "sweetalert2";

export const AdminCitasTable = ({
  citas,
  onConfirm,
  onReprogram,
  onCancel,
  onDelete,
}: {
  citas: any[];
  onConfirm: (cita: any) => Promise<void>;
  onReprogram: (cita: any) => Promise<void>;
  onCancel: (cita: any) => Promise<void>;
  onDelete: (cita: any) => Promise<void>;
}) => {
  return (
    <div className="overflow-auto bg-white rounded-lg shadow p-4">
      <table className="w-full">
        <thead>
          <tr className="text-left text-sm text-gray-500">
            <th className="py-2">ID</th>
            <th>Usuario</th>
            <th>Médico</th>
            <th>Especialidad</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th className="text-right">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {citas.map((c) => (
            <tr key={c.id_cita} className="border-t">
              <td className="py-3 text-sm">{c.id_cita}</td>
              <td className="py-3 text-sm">{c.nombre_usuario || c.id_usuario}</td>
              <td className="py-3 text-sm">{c.medico || c.id_medico}</td>
              <td className="py-3 text-sm">{c.especialidad || c.id_especialidad}</td>
              <td className="py-3 text-sm">{c.fecha}</td>
              <td className="py-3 text-sm">{c.hora}</td>

              {/* Botones */}
              <td className="py-3 text-right">
                <div className="inline-flex gap-2">

                  {/* Confirmar */}
                  <button
                    onClick={() =>
                      Swal.fire({
                        title: "Confirmar cita?",
                        showCancelButton: true,
                      }).then((res) => {
                        if (res.isConfirmed) onConfirm(c);
                      })
                    }
                    className="px-3 py-1 rounded bg-green-600 text-white text-sm"
                  >
                    Confirmar
                  </button>

                  {/* Reprogramar */}
                  <button
                    onClick={() => onReprogram(c)}
                    className="px-3 py-1 rounded bg-yellow-500 text-white text-sm"
                  >
                    Reprogramar
                  </button>

                  {/* Cancelar */}
                  <button
                    onClick={() =>
                      Swal.fire({
                        title: "Cancelar cita?",
                        showCancelButton: true,
                      }).then((res) => {
                        if (res.isConfirmed) onCancel(c);
                      })
                    }
                    className="px-3 py-1 rounded bg-red-600 text-white text-sm"
                  >
                    Cancelar
                  </button>

                  {/* Eliminar */}
                  <button
                    onClick={() =>
                      Swal.fire({
                        title: "Eliminar definitivamente?",
                        text: "Esta acción no se puede deshacer",
                        showCancelButton: true,
                      }).then((res) => {
                        if (res.isConfirmed) onDelete(c.id_cita);
                      })
                    }
                    className="px-3 py-1 rounded bg-gray-600 text-white text-sm"
                  >
                    Borrar
                  </button>

                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
