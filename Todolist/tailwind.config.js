/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#1E3A8A',   // Azul oscuro
        black: '#000000',       // Negro puro
        neonBlue: '#3B82F6',    // Azul neón para contrastes
        darkGray: '#1F2937',    // Gris oscuro para fondos secundarios
        lightGray: '#D1D5DB',   // Gris claro para bordes y textos secundarios
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],  // Fuente moderna y llamativa
      },
    },
  },
  plugins: [],
}
