import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "path";
import { fileURLToPath } from "url"
import { dirname } from "path"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],

  resolve: {
    alias: {
      "@Components": path.resolve(__dirname, "src/Components"),
      "@Pages": path.resolve(__dirname, "src/Pages"),
      "@Zustand": path.resolve(__dirname, "src/Zustand"),
      "@Css": path.resolve(__dirname, "src/Css")
    },
  },
})
