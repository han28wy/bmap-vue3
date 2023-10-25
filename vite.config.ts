import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    AutoImport({  

      imports: ['vue'],

      dts: 'src/auto-import.d.ts',

    })],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      vue: 'vue/dist/vue.esm-bundler.js',
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', 'vue'],
  },
})
