import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@constants": path.resolve(__dirname, "./src/constants/"),
      "@components": path.resolve(__dirname, "./src/components/"),
    },
  },
  plugins: [react()],
});
