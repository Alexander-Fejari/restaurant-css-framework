import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "./src", // [NOTE]: @Alexander, 1. j'ai bougé tout dans src pour que vite puisse trouver les fichiers plus facilement et marqué le `root` comment etant la racine de mon projet
  resolve: {
    gallery: resolve(__dirname, "./src/img/gallery"),
  },
  build: {
    outDir: "../dist",
    rollupOptions: {
      // [NOTE]: @Alexander, apres j'ai dit a vite de regarder dans src pour les fichiers html et de les importer comme des entry points
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

// [NOTE]: pour comprendre comment vite 'buildait" les trucs je
// -- yarn run build -> apres je regardais quoi était produit et quoi pas
// -- yarn run preview -> pour voir si mes fichers dist/ (l'app produit) marchait bien

// Puis je regardé un peu ses docs pour voir comment  me renseigner
// --  SO https://stackoverflow.com/questions/66863200/changing-the-input-and-output-directory-in-vite
// --  https://vitejs.dev/guide/assets.html
// -- https://github.com/vitejs/vite/discussions/12191 (je n'ai pas utiliser @alias parce que pas necessaire, mais je pourrais t'expliquer si tu veux en live )
