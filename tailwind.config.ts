import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geologica', 'sans-serif'],
      },
      colors: {
        blue: { 400: '#60a5fa', 500: '#3b82f6' },
        purple: { 400: '#c084fc', 500: '#a855f7' },
      }
    },
  },
  plugins: [],
};
export default config;