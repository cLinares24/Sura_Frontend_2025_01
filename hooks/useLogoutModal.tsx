"use client";

import { useState } from "react";

export const useLogoutModal = () => {
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  return {
    isLogoutOpen,
    openLogout: () => setIsLogoutOpen(true),
    closeLogout: () => setIsLogoutOpen(false),
    setIsLogoutOpen
  };
};
