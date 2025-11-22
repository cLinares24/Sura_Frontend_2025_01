"use client";
import { createContext, useState, useContext, ReactNode } from "react";


export interface Disponibilidad {
id_disponibilidad?: number;
dia_semana: string;
hora_inicio: string;
hora_fin: string;
}


export interface Medico {
id_medico?: number;
nombre: string;
cedula: string;
correo: string;
telefono?: string;
id_especialidad: number;
disponibilidad?: Disponibilidad[];
}


interface DoctorsContextProps {
medicos: Medico[];
agregarMedico: (m: Medico) => void;
editarMedico: (m: Medico) => void;
eliminarMedico: (id: number) => void;
}


const DoctorsContext = createContext<DoctorsContextProps | null>(null);
export const useMedicos = () => useContext(DoctorsContext)!;


export const MedicosProvider = ({ children }: { children: ReactNode }) => {
const [medicos, setMedicos] = useState<Medico[]>([]);


const agregarMedico = (m: Medico) => setMedicos([...medicos, { ...m, id_medico: Date.now() }]);


const editarMedico = (editado: Medico) => {
setMedicos(medicos.map((m) => (m.id_medico === editado.id_medico ? editado : m)));
};


const eliminarMedico = (id: number) => setMedicos(medicos.filter((m) => m.id_medico !== id));


return (
<DoctorsContext.Provider value={{ medicos, agregarMedico, editarMedico, eliminarMedico }}>
{children}
</DoctorsContext.Provider>
);
};