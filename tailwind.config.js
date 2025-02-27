/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6c757d",
        secondary: "#343a40",
        accent: "#495057",
        light: "#f8f9fa",
        dark: "#212529",
      },
    },
  },
  plugins: [],
};
