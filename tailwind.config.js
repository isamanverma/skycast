/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-black": "#0F1015",
        "custom-yellow": "#FFBB88",
        "custom-violet": "#8161A7",
        "custom-glassmorphic": "#1B1D26",
        "custom-glassmorphic-dark": "#2a2c3b",
      }
    }
  },
  plugins: [],
}

