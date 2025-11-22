import { useMedicos } from "@/context/DoctorsContext";
import { DoctorCard } from "@/components/atoms/DoctorCards";

export const DoctorList = ({ onEdit }: { onEdit: (m: any) => void }) => {
  const { medicos, eliminarMedico } = useMedicos();

  if (medicos.length === 0) {
    return (
      <div className="mt-4 p-6 bg-gray-100 rounded-xl text-center text-gray-500 flex flex-col items-center justify-center gap-2">
        {/* <span className="text-2xl">📋</span> */}{" "}
        <p className="italic">No hay médicos registrados</p>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h2 className="font-bold text-2xl text-[#0db26b]">Médicos</h2>
    <div className="grid grid-cols-2 gap-4 mt-4">
      
  {medicos.map((m) => (
    <DoctorCard
      key={m.id_medico}
      m={m}
      onEdit={() => onEdit(m)}
      onDelete={() => eliminarMedico(m.id_medico!)}
    />
  ))}
</div>
</div>

  );
};
