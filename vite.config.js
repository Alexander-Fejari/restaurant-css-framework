import {dirname, resolve} from "path";
import {fileURLToPath} from 'url'; // Importez la fonction fileURLToPath
import {defineConfig} from 'vite';

const __filename = fileURLToPath(import.meta.url); // Obtenez le nom du fichier en cours
const __dirname = dirname(__filename); // Obtenez le répertoire en cours

const outDir = resolve(__dirname, 'dist');

export default defineConfig({
    base: '/restaurant-css-framework/',
    build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                menu: resolve(__dirname, 'menu.html'),
                about_us: resolve(__dirname, 'restaurants.html'),
                gallery: resolve(__dirname, 'gallery.html'),
                contact: resolve(__dirname, 'contacte.html'),
            }
        }
    }
});