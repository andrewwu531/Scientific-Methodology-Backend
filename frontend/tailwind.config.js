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
        "button-1": "#3B3939",
        "gray-1": "#E5E4E2",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        tiny: "0.87rem", // This is the custom font size between text-xs and text-sm
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".scrollbar-thin": {
            "::-webkit-scrollbar": {
              width: "4px",
            },
            "::-webkit-scrollbar-thumb": {
              "background-color": "#888",
              "border-radius": "4px",
            },
            "::-webkit-scrollbar-thumb:hover": {
              "background-color": "#555",
            },
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
