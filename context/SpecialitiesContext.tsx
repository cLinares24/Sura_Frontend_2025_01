"use client";

import { createContext, useState, ReactNode } from "react";

interface SpecialitiesContextProps {
  formAbierto: number | null;
  listaAbierta: number | null;
  abrirFormulario: (id: number) => void;
  abrirLista: (id: number) => void;
  cerrarTodo: () => void;
}

export const SpecialitiesContext = createContext<SpecialitiesContextProps>({
  formAbierto: null,
  listaAbierta: null,
  abrirFormulario: () => {},
  abrirLista: () => {},
  cerrarTodo: () => {},
});

export function SpecialitiesProvider({ children }: { children: ReactNode }) {
  const [formAbierto, setFormAbierto] = useState<number | null>(null);
  const [listaAbierta, setListaAbierta] = useState<number | null>(null);

  const abrirFormulario = (id: number) => {
    setListaAbierta(null);
    setFormAbierto(prev => (prev === id ? null : id));
  };

  const abrirLista = (id: number) => {
    setFormAbierto(null);
    setListaAbierta(prev => (prev === id ? null : id));
  };

  const cerrarTodo = () => {
    setFormAbierto(null);
    setListaAbierta(null);
  };

  return (
    <SpecialitiesContext.Provider
      value={{
        formAbierto,
        listaAbierta,
        abrirFormulario,
        abrirLista,
        cerrarTodo,
      }}
    >
      {children}
    </SpecialitiesContext.Provider>
  );
}
