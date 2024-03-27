/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--red)/<alpha-value>)",
        secondary: "hsl(var(--gray)/<alpha-value>)",
        dark: "hsl(var(--dark)/<alpha-value>)",

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
    extend: {},
  },
  plugins: [],
};

