// // "use client";
// // import { createContext, useState, useContext, ReactNode } from "react";
// // import { useMedico } from "@/hooks/useMedicos";

// // export interface Disponibilidad {
// //   id_disponibilidad?: number;
// //   dia_semana: string;
// //   hora_inicio: string;
// //   hora_fin: string;
// // }

// // export interface Medico {
// //   id_medico?: number;
// //   nombre: string;
// //   cedula: string;
// //   correo: string;
// //   telefono: string;
// //   id_especialidad?: number;
// //   disponibilidad?: Disponibilidad[];
// // }

// // interface DoctorsContextProps {
// //   medicos: Medico[];
// //   agregarMedico: (m: Medico) => void;
// //   editarMedico: (m: Medico) => void;
// //   eliminarMedico: (id: number) => void;
// // }

// // const DoctorsContext = createContext<DoctorsContextProps | null>(null);
// // export const useMedicos = () => useContext(DoctorsContext)!;

// // export const MedicosProvider = ({ children }: { children: ReactNode }) => {
// //   const [medicos, setMedicos] = useState<Medico[]>([

// // {
// //       id_medico: 1,
// //       cedula: "101010",
// //       nombre: "Carlos Gómez",
// //       telefono: '3432324324',
// //       correo: "carlos@example.com",
// //       id_especialidad: 1,
// //     }
// //   ]);

// //   const agregarMedico = (m: Medico) =>
// //     setMedicos([...medicos, { ...m, id_medico: Date.now() }]);

// //   const editarMedico = (editado: Medico) => {
// //     setMedicos(
// //       medicos.map((m) => (m.id_medico === editado.id_medico ? editado : m))
// //     );
// //   };

// //   const eliminarMedico = (id: number) =>
// //     setMedicos(medicos.filter((m) => m.id_medico !== id));

// //   return (
// //     <DoctorsContext.Provider
// //       value={{ medicos, agregarMedico, editarMedico, eliminarMedico }}
// //     >
// //       {children}
// //     </DoctorsContext.Provider>
// //   );
// // };

// "use client";
// import { createContext, useState, useContext, ReactNode, useEffect } from "react";
// import { useMedico } from "@/hooks/useMedicos";

// export interface Disponibilidad {
//   id_disponibilidad?: number;
//   dia_semana: string;
//   hora_inicio: string;
//   hora_fin: string;
// }

// export interface Medico {
//   id_medico?: number;
//   nombre: string;
//   cedula: string;
//   correo: string;
//   telefono: string;
//   id_especialidad?: number;
//   disponibilidad?: Disponibilidad[];
// }

// interface DoctorsContextProps {
//   medicos: Medico[];
//   agregarMedico: (m: Medico) => void;
//   editarMedico: (m: Medico) => void;
//   eliminarMedico: (id: number) => void;
//   loading: boolean;
//   error: string;
//   reload: () => void;
// }

// const DoctorsContext = createContext<DoctorsContextProps | null>(null);
// export const useMedicos = () => useContext(DoctorsContext)!;

// export const MedicosProvider = ({ children }: { children: ReactNode }) => {
//   const { medicos: apiMedicos, loading, error, fetchMedicos } = useMedico();
//   const [medicos, setMedicos] = useState<Medico[]>([]);

//   // 🔥 Cuando el backend responde, llenamos el estado local
//   useEffect(() => {
//     if (!loading && apiMedicos.length > 0) {
//       setMedicos(apiMedicos);
//     }
//   }, [apiMedicos, loading]);

//   // 💚 Mantengo tus funciones LOCALES (por ahora)
//   const agregarMedico = (m: Medico) =>
//     setMedicos([...medicos, { ...m, id_medico: Date.now() }]);

//   const editarMedico = (editado: Medico) => {
//     setMedicos(
//       medicos.map((m) => (m.id_medico === editado.id_medico ? editado : m))
//     );
//   };

//   const eliminarMedico = (id: number) =>
//     setMedicos(medicos.filter((m) => m.id_medico !== id));

//   return (
//     <DoctorsContext.Provider
//       value={{
//         medicos,
//         agregarMedico,
//         editarMedico,
//         eliminarMedico,
//         loading,
//         error,
//         reload: fetchMedicos,
//       }}
//     >
//       {children}
//     </DoctorsContext.Provider>
//   );
// };

"use client";

import { createContext, useContext, ReactNode, useEffect, useState } from "react";
import { useMedico } from "../hooks/useMedicos";
import {
  deleteMedicoService,
  updateMedicoService,
  createMedicoService,
} from "../libs/medicosService";

export interface Medico {
  id_medico?: number;
  nombre: string;
  cedula: string;
  correo: string;
  telefono: string;
  id_especialidad?: number;
}

interface DoctorsContextProps {
  medicos: Medico[];
  agregarMedico: (m: Medico) => void;
  editarMedico: (m: Medico) => void;
  eliminarMedico: (id: number) => void;
  loading: boolean;
  error: string;
  reload: () => void;
}

const DoctorsContext = createContext<DoctorsContextProps | null>(null);
export const useMedicos = () => useContext(DoctorsContext)!;

export const MedicosProvider = ({ children }: { children: ReactNode }) => {
  const { medicos: apiMedicos, loading, error, fetchMedicos } = useMedico();
  const [medicos, setMedicos] = useState<Medico[]>([]);

  useEffect(() => {
    if (!loading) setMedicos(apiMedicos);
  }, [apiMedicos, loading]);

const agregarMedico = async (m: any) => {
  // console.log("Agregando medico ", m)
  await createMedicoService(m);
  fetchMedicos();
};


  const editarMedico = async (m: Medico) => {
    await updateMedicoService(m.id_medico!, m);
    fetchMedicos();
  };

  const eliminarMedico = async (id: number) => {
    // console.log("Voy a eliminar el medico: ", id)
    await deleteMedicoService(id);
    setMedicos(medicos.filter((x) => x.id_medico !== id));
  };

  return (
    <DoctorsContext.Provider
      value={{
        medicos,
        agregarMedico,
        editarMedico,
        eliminarMedico,
        loading,
        error,
        reload: fetchMedicos,
      }}
    >
      {children}
    </DoctorsContext.Provider>
  );
};
