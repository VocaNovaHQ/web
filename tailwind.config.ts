import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#EEF4FF",
          100: "#DCE8FF",
          200: "#B6CFFF",
          300: "#7FA8FF",
          400: "#4F87FE",
          500: "#2D6FF5",
          600: "#1F5BDB",
          700: "#1A4AB3",
          900: "#0F2A6B",
        },
        ink: {
          50: "#F8FAFC",
          100: "#F1F3F7",
          200: "#E3E6EC",
          300: "#C2C7D1",
          400: "#9097A4",
          500: "#6B7383",
          600: "#4B5567",
          700: "#2C3547",
          800: "#1A2233",
          900: "#0B1220",
        },
        chip: "#EAF1FE",
        success: "#10B981",
        warn: "#F59E0B",
        danger: "#EF4444",
        primary: "#2D6FF5",
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "22px",
        "2xl": "28px",
        "3xl": "36px",
        pill: "9999px",
      },
      fontFamily: {
        sans: [
          "Pretendard",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        serif: ['"Source Serif 4"', "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,18,32,0.04), 0 8px 24px rgba(11,18,32,0.06)",
        glow: "0 10px 40px -10px rgba(45,111,245,0.45)",
        ring: "0 0 0 1px rgba(45,111,245,0.18), 0 20px 60px -20px rgba(45,111,245,0.35)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse at top, rgba(45,111,245,0.10), transparent 60%)",
        "hero-glow":
          "radial-gradient(60% 60% at 50% 0%, rgba(45,111,245,0.18) 0%, rgba(45,111,245,0) 60%)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        fadeUp: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
