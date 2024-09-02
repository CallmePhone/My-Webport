/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryTitle: "#1D2C40",
        primaryContents: "#607EA6",
        primarySubcontents: "#F080F2",
        primaryBase: "#3D5473",
        primaryAccent: "#8BADD9",
        primaryBg: "#BDD9F2",
      },
    },
  },
  plugins: [],
};
