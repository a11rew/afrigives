module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "767px",
      },
      animation: {
        slideIn: "slideFromBottom 0.5s linear",
      },
      animationFillMode: {
        default: "none",
        none: "none",
        forwards: "forwards",
        backwards: "backwards",
        both: "both",
      },
      keyframes: {
        slideFromBottom: {
          to: {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwindcss-animation-delay"),
    require("tailwindcss-animate"),
  ],
};
