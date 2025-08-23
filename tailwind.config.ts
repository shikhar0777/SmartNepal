import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        qsmart: {
          midnight: "#021024",
          "dark-blue": "#052659",
          "medium-blue": "#4A90E2",
          "sky-blue": "#7DA0CA",
          "light-blue": "#C1E8FF",
          // Font colors for gradient backgrounds
          "text-primary": "#FFFFFF",
          "text-light": "#F1F1F1",
          "text-accent": "#E0E0E0",
          "text-highlight": "#E8DAFF",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      backgroundImage: {
        "qsmart-gradient": "linear-gradient(135deg, #C1E8FF 0%, #7DA0CA 25%, #4A90E2 50%, #052659 75%, #021024 100%)",
        "qsmart-gradient-horizontal":
          "linear-gradient(90deg, #C1E8FF 0%, #7DA0CA 25%, #4A90E2 50%, #052659 75%, #021024 100%)",
        "qsmart-gradient-vertical":
          "linear-gradient(180deg, #C1E8FF 0%, #7DA0CA 25%, #4A90E2 50%, #052659 75%, #021024 100%)",
        "qsmart-gradient-radial":
          "radial-gradient(circle, #C1E8FF 0%, #7DA0CA 25%, #4A90E2 50%, #052659 75%, #021024 100%)",
        "qsmart-gradient-light": "linear-gradient(135deg, #C1E8FF 0%, #7DA0CA 50%, #4A90E2 100%)",
        "qsmart-gradient-dark": "linear-gradient(135deg, #4A90E2 0%, #052659 50%, #021024 100%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "gradient-shift": {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        "pulse-slow": {
          "0%, 100%": {
            opacity: "0.3",
          },
          "50%": {
            opacity: "0.8",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient-shift": "gradient-shift 8s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
      },
      textShadow: {
        gradient: "1px 1px 2px rgba(0,0,0,0.5)",
        strong: "2px 2px 4px rgba(0,0,0,0.7)",
        soft: "1px 1px 1px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
