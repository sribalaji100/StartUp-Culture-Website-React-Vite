import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px", // Updated to match design spec
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#FFC107", // Updated to vibrant yellow
          light: "#FFF2CC",
          dark: "#FFC83D",
        },
        secondary: {
          DEFAULT: "#000000",
          light: "#555555",
        },
        surface: {
          light: "#F9F9F9",
          lighter: "#F5F5F5",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        h1: ["50px", { lineHeight: "1.2", fontWeight: "700" }],
        h2: ["40px", { lineHeight: "1.2", fontWeight: "700" }],
        h3: ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        body: ["18px", { lineHeight: "1.75" }],
      },
      spacing: {
        section: "80px", // Section padding
        container: "40px", // Inner container padding
      },
      borderRadius: {
        DEFAULT: "12px",
      },
      boxShadow: {
        header: "0 2px 8px rgba(0,0,0,0.2)",
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
      },
    },
  },
  plugins: [animate],
} satisfies Config;

export default config;
