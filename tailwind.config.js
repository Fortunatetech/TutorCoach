/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            900: '#0B2545',
            800: '#134163',
          },
          teal: {
            700: '#0A8C7F',
            500: '#0FB5A6',
            400: '#2DC4B6',
            100: '#AEF0E6',
            50: '#E6F9F7',
          },
        },
        accent: {
          coral: {
            600: '#F5674A',
            500: '#FF7A59',
            400: '#FFA07A',
            100: '#FFE5DC',
            50: '#FFF5F2',
          },
          yellow: {
            500: '#FFC857',
            50: '#FFF9E6',
          },
        },
        neutral: {
          900: '#111827',
          800: '#1F2937',
          700: '#374151',
          600: '#78716C',
          500: '#9CA3AF',
          400: '#D1D5DB',
          300: '#E5E7EB',
          200: '#F3F4F6',
          100: '#F7FBFC',
          50: '#FAFAFA',
        },
        semantic: {
          success: '#059669',
          error: '#DC2626',
        },
      },
      boxShadow: {
        'glow-brand': '0 0 20px rgba(15, 181, 166, 0.3)',
        'glow-accent': '0 0 20px rgba(255, 122, 89, 0.4)',
      },
      animation: {
        'scroll': 'scroll 30s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
