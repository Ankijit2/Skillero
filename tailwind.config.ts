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
  			primary: '#14248a',
  			secondary: '#28262c',
  			accent: '#998fc7',
  			background: '#f9f5ff',
  			foreground: '#14248a',
  			card: '#998fc7',
  			cardForeground: '#28262c',
  			border: '#998fc7',
  			success: '#43be31',
  			danger: '#e53e3e',
  			warning: '#ffae1a',
  			info: '#0ea5e9'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  darkMode: ["class", "class"],
  plugins: [nextui(), require("tailwindcss-animate")]
};
export default config;
