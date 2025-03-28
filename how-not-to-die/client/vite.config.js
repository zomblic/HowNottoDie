import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3001', 
    },
  },
});

// FRONTEND IS RUNNING ON PORT 5173
// BACKEND IS RUNNING ON PORT 3001