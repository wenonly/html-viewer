import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, '../'),
  plugins: [vue()],
  server: {
    middlewareMode: 'html',
  },
});
