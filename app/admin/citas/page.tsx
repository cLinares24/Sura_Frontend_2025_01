// "use client";

// import React, { useEffect, useState } from "react";
// import { useAdminCitas } from "@/hooks/useAdminCitas";
// import { AdminCitasTable } from "@/components/molecules/AdminCitasTable";
// import { openReprogramModal } from "@/components/atoms/ReprogramModal";

// export default function AdminCitasPage() {
//   const {
//     citas,
//     loading,
//     fetchAllCitas,
//     eliminarCita,
//     reprogramarCita,
//     confirmarCita,
//     cancelarCita,
//   } = useAdminCitas();

//   const [selectedCita, setSelectedCita] = useState<any | null>(null);

//   useEffect(() => {
//     fetchAllCitas();
//   }, []);

//   const handleConfirm = async (cita: any) => {
//     await confirmarCita(
//       cita.id_cita,
//       cita.correo,
//       cita.nombre_usuario,
//       cita.medico,
//       cita.fecha,
//       cita.hora
//     );
//   };

//   const handleReprogram = async (cita: any) => {
//     setSelectedCita(cita);

//     const form = await openReprogramModal();
//     if (!form) return; // cancelado

//     await reprogramarCita(
//       cita.id_cita,
//       { fecha: form.fecha, hora: form.hora, id_medico: cita.id_medico },
//       {
//         correo: cita.correo,
//         nombre_usuario: cita.nombre_usuario,
//         medico: cita.medico,
//       }
//     );
//   };

//   const handleCancel = async (cita: any) => {
//     await cancelarCita(
//       cita.id_cita,
//       cita.correo,
//       cita.nombre_usuario,
//       cita.medico,
//       cita.fecha,
//       cita.hora
//     );
//   };

//   const handleDelete = async (id_cita: number) => {
//     await eliminarCita(id_cita);
//   };

//   return (
//     <section className="p-6">
//       <h1 className="text-2xl font-bold text-[#9155A7] mb-4">
//         Panel de Citas (Admin)
//       </h1>

//       {loading ? (
//         <p>Cargando...</p>
//       ) : (
//         <AdminCitasTable
//           citas={citas}
//           onConfirm={handleConfirm}
//           onReprogram={handleReprogram}
//           onCancel={handleCancel}
//           onDelete={handleDelete}
//         />
//       )}
//     </section>
//   );
// }


// src/app/admin/citas/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useAdminCitas } from "@/hooks/useAdminCitas";
import { AdminCitasTable } from "@/components/molecules/AdminCitasTable";
import { openReprogramModal } from "@/components/atoms/ReprogramModal";

export default function AdminCitasPage() {
  const {
    citas,
    loading,
    fetchAllCitas,
    eliminarCita,
    reprogramarCita,
    confirmarCita,
    cancelarCita,
  } = useAdminCitas();

  const [selectedCita, setSelectedCita] = useState<any | null>(null);

  useEffect(() => {
    fetchAllCitas();
  }, []);

  const handleConfirm = async (cita: any) => {
    await confirmarCita(
      cita.id_cita,
      cita.correo,
      cita.nombre_usuario,
      cita.medico,
      cita.fecha,
      cita.hora
    );
  };

  const handleReprogram = async (cita: any) => {
    setSelectedCita(cita);

    const form = await openReprogramModal();
    if (!form) return;

    await reprogramarCita(
      cita.id_cita,
      { fecha: form.fecha, hora: form.hora, id_medico: cita.id_medico },
      {
        correo: cita.correo,
        nombre_usuario: cita.nombre_usuario,
        medico: cita.medico,
      }
    );
  };

  const handleCancel = async (cita: any) => {
    await cancelarCita(
      cita.id_cita,
      cita.correo,
      cita.nombre_usuario,
      cita.medico,
      cita.fecha,
      cita.hora
    );
  };

  const handleDelete = async (id_cita: number) => {
    await eliminarCita(id_cita);
  };

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold text-[#9155A7] mb-4">
        Panel de Citas (Admin)
      </h1>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <AdminCitasTable
          citas={citas}
          onConfirm={handleConfirm}
          onReprogram={handleReprogram}
          onCancel={handleCancel}
          onDelete={handleDelete}
        />
      )}
    </section>
  );
}
