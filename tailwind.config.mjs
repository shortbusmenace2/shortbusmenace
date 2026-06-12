/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Courier Prime"', '"Courier New"', 'Courier', 'monospace'],
      },
      colors: {
        bg:       '#131313',
        text:     '#b0ac9f',
        mid:      '#666',
        dim:      '#3a3a3a',
        faint:    '#252525',
        border:   '#222',
      },
      maxWidth: {
        page: '720px',
      },
    },
  },
  plugins: [],
};
