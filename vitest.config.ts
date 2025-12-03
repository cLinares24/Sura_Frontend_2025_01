import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "app"), // <-- tu proyecto usa "app" NO "src"
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./setupTests.ts",
    alias: {
      "@": path.resolve(__dirname, "app"), // <-- Vitest también lo necesita aquí
    },
  },
});
