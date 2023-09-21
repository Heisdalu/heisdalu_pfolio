import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: {
      0.5: "0.5rem",
      1: "1rem",
      1.5: "1.5rem",
      2: "2rem",
      64: "4rem",
      96: "6rem",
      80: "5rem",
    },
    screens: {
      md: "768px",
      lg: "1000px",
    },

    extend: {
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        1: "#000",
      },
      backgroundColor: {
        spb: "#0A0A09",
        otherBlack: "#0a0a09d9",
        white: "#fff",
        yellow: "#F4FA94",
      },
      colors: {
        yellow: "#F4FA94",
        lineBlack: "#ffffff1f",
      },
    },
  },
  plugins: [],
};
export default config;
