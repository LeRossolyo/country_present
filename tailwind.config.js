/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            backgroundImage: {
                'europe': "url('./src/lib/assets/images/europe.png')",
                'africa': "url('./src/lib/assets/images/africa.png')",
                'asia': "url('./src/lib/assets/images/asia.png')",
                'oceania': "url('./src/lib/assets/images/oceania.png')",
                'america': "url('./src/lib/assets/images/america.png')",
            }
        }
    },
    daisyui: {
        themes: ["business"],
    },
    plugins: [require("daisyui")],
};
