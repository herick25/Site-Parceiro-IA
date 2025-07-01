module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        menta: '#3a7f5c',        // Verde Menta mais escuro
        escuro: '#1f2f2b',       // Verde Escuro (secundária)
        gelo: '#f5f5f5',         // Cinza Gelo (fundo)
      },
    },
  },
  plugins: [],
}
