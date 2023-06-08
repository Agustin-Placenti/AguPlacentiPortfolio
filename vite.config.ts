import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'services': '/src/services',
      'utils': '/src/utils',
      'components': '/src/components',
      'store': '/src/store'
    },
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['js-big-decimal']
  }
})
