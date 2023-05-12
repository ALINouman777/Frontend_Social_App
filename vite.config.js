import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2015',
    outDir: 'build',
    minify: 'terser',
    emptyOutDir: true,
    sourcemap: true,
    brotliSize: true,
    rollupOptions: {
      external: ['axios'],
    },
  },
});
