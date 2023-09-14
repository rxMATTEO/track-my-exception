import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  publicDir: './public',
  build: {
    outDir: '../dist',
  },
  plugins: [react()],
  host: {
    port: 1337,
  },
});
