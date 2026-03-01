/** @type {import('tailwindcss').Config} */
module.exports = {
  reactStrictMode: true,
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Cinzel"],
        ftr: ["'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"],
        login: ["National2CondensedBold"],
        sym: ["National2Condensed"],
        lgbtn: ["National2Medium"],
      },
      colors: {
        brand: {
          primary: "#D71A28",
          secondary: "#FFFFFF",
          accent: "#000000",
          lightGray: "#F5F5F5",
          darkGray: "#1D1815",
          lgInp: "#282220",
          inpred: "#FF0000",
          inpnot: "#70120F",
        },
        stone: {
          /* === BASE BRAND COLORS === */
          bg: "#F5F2EA", // paper background
          cream: "#FFF8ED", // lighter background sections
          red: "#D62828", // primary brand
          orange: "#FF7A00", // hover/accent
          yellow: "#FFD23F", // highlight
          dark: "#111111", // main text
          deep: "#1d1815", // dark sections

          /* === TEXT COLORS === */
          text: "#2B2B2B", // body text
          textSoft: "#6B6B6B", // secondary text
          textMuted: "#9CA3AF", // disabled text

          /* === BACKGROUNDS === */
          surface: "#FFFFFF", // cards/dialogs
          surfaceAlt: "#FAF7F2", // soft panels
          overlay: "rgba(0,0,0,0.45)",

          /* === BORDERS === */
          border: "#E5E2DA",
          borderSoft: "#EFECE6",
          borderStrong: "#D6D1C7",

          /* === STATES === */
          success: "#2E7D32",
          warning: "#F59E0B",
          danger: "#DC2626",
          info: "#0284C7",

          /* === BUTTON VARIANTS === */
          btnHover: "#C52222", // darker red hover
          btnActive: "#A61B1B",
          accentHover: "#E66A00",

          /* === FOOD UI EXTRAS === */
          cheese: "#FFE08A", // pizza cheese highlight
          crust: "#C68642", // warm brown accent
          tomato: "#E63946", // sauce tone
        },
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
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
