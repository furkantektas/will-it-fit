import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/will-it-fit/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
