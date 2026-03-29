import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17171b",
        line: "#e7edf6",
        paper: "#f7faff",
        brand: {
          DEFAULT: "#4c9cff",
          dark: "#2f7df6",
          soft: "#eaf3ff"
        }
      },
      boxShadow: {
        panel: "0 18px 40px rgba(19, 41, 81, 0.08)"
      },
      fontFamily: {
        sans: ["Segoe UI", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
