/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          black: "#1B1B1B",
          white: "#ffffff",
          darkGrey: "#2E2E2E",
          grey: "#6A6A6A",
          lightGrey: "#D3D3D3",
          gold: "#DAA520",
          lightGold2: "#FFD700",
          goldenRod: "#B8860B",
          lightGold: "#FBE7C6",
          silver: "#DCDCDC",
        }
      }
    },
  },
  plugins: [],
}