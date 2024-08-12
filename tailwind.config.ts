/** @format */

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        mono: ["Roboto_Mono"],
      },
      screens: {
        xl: "640px",
        "3xl": "1920px",
      },
      colors: {
        dark: "#181C22",
        light: "F5F5F5",
        highlight: "87898C",
        mild: "FFD8C4",
        wild: "FFA87D",
        couples: "EE7485",
        bro: "8FB2F6",
        self: "A5E1C8",
      },
    },
  },
  plugins: [],
} satisfies Config;
export default config;
