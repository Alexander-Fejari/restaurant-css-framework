import {resolve} from "path";
import {defineConfig} from "vite";

export default defineConfig({
    root: "./src", resolve: {
        gallery: resolve(__dirname, "./src/img/gallery"),
        /*        js: resolve(__dirname, './src/js/main.js'),
                css: resolve(__dirname, './src/css/main.css')*/
    }, build: {
        outDir: "../dist", rollupOptions: {
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
