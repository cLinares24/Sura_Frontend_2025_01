import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { userSchema } from "@/schemas/user";
import { editUserSchema } from "@/schemas/userEdit";

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
  const handleEdit = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Editar Perfil",
      html: `
        <div class='text-left'>
          <label class='font-semibold'>Nombre</label>
          <input id='nombre' class='swal2-input' value='${profile.nombre}' />

          <label class='font-semibold'>Cédula</label>
          <input id='cedula' class='swal2-input' value='${profile.cedula}' />

          <label class='font-semibold'>Correo</label>
          <input id='correo' type='email' class='swal2-input' value='${profile.correo}' />

          <label class='font-semibold'>Género</label>
          <select id='genero' class='swal2-input'>
            <option value='masculino' ${profile.genero === "masculino" ? "selected" : ""}>Masculino</option>
            <option value='femenino' ${profile.genero === "femenino" ? "selected" : ""}>Femenino</option>
          </select>
        </div>
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Guardar",
      cancelButtonText: "Cancelar",
      preConfirm: () => {
        return {
          nombre: (document.getElementById("nombre") as HTMLInputElement).value,
          cedula: (document.getElementById("cedula") as HTMLInputElement).value,
          correo: (document.getElementById("correo") as HTMLInputElement).value,
          genero: (document.getElementById("genero") as HTMLSelectElement).value
        };
      },
    });

    if (!formValues) return;

    const parsed = editUserSchema.safeParse(formValues);

    if (!parsed.success) {
      Swal.fire({ icon: "error", title: "Error", text: parsed.error.issues[0].message });
      return;
    }

    onUpdate(parsed.data);

    Swal.fire({ icon: "success", title: "Datos actualizados" });
  };

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

      <button
        onClick={handleEdit}
        className="mt-6 w-full bg-[#097747] text-white py-3 rounded-lg font-medium hover:bg-[#07653c] transition-colors"
      >
        Editar Perfil
      </button>

    </motion.div>
  );
}
