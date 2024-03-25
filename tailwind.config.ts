import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        Suisse: ["Suisse"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brand_gray: {
          100: "#F3F4F6",
          400: "#9ca3af",
          500: "#6b7280",
          700: "#374151",
          900: "#001827",
        },
        brand_blue: {
          500: "#3B82F6",
          600: "#01011d",
        },
        brand_pink: {
          400: "#f472b6",
        },
        brand_red: {
          800: "#991b1b",
        },
        brand_green: {
          200: "#bbf7d0",
          600: "#16a34a",
        },
      },
    },
  },
  plugins: [],
};
export default config;
