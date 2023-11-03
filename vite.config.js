import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@com": fileURLToPath(new URL("./src/components", import.meta.url)),
      "@user": fileURLToPath(new URL("./src/views/UserPanel", import.meta.url)),
      "@auth": fileURLToPath(new URL("./src/views/Auth", import.meta.url)),
      "@error": fileURLToPath(new URL("./src/views/Error", import.meta.url)),
      "@admin": fileURLToPath(
        new URL("./src/views/AdminPanel", import.meta.url)
      ),
      "@icons": fileURLToPath(new URL("./src/assets/icons", import.meta.url)),
      "@fonts": fileURLToPath(new URL("./src/assets/fonts", import.meta.url)),
      "@images": fileURLToPath(new URL("./src/assets/images", import.meta.url)),
      "@ui": fileURLToPath(new URL("./src/components/UI", import.meta.url)),
      "@service": fileURLToPath(new URL("./src/service", import.meta.url)),
      "@store": fileURLToPath(new URL("./src/store", import.meta.url)),
    },
  },
});
