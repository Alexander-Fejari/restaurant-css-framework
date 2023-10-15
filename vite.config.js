// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./src/index.html"),
        contact: resolve(__dirname, "./src/contact.html"),
        gallery: resolve(__dirname, "./src/gallery.html"),
        menu: resolve(__dirname, "./src/menu.html"),
        restaurants: resolve(__dirname, "./src/restaurants.html"),
      },
    },
  },
});
