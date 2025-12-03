"use client";

interface ColumnSelectProps {
  value: number;
  onChange: (value: number) => void;
}

export const ColumnSelect = ({ value, onChange }: ColumnSelectProps) => {
  return (
    <select
      className="
        w-40 px-3 py-2 
        bg-white/60 backdrop-blur 
        border border-gray-300 
        rounded-xl shadow-sm 
        text-sm text-gray-800 
        focus:outline-none 
        focus:ring-1 focus:ring-[#9155A7] 
        focus:border-[#9155A7] 
        transition-all
      "
      value={value}
      onChange={(e: any) => onChange(Number(e.target.value))}
    >
      <option value={1}>1 columna</option>
      <option value={2}>2 columnas</option>
      <option value={3}>3 columnas</option>
      <option value={4}>4 columnas</option>
    </select>
  );
};
