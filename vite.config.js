import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves from /<repo>/ — set base so assets resolve.
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
})
