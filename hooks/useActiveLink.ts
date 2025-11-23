
"use client";

import { usePathname } from "next/navigation";

export const useActiveLink = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const linkClass = (path: string) =>
    isActive(path)
      ? "text-purple-500 font-semibold"
      : "text-gray-700 hover:text-purple-500";

  return { pathname, isActive, linkClass };
};
