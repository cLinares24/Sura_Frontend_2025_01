import { motion } from "framer-motion";
import { useEditProfile } from "../../hooks/useEditProfile";
import ButtonComponent from "./ButtonComponent";

interface AccountCardProps {
  profile: {
    nombre: string;
    cedula: string;
    correo: string;
    genero: "masculino" | "femenino";
    rol: "paciente";
    fecha_registro: string;
  };
  onUpdate: (data: any) => void;
}

export default function AccountCard({ profile, onUpdate }: AccountCardProps) {
  const { handleEdit } = useEditProfile(profile, onUpdate);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-white border border-gray-200 rounded-2xl shadow-xl p-6 sm:p-8 max-w-xl mx-auto"
    >
      <h1 className="text-2xl font-bold text-[#097747] mb-6 text-center">
        Mi Perfil
      </h1>

      <div className="space-y-3 text-gray-700 text-sm sm:text-base">
        <p><span className="font-semibold text-[#1a8c68]">Nombre:</span> {profile.nombre}</p>
        <p><span className="font-semibold text-[#1a8c68]">Cédula:</span> {profile.cedula}</p>
        <p><span className="font-semibold text-[#1a8c68]">Correo:</span> {profile.correo}</p>
        <p><span className="font-semibold text-[#1a8c68]">Género:</span> {profile.genero}</p>
        <p><span className="font-semibold text-[#1a8c68]">Rol:</span> {profile.rol}</p>
        <p><span className="font-semibold text-[#1a8c68]">Fecha de Registro:</span> {new Date(profile.fecha_registro).toLocaleString()}</p>
      </div>

      <ButtonComponent
        onClick={handleEdit}
        className="mt-6 w-full bg-[#097747] text-white py-3 rounded-lg font-medium hover:bg-[#07653c] transition-colors"
      >
        Editar Perfil
      </ButtonComponent>
    </motion.div>
  );
}
