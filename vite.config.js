import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  base: '/cilab-ufersa.github.io/',
  build: {
    outDir: 'dist',
  }
})
