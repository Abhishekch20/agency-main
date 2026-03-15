/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        inter: ["Manrope", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        syntrix: {
          cyan: "#00f0ff",
          purple: "#8a2be2",
          pink: "#ff007f",
          dark: "#050510",
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 15px rgba(0, 240, 255, 0.5)',
        'glow-purple': '0 0 15px rgba(138, 43, 226, 0.5)',
        'glow-pink': '0 0 15px rgba(255, 0, 127, 0.5)',
      },
      backgroundImage: {
        'cyber-grid': `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                       linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
        'synthwave-gradient': 'linear-gradient(135deg, rgba(138,43,226,0.2) 0%, rgba(0,240,255,0.2) 100%)',
      },
      backgroundSize: {
        'cyber-grid': '40px 40px',
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
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "count-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", filter: "brightness(100%) drop-shadow(0 0 10px rgba(0,240,255,0.7))" },
          "50%": { opacity: "0.8", filter: "brightness(130%) drop-shadow(0 0 20px rgba(0,240,255,1))" },
        },
        "scanline": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.7s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "count-up": "count-up 0.8s ease-out forwards",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "scanline": "scanline 8s linear infinite"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
