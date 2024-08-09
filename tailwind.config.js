/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
    },
    animation: {
      scroll: 'scroll 60s linear infinite',
    },
  },

  screens: {
    'xl': {'max': '1279px'},
    // => @media (max-width: 1279px) { ... }

    'lg': {'max': '1023px'},
    // => @media (max-width: 1023px) { ... }

    'md': {'min': '767px'},
    // => @media (max-width: 767px) { ... }

    'sm': {'max': '639px'},
    // => @media (max-width: 639px) { ... }
  }
},
  plugins: [],
}

