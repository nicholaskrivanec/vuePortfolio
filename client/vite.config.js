import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const isDev = process.env.VITE_DEV === 'true';

export default defineConfig({
  base: './', // Use relative paths for assets
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: isDev ? {
        host: '0.0.0.0',
        port: 3000,
        strictPort: true,
        hmr: {
          timeout: 10000
        }
      } : undefined,
  build: {
    outDir: isDev ? 'dist-dev' : '../dist' // Separate output for local builds

  },
  watch: {
    ignored: ['**/.npm/**', '**/node_modules/**']
  }
});

