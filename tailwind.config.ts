import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          100: "#F4F6F9",
          200: "#D6DEEA",
          300: "#B6C9E1",
          400: "#95B4DD",
          500: "#71A1E0",
          600: "#478EEB",
          700: "#177BFF",
          800: "#196FE1",
          900: "#2967B9",
          910: "#315E99",
          920: "#365681",
          930: "#374E6D",
          940: "#37475D",
        },
        dark: {
          100: "#435873",
          200: "#38506E",
          300: "#2D486A",
          400: "#214068",
          500: "#163966",
          600: "#0B3366",
          700: "#002D67",
          800: "#092A53",
          900: "#0F2644",
          910: "#122339",
          920: "#142030",
          930: "#141D28",
          940: "#141A23",
        },
      },
      fontFamily: {
        lobster: ["Lobster", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        patrick: ["PatrickHand", "sans-serif"],
        writer: ["WriterMonoS", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
