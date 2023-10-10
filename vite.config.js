import {resolve} from "path";

const root = resolve(dirname, 'src');
const outDir = resolve(dirname, 'dist');

export default {
    base: '/restaurant-css-framework/',
    root,
    build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(root, 'index.html'),
                menu: resolve(root, 'menu', 'menu.html'),
                about_us: resolve(root, 'about_us', 'restaurant.html'),
                gallery: resolve(root, 'gallery', 'gallery.html'),
                contact: resolve(root, 'contact', 'contacte.html'),
            }
        }
    }
}