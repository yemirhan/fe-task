const colors = require('tailwindcss/colors')


module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                lightBlue: colors.lightBlue
            },
            fontFamily: {
                'body': ['Robota Regular', 'Helvetica', 'sans-serif'],
                'sans': ['Exo-Bold', 'Helvetica', 'sans-serif']
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
}