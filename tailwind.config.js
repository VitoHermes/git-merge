/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // 1. Content: Tells Tailwind where to look for used classes to purge unused CSS
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,vue}",
    "./public/index.html",
  ],

  // 2. Dark Mode: Enable 'class' to toggle via JS or 'media' to follow OS
  darkMode: 'class',

  // 3. Theme: The core of your design system customization
  theme: {
    // Custom screens (breakpoints)
    screens: {
      'sm': '386px',
      'xs': '475px',
      'lg': '1024px',
      ...defaultTheme.screens, // Keep existing screens
    },
    // Extend adds to the default theme rather than overwriting it
    extend: {
      colors: {
        brand: {
          light: '#3fbaeb',
          DEFAULT: '#0fa9e6',
          dark: '#0c87b8',
        },
        primary: {
          50: '#f0f9ff',
          500: '#0ea5e9',
          900: '#0c4a6e',
        }
      },
      fontFamily: {
        // Use a custom font with a fallback to sans
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      // Adding custom animation keyframes
      keyframes: {
        wiggle: {
          '0%, 75%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },

  // 4. Plugins: Add specialized functionality
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    // Inline plugin example to add custom utility classes
    function({ addUtilities }) {
      addUtilities({
        '.content-auto': { 'content-visibility': 'auto' },
      })
    },
  ],

  // 5. Future/Experimental: Enable upcoming features
  future: {
    hoverOnlyWhenSupported: false,
  },
}
