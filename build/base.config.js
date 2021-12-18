import Markdown from 'vite-plugin-md';
import { defineConfig } from 'vite';
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue';
export default defineConfig({
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        packages: resolve(__dirname, './packages'),
      },
    },
    plugins: [
      vue({ include: [/\.vue$/, /\.md$/] }),
      Markdown(),
    ],
  });
