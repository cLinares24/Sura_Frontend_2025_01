"use client";

import { useState } from "react";

export const useColumns = (initial: number = 1) => {
  const [columnas, setColumnas] = useState(initial);

  const cambiarColumnas = (value: number) => {
    if (value < 1) value = 1;
    if (value > 4) value = 4;
    setColumnas(value);
  };

  return {
    columnas,
    setColumnas: cambiarColumnas,
  };
};
