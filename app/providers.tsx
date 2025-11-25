'use client';

import { AuthProvider } from "@/context/AuthContext";
import { SpecialitiesProvider } from "@/context/SpecialitiesContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <SpecialitiesProvider>
        {children}
      </SpecialitiesProvider>
    </AuthProvider>
  );
}
