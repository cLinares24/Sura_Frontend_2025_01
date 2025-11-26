import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.epssura.com",
      },
      {
        protocol: "https",
        hostname: "epssura.com", // 👈 agregado
      },
      {
        protocol: "https",
        hostname: "login.sura.com",
      },
      {
        protocol: "https",
        hostname: "sura.com",
      },
      {
        protocol: "https",
        hostname: "images.falabella.com",
      },
      {
        protocol: "https",
        hostname: "media.falabella.com",
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
      },
      {
        protocol: "https",
        hostname: "www.modernheartandvascular.com",
      },
      {
        protocol: "https",
        hostname: "giovanafemat.com",
      },
      {
        protocol: "https",
        hostname: "urosario.edu.co",
      },
    ],
  },
};

export default nextConfig;
