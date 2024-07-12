/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      body: "Roboto, sans-serif",
    },
    fontWeight: {
      regular: 400,
      bold: 700,
      extrabold: 900,
    },
    extend: {
      colors: {
        brand: "#1ed760",
        "accent-1": "#5CB270",
        "accent-2": "#0C63E7",
        "black-1": "#1E1E1E",
        "black-2": "#0E0E0E",
        "black-3": "#101010",
        "black-4": "#100c08",
        "button-1": "#3B3939",
        "gray-1": "#E5E4E2",
        "btn-1": "#7D3C98",
        "btn-2": "#800020",
        "btn-3": "#154734",
        "btn-4": "#4169E1",
        "btn-5": "#333333",
        "light-yellow-green": "#DFFF00",
        "light-blue": "#ADD8E6",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        tiny: "0.88rem", // This is the custom font size between text-xs and text-sm
        small: "0.95rem",
        medium: "1.1rem",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
