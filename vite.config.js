import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/curso-react-vite-tailwindcss/',
  plugins: [
    react(),
    tailwindcss()
  ]
})
