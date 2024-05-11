import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@stores': path.resolve(__dirname, 'src/stores'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@navigation': path.resolve(__dirname, 'src/navigation'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@products': path.resolve(__dirname, 'src/assets/products'),
    },
  },
  plugins: [react()],
})
