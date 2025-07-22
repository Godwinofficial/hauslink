import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/', // must match your repo name!
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // mode === 'development' && componentTagger(), // removed
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));