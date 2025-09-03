import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                'slow-fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'shine': {
                    '0%': { backgroundPosition: '-100px' },
                    '80%': { backgroundPosition: '500px' },
                    '100%': { backgroundPosition: '500px' },
                },
            },
            animation: {
                'slow-fade-in': 'slow-fade-in 3s ease-out', // Slow fade-in
                'shine': 'shine 3s linear infinite',
            },
        },
    },
    plugins: [daisyui],
    daisyui: {
        themes: ["light", "dark", "cupcake", "night"],
    },
};