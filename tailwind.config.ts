import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#14248a", // Replace with your primary color from palette
      secondary: "#28262c", // Replace with your secondary color
      accent: "#998fc7", // Accent color from your palette
      background: "#f9f5ff", // Background color from your palette
      foreground: "#14248a", // Foreground color from your palette
      card: "#998fc7", // Card background color
      cardForeground: "#28262c", // Card foreground color
      border: "#998fc7", // Border color from your palette
      success: "#43be31", // Example success color, you can choose from palette
      danger: "#e53e3e", // Example danger color, modify as needed
      warning: "#ffae1a", // Example warning color
      info: "#0ea5e9",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};
export default config;
