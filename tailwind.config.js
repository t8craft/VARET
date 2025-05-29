/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "animate-bounce-right",
    "animate-[bounce-right_0.5s_ease-in-out]", // ✅ Ensures animation is never purged
  ],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "bounce-right": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" }, // ✅ You can adjust to 20px if desired
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "bounce-right": "bounce-right 1s ease-in-out", // Optional if using animate-[...]
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

