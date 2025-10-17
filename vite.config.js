import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({command}) => ({
  // En dev usa '/', en build usa el subpath de GitHub Pages
  base: command === 'build' ? '/curso-react-vite-tailwindcss/' : '/',
  plugins: [
    react(),
    tailwindcss()
  ]
}))
