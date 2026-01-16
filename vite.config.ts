import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use '/src/assets/styles/_index.scss' as *;
        `,
      }
    }
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')
    }
  },

  plugins: [
    vue()
  ]
})
