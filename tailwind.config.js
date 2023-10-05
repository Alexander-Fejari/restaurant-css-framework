/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.js'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
            },
            keyframes: {
                fadeInTop: {
                    '0%': { opacity: '0', transform: 'translateY(-50px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                fade: 'fadeInTop 1s linear',
            },
        },
    },
    plugins: [require('daisyui')],
};
