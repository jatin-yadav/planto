/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          1: "hsl(97 23% 11% / <alpha-value>)",
          2: "hsl(98 23% 23% / <alpha-value>)",
        },
        accent: {
          1: "hsl(0deg 0% 80% / <alpha-value>)",
          2: "hsl(0deg 0% 65% / <alpha-value>)",
        },
        content: "#ffffff",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "hero-pattern": "url('../public/assets/backgrounds/backgroundimg1.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
