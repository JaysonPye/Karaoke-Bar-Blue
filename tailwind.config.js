import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      /** brand colours */
      colors: {
        navy:     '#0a0f2c',
        brand:    '#4da3ff',
        neonPink: '#ff5cbf',
      },

      dropShadow: {
        'neon-blue' : '0 0 4px #4da3ff, 0 0 8px #4da3ff',
        'neon-pink' : '0 0 4px #ff5cbf, 0 0 8px #ff5cbf',
      },

      boxShadow: {
        'neon-blue' : '0 0 4px #4da3ff, 0 0 10px #4da3ff',
        'neon-pink' : '0 0 4px #ff5cbf, 0 0 10px #ff5cbf',
      },

      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at top left, #4da3ff 0%, #0a0f2c 60%)',
      },

      fontFamily: {
        heading: ['"Saira Stencil One"', 'sans-serif'],
        body:    ['Inter', '"Noto Sans JP"', 'sans-serif'],
      },
    },
  },

  plugins: [
    plugin(({ addUtilities, theme }) => {
      addUtilities(
        {
          '.text-neon-blue': {
            color: theme('colors.brand'),
            textShadow:
              '0 0 3px #4da3ff, 0 0 8px #4da3ff, 0 0 10px #4da3ff',
          },
          '.text-neon-pink': {
            color: theme('colors.neonPink'),
            textShadow:
              '0 0 3px #ff5cbf, 0 0 8px #ff5cbf, 0 0 10px #ff5cbf',
          },

          '.btn-neon': {
            '@apply px-6 py-3 rounded-full font-semibold transition': {},
            color: theme('colors.navy'),
            backgroundColor: theme('colors.brand'),
            boxShadow:
              '0 0 6px #4da3ff, 0 0 12px #4da3ff',
          },
          '.btn-neon:hover': {
            backgroundColor: theme('colors.neonPink'),
            boxShadow:
              '0 0 6px #ff5cbf, 0 0 12px #ff5cbf',
            color: theme('colors.navy'),
          },
        },
        { variants: ['hover'] },
      );
    }),
  ],
};
