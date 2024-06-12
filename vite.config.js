import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { VitePWA } from "vite-plugin-pwa";
import postcss from "postcss";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: postcss,
  },
  plugins: [
    vue(),
    vueJsx(),
    //plugin para utilizar sw con vite, deVOptions para poder
    //utilizarlo en modo desarrollo.
    VitePWA({
      injectRegister: null,
      devOptions: {
        enabled: true,
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,vue,png,svg}']
      },
      manifest: false,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
