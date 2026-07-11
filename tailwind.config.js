/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0f',
        panel: '#12121a',
        accent: '#00e5ff',
        accent2: '#7c3aed',
        muted: '#9ca3af',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Poppins', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        grid: { '0%': { backgroundPosition: '0 0' }, '100%': { backgroundPosition: '40px 40px' } },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        grid: 'grid 20s linear infinite',
      },
    },
  },
  plugins: [],
}
