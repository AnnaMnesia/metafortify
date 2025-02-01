import tailwindcssAnimate from "tailwindcss-animate";
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
        error: {
          DEFAULT: "#FF4C4C", // Define the main color
          5: "rgba(255, 76, 76, 0.05)", // Define the opacity variant
        },
        brand: {
          "100": "#363B45",
          DEFAULT: "#363B45",
        },
        red: "#DE3B38",
        green: "#007B5C",
        blue: "#004AAD",
        purple: "#AE90FF",
        orange: "#FF9C06",
        light: {
          "100": "#333F4E",
          "200": "#707581",
          "300": "#EBECEE",
          "400": "#FFFFFF",
        },
        dark: {
          "100": "#1B1B1D",
          "200": "#303032",
          "300": "#8E8F90",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      boxShadow: {
        "drop-1": "0px 10px 30px 0px rgba(54, 59, 53, 0.1)", // Light onyx shadow
        "drop-2": "0 8px 30px 0 rgba(54, 59, 53, 0.3)", // Medium onyx shadow
        "drop-3": "0 1px 3px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": {
            opacity: "1",
          },
          "20%,50%": {
            opacity: "0",
          },
        },
      },
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
