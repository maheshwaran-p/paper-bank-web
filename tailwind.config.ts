import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 0 1px rgba(59,130,246,.2), 0 10px 30px rgba(2,6,23,.08)",
      },
    },
  },
  plugins: [],
} satisfies Config;

