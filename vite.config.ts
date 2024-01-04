import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8000,
  },
  resolve: {
    alias: {
      '@': '/src/*',
      // '@lib/': '/src/lib/*',
      // '@components/': '/src/components/*',
    },
  },
})
