import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Si despliegas en GitHub Pages como https://bestoncall.github.io/portafolio/
// cambia base a '/portafolio/'. En Vercel déjalo en '/'.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
