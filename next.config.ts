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
    ],
  },
};

export default nextConfig;
