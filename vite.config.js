import Markdown from 'vite-plugin-md';
import { defineConfig, searchForWorkspaceRoot, loadEnv } from 'vite';
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue';
import html from 'vite-plugin-html';

export default ({ command, mode }) => {
  const modes = process.env.VITE_ENV ?? mode;
  const env = loadEnv(`${modes}`, process.cwd());
  return defineConfig({
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        packages: resolve(__dirname, './packages'),
      },
    },
    plugins: [
      vue({ include: [/\.vue$/, /\.md$/] }),
      Markdown(),
      html({
        minify: false,
        inject: {
          // Inject data into ejs template
          // 在html中使用<%= title %> 来渲染
          data: {
            title: env.VITE_GLOB_APP_TITLE,
          }
        },
      })
    ],
    build: {
      target: 'esnext',
      outDir: 'docs',
      brotliSize: false,
      chunkSizeWarningLimit: 2000,

    },
    logLevel: 'info',
    // 解决路径权限报错：is outside of Vite serving allow list
    server: {
      fs: {
        allow: [
          searchForWorkspaceRoot(process.cwd()),
          '/path/to/custom/allow'
        ]
      }
    }
  });
}

