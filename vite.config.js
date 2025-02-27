import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/AimRV/', // Ensure this matches your GitHub repository name
  build: {
    rollupOptions: {
      input: 'src/main.jsx', // Entry point is `main.jsx`
    },
  },
});