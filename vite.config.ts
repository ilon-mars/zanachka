import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/zanachka/',
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
          @import "@/assets/styles/utils/_functions.sass"
        `,
      },
    },
  },
});
