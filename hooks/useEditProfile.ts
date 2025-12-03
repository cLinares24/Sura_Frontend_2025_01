import Swal from "sweetalert2";
import { editUserSchema } from "../schemas/userEdit";
import { useAuth } from "../context/AuthContext";

interface Profile {
  nombre: string;
  cedula: string;
  correo: string;
  genero: "masculino" | "femenino";
  rol: "paciente";
  fecha_registro: string;
}

export const useEditProfile = (profile: Profile, onUpdate?: (data: any) => void) => {
  const { setUser } = useAuth(); // <--- Accedemos al contexto

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

    // Actualizamos el contexto global
    setUser(parsed.data.nombre);

    // Llamamos al callback opcional para que el componente actualice su estado
    if (onUpdate) onUpdate(parsed.data);

    Swal.fire({ icon: "success", title: "Datos actualizados" });
  };

  return { handleEdit };
};
