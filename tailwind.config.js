module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#667eea", // blue-indigo-500
          50: "#eef2ff", // indigo-50
          100: "#e0e7ff", // indigo-100
          200: "#c7d2fe", // indigo-200
          300: "#a5b4fc", // indigo-300
          400: "#818cf8", // indigo-400
          500: "#667eea", // indigo-500
          600: "#4f46e5", // indigo-600
          700: "#4338ca", // indigo-700
          800: "#3730a3", // indigo-800
          900: "#312e81", // indigo-900
        },
        secondary: {
          DEFAULT: "#764ba2", // purple-600
          50: "#faf5ff", // purple-50
          100: "#f3e8ff", // purple-100
          200: "#e9d5ff", // purple-200
          300: "#d8b4fe", // purple-300
          400: "#c084fc", // purple-400
          500: "#a855f7", // purple-500
          600: "#764ba2", // purple-600
          700: "#7c3aed", // purple-700
          800: "#6b21a8", // purple-800
          900: "#581c87", // purple-900
        },
        accent: {
          DEFAULT: "#a855f7", // purple-500
          50: "#faf5ff", // purple-50
          100: "#f3e8ff", // purple-100
          200: "#e9d5ff", // purple-200
          300: "#d8b4fe", // purple-300
          400: "#c084fc", // purple-400
          500: "#a855f7", // purple-500
          600: "#9333ea", // purple-600
          700: "#7c3aed", // purple-700
          800: "#6b21a8", // purple-800
          900: "#581c87", // purple-900
        },
        background: "#0f0f0f", // gray-950
        surface: {
          DEFAULT: "#1a1a1a", // gray-900
          light: "#262626", // gray-800
        },
        text: {
          primary: "#ffffff", // white
          secondary: "#a1a1aa", // gray-400
          muted: "#71717a", // gray-500
        },
        success: {
          DEFAULT: "#10b981", // emerald-500
          50: "#ecfdf5", // emerald-50
          100: "#d1fae5", // emerald-100
          500: "#10b981", // emerald-500
          600: "#059669", // emerald-600
          700: "#047857", // emerald-700
        },
        warning: {
          DEFAULT: "#f59e0b", // amber-500
          50: "#fffbeb", // amber-50
          100: "#fef3c7", // amber-100
          500: "#f59e0b", // amber-500
          600: "#d97706", // amber-600
          700: "#b45309", // amber-700
        },
        error: {
          DEFAULT: "#ef4444", // red-500
          50: "#fef2f2", // red-50
          100: "#fee2e2", // red-100
          500: "#ef4444", // red-500
          600: "#dc2626", // red-600
          700: "#b91c1c", // red-700
        },
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.1)", // white-10
          light: "rgba(255, 255, 255, 0.2)", // white-20
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      backdropBlur: {
        'xs': '2px',
        '3xl': '64px',
      },
      animation: {
        'shimmer': 'shimmer 1.5s infinite',
        'fade-in': 'fadeIn 0.2s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200px 0' },
          '100%': { backgroundPosition: 'calc(200px + 100%) 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
        'modal': '0 10px 15px -3px rgba(0, 0, 0, 0.4)',
        'glow': '0 0 20px rgba(168, 85, 247, 0.3)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}