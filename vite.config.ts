import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env': {},
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/main.ts'),
      name: 'HtmlViewer',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      input: ['src/main.ts'],
      output: [
        {
          format: 'es',
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: 'html-viewer.js',
          //配置打包根目录
          dir: 'dist',
        },
        {
          format: 'umd',
          entryFileNames: 'html-viewer.umd.js',
          name: 'HtmlViewer',
          //配置打包根目录
          dir: 'dist',
        },
      ],
    },
  },
});
