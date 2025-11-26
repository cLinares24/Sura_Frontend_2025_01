"use client";
import { useState } from "react";

export const useMobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  return {
    isMenuOpen,
    setIsMenuOpen,
    isMobileMenu,
    setIsMobileMenu,
  };
};
