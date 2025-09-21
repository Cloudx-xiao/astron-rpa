import tailwindPreset from '@rpa/tokens/tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  presets: [tailwindPreset],
  content: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
