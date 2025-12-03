// app/components/DynamicTitle.tsx
"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function DynamicTitle({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [title, setTitle] = useState("MediciCol");

  useEffect(() => {
    switch (pathname) {
      case "/about":
        setTitle("Acerca de - Medicicol");
        break;
    case "/account":
        setTitle("Cuenta");
        break;
      case "/contact":
        setTitle("Contacto - MediciCol");
        break;
      case "/departaments":
        setTitle("Departamentos - MediciCol");
        break;
      case "/users":
        setTitle("Admin");
        break;
      case "/admin/citas":
        setTitle("Admin");
        break;
      case "/specialities":
        setTitle("Admin");
        break;
      case "/doctors":
        setTitle("Admin");
        break;
    case "/survey":
        setTitle("Admin");
        break;
      default:
        setTitle("MediciCol");
    }
  }, [pathname]);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return <>{children}</>;
}
