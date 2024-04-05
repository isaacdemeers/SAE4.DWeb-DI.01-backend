/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary)/<alpha-value>)",
        light: "hsl(var(--lighten-bg)/<alpha-value>)",
        dark: "hsl(var(--bg)/<alpha-value>)",
        borders: "hsl(var(--borders)/<alpha-value>)",


      },
      textColor: {},
      maxWidth: {
      },
      aspectRatio: {
      },
      backgroundImage: {
      },
      borderRadius: {
      },

    },
  },
  plugins: [],
};

