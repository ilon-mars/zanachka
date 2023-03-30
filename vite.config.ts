import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const options = {
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
          @import "@/assets/styles/utils/_vars.sass"
          @import "@/assets/styles/utils/_mixins.sass"
        `,
      },
    },
  },
}

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    base: command === 'build' ? '/zanachka/' : '',
    ...options,
  }
})
