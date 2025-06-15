module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        menta: '#58b179',        // Verde Menta (primária)
        escuro: '#1f2f2b',       // Verde Escuro (secundária)
        gelo: '#f5f5f5',         // Cinza Gelo (fundo)
      },
    },
  },
  plugins: [],
}
