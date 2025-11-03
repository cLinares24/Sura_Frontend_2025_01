"use client";

interface ButtonComponentProps {
  label: string;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export default function ButtonComponent({
  label,
  type = "button",
  className = "",
}: ButtonComponentProps) {
  return (
    <button
      type={type}
      className={`cursor-pointer transition-colors duration-300 ${className}`}
    >
      {label}
    </button>
  );
}
