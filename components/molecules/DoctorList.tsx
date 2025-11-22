import { useMedicos } from "@/context/DoctorsContext";
import { DoctorCard } from "@/components/atoms/DoctorCards";

export const DoctorList = ({ onEdit }: { onEdit: (m: any) => void }) => {
  const { medicos, eliminarMedico } = useMedicos();

  return (
    <div className="space-y-3 mt-4">
      {medicos.map((m) => (
        <DoctorCard
          key={m.id_medico}
          m={m}
          onEdit={() => onEdit(m)}
          onDelete={() => eliminarMedico(m.id_medico!)}
        />
      ))}
    </div>
  );
};
