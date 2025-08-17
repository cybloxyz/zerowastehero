/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        burst: {
          '0%': { transform: 'scale(0)', opacity: 1 },
          '50%': { transform: 'scale(1.5)', opacity: 0.6 },
          '100%': { transform: 'scale(0)', opacity: 0 },
        },
      },
      animation: {
        wiggle: 'wiggle 0.3s ease-in-out infinite',
        burst: 'burst 0.6s forwards',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
