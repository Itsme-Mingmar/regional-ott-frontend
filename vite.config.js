import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBg: "#0F0F1A",
        cardBg: "#1C1C2E",
        accent: "#7C3AED",
        highlight: "#22D3EE",
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
