/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Aquí puedes extender el tema de Tailwind con tus propios estilos, colores, tipografías, etc.
      colors: {
        primary: '#1E40AF',
        secondary: '#E11D48',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
