import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        state_900: "#1F314F",
        state_500: "#68778D",
        state_300: "#D5E1EF",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
