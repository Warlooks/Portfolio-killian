// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite"; // ← ajoute cette ligne

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ← ajoute cette ligne
  ],
});
