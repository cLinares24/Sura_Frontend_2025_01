// app/layout.tsx
import "./globals.css";
import ConditionalHeader from "@/components/ConditionalHeader";
import { SpecialitiesProvider } from "@/context/SpecialitiesContext";
import { AuthProvider } from "@/context/AuthContext";
import DynamicTitle from "@/components/DynamicTitle";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ConditionalHeader />
          <SpecialitiesProvider>
            <DynamicTitle>
              {children}
            </DynamicTitle>
          </SpecialitiesProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
