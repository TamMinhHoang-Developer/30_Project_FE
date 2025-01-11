import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    fontSize: {
      text_preset_1: "22px",
      text_preset_2: "15px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        state_900: "#1F314F",
        state_500: "#68778D",
        state_300: "#D5E1EF",
        white: "#FFFFFF",
      },
      spacing: {
        500: "40px",
        300: "24px",
        200: "16px",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
} satisfies Config;
