"use client";

import { useState } from "react";
import { Check, X } from "lucide-react"; // Usa estos íconos si tienes lucide-react instalado

interface PasswordWithPadProps {
  label: string;
  registerName: string;
  register: any;
  className?: string;
  classLabel?: string;
}

export default function PasswordWithPad({
  label,
  registerName,
  register,
  className,
  classLabel,
}: PasswordWithPadProps) {
  const [showPad, setShowPad] = useState(false);
  const [password, setPassword] = useState("");

  const handleClick = (num: string) => setPassword((prev) => prev + num);
  const handleClear = () => setPassword("");
  const handleSubmit = () => setShowPad(false);

  const numbers = ["8", "3", "6", "7", "2", "5", "9", "4", "1", "0"];

  return (
    <div className="relative w-full flex flex-col items-center">
      <label className={classLabel}>{label}</label>

      {/* Input bloqueado */}
      <input
        type="password"
        value={password}
        placeholder="Ingresa tu contraseña"
        className={`${className} cursor-pointer`}
        onFocus={() => setShowPad(true)}
        onKeyDown={(e) => e.preventDefault()}
        readOnly
        {...register(registerName)}
      />

      {/* Teclado centrado */}
      {showPad && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-gray-300 rounded-md shadow-md p-2">
          <div className="grid grid-cols-3 gap-1">
            {numbers.map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => handleClick(num)}
                className="bg-blue-600 text-white text-lg font-semibold py-2 w-10 h-10 rounded-sm flex items-center justify-center hover:bg-blue-700 transition-all"
              >
                {num}
              </button>
            ))}

            {/* Botón borrar */}
            <button
              type="button"
              onClick={handleClear}
              className="bg-red-500 text-white w-10 h-10 rounded-sm flex items-center justify-center hover:bg-red-600 transition-all"
            >
              <X size={18} />
            </button>

            {/* Botón confirmar */}
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-green-600 text-white w-10 h-10 rounded-sm flex items-center justify-center hover:bg-green-700 transition-all"
            >
              <Check size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
