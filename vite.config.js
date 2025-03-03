import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use root path for deployment
  base: '/',
  build: {
    // Output to dist folder
    outDir: 'dist',
    // Place all assets in assets folder
    assetsDir: 'assets',
    // Generate source maps for easier debugging
    sourcemap: true,
    // Ensure proper file types
    rollupOptions: {
      output: {
        // Ensure JS files have proper extensions
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  },
  // Resolve aliases for imports
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})