import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C4794A",
        accent: "#8B6B3D",
        bg: "#FDF6F0",
        surface: "#FFF8F2",
        dark: "#2D1810",
        muted: "#6B5A4E",
        card: "#FFF8F2",
        border: "rgba(45,24,16,0.10)",
        ink: "#2D1810",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
