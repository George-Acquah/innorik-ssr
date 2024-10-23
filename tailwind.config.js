/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#000319",
          200: "rgba(17, 25, 40, 0.75)",
          300: "rgba(255, 255, 255, 0.125)",
        },
        white: {
          DEFAULT: "#FFF",
          100: "#BEC1DD",
          200: "#C1C2D3",
        },
        primary: {
          DEFAULT: "hsl(210, 25%, 20%)", // Light mode primary color
          foreground: "hsl(220, 20%, 98%)", // Light mode foreground color
          dark: "hsl(0, 0%, 88%)", // Dark mode primary color (equivalent to neutral 200)
          darkForeground: "hsl(220, 20%, 15%)", // Dark mode foreground color
        },
        secondary: {
          DEFAULT: "hsl(150,60%,45%)", // Light mode secondary color
          foreground: "hsl(150, 90%, 98%)", // Light mode secondary foreground color
          dark: "hsl(150,60%,55%)", // Dark mode secondary color
          darkForeground: "hsl(150, 90%, 20%)", // Dark mode secondary foreground color
        },
        destructive: {
          DEFAULT: "hsl(0, 70%, 60%)", // Light mode destructive color (Red 500 equivalent)
          foreground: "hsl(0, 0%, 10%)", // Light mode destructive foreground (Dark Gray)
          dark: "hsl(0, 50%, 50%)", // Dark mode destructive color (Red 600 equivalent)
          darkForeground: "hsl(0, 0%, 90%)", // Dark mode destructive foreground (Light Gray)
        },
        muted: {
          DEFAULT: "hsl(210, 15%, 80%)", // Light mode muted color (Gray 300 equivalent)
          foreground: "hsl(210, 10%, 20%)", // Light mode muted foreground (Dark Gray)
          dark: "hsl(210, 15%, 30%)", // Dark mode muted color (Gray 700 equivalent)
          darkForeground: "hsl(210, 5%, 90%)", // Dark mode muted foreground (Light Gray)
        },
        accent: {
          DEFAULT: "hsl(45,100%,55%)", // Light mode accent color
          foreground: "hsl(45, 100%, 55%)", // Light mode accent foreground
          dark: "hsl(45, 100%, 45%)", // Dark mode accent color
          darkForeground: "hsl(45, 100%, 90%)", // Dark mode accent foreground
        },
        warning: {
          DEFAULT: "hsl(30,70%,50%)", // Light mode accent color
          foreground: "hsl(45, 100%, 55%)", // Light mode accent foreground
          dark: "hsl(30,70%,60%)", // Dark mode accent color
          darkForeground: "hsl(45, 100%, 90%)", // Dark mode accent foreground
        },
        outline: {
          DEFAULT: "hsl(210,10%,85%)", // Light mode outline color
          foreground: "hsl(210, 25%, 20%)", // Light mode outline foreground
          dark: "hsl(210, 10%, 40%)", // Dark mode outline color
          darkForeground: "hsl(210, 25%, 90%)", // Dark mode outline foreground
        },
        card: {
          DEFAULT: "hsl(--card)",
          foreground: "hsl(--card-foreground)",
        },
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
    },
  },
  plugins: [],
};
