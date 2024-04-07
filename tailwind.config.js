module.exports = {
  content: [
    './src/Pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/componats/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Screen/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        128: '32rem',
        80: '80vh',
        82: '82vh',
        94: '95vh',
        100: '100vh',
        434: '434px',
        30: '30vh',
        40: '40vh',
        35: '35vh',
      },
      width: {
        128: '32rem',
        80: '80vw',
        85: '85vw',
        90: '91vw',
        100: '100vw',
        '100%': '100%',
        68: '68%',
        30: '30%',
        35: '35vw',
        40: '40vw',
        85: '85%',
        '-3': '-3rem',
      },
      colors: {
        primary: '#B5B7B7',
      },
      screens: {
        'x-sm': '375px',
        // => @media (min-width: 576px) { ... }
        sm: '420px',
        'x-md': '520px',
        md: '720px',
        lg: '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
};
