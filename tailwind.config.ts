import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#030504",
        mint: "#1df4bc",
        aqua: "#19a7ff",
        lime: "#a6ff6a",
        ember: "#ff8a2a"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 38px rgba(29, 244, 188, 0.34)"
      }
    }
  },
  plugins: []
};

export default config;
