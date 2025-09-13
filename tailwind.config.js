// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],   // padrão do corpo
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],     // se quiser usar em outras partes
      },
      colors: {
        menta: "#3a7f5c",   // Verde Menta
        escuro: "#1f2f2b",  // Verde Escuro
        gelo: "#f5f5f5",    // Cinza Gelo
      },
    },
  },
  plugins: [],
}
