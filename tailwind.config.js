/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EFF6FF', 100: '#DBEAFE', 200: '#BFDBFE', 300: '#93C5FD',
          400: '#60A5FA', 500: '#3B82F6', 600: '#2563EB', 700: '#1D4ED8',
          800: '#1E40AF', 900: '#1E3A8A', 950: '#172554'
        },
        secondary: {
          50: '#F0F9FF', 100: '#E0F2FE', 200: '#BAE6FD', 300: '#7DD3FC',
          400: '#38BDF8', 500: '#0EA5E9', 600: '#0284C7', 700: '#0369A1',
          800: '#075985', 900: '#0C4A6E', 950: '#082F49'
        },
        ink: '#111827',
        slate: '#475569',
        muted: '#64748B',
        canvas: '#EAF8FF',
        surface: '#FFFFFF',
        soft: '#F8FAFC',
        wash: '#F1F5F9',
        line: '#E2E8F0',
        strongline: '#CBD5E1',
        night: '#030303',
        success: '#22C55E',
        danger: '#EF4444',
        gold: '#FACC15',
        orange: '#F97316'
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 6px 20px rgba(15, 23, 42, 0.07)',
        float: '0 10px 28px rgba(8, 47, 73, 0.16)'
      },
      maxWidth: { '8xl': '1200px' }
    }
  },
  plugins: []
}
