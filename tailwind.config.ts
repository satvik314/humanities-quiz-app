import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: "#ff2d95",
          red: "#ff1744",
          crimson: "#e10039",
          ember: "#ff5577",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 12px rgba(255, 23, 68, 0.7), 0 0 32px rgba(255, 45, 149, 0.45)",
        "neon-soft": "0 0 8px rgba(255, 45, 149, 0.5)",
      },
      keyframes: {
        gridPan: {
          "0%": { backgroundPosition: "0px 0px, 0px 0px" },
          "100%": { backgroundPosition: "60px 60px, 60px 60px" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(255, 23, 68, 0.6)" },
          "50%": { boxShadow: "0 0 24px rgba(255, 45, 149, 0.85)" },
        },
      },
      animation: {
        gridPan: "gridPan 8s linear infinite",
        flicker: "flicker 3s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
