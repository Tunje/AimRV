import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks: undefined,
      },
    },
    // Ensure the images directory is copied to the build output
    assetsInlineLimit: 0,
  },
  publicDir: resolve(__dirname, 'public'),
  // Add a custom configuration to copy the images folder
  experimental: {
    renderBuiltUrl(filename, { hostType }) {
      if (filename.includes('images/')) {
        return '/' + filename;
      }
      return filename;
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})