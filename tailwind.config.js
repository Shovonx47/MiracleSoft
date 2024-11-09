import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          '100%': { transform: 'rotate(1turn)' },
        },
        opacityChange: {
          '50%': { opacity: '1' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        rotate: 'rotate 8s linear infinite',
        opacityChange: 'opacityChange 8s infinite alternate',
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(-160deg, #09161c, #173948)',
      },
      spotlight: {
        "0%": { 
          opacity: "0",
          transform: "translate(-72%, -62%) scale(0.5)",
        },
        "100%": {
          opacity: "1",
          transform: "translate(-50%,-40%) scale(1)",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          extend: "light", // <- inherit default values from dark theme
          colors: {
            background: "#ffffff",
            foreground: "#f3f4f6",
            primary: {
              DEFAULT: "#81c45c",
              
            },
            secondary: {
              DEFAULT: "#c288d3"
            },
            focus: "#F182F6",
          },
          layout: {

          },
        },
        dark: {
          extend: "dark", // <- inherit default values from dark theme
          colors: {
            background: '#173948',
            foreground: "#ffffff",
            primary: {
              DEFAULT: "#81c45c",
              
            },
            secondary: {
              DEFAULT: "#c288d3"
            },
            focus: "#F182F6",
          },
          layout: {



          },
        },
      },
    }),
  ],
}
