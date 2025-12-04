import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Shades
        "brand-primary": "#0A4D68",
        "brand-primary-light": "#0F6F9D",
        "brand-primary-dark": "#07354A",

        // Secondary
        "brand-secondary": "#088395",
        "brand-secondary-light": "#0EA7B5",
        "brand-secondary-dark": "#06606D",

        // Neutral scale
        neutral: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },

        // Accent colors
        "accent-green": "#16A34A",
        "accent-yellow": "#EAB308",
        "accent-red": "#DC2626",
      },
    },
  },
  plugins: [],
};

export default config;
