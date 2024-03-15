/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#D6E9F0",
        "nav-footer": "#071A45",
      },
    },
  },
  plugins: [],
};
