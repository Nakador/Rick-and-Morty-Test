import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { mockApiPlugin } from './mock-api-plugin';

// https://vitejs.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), mockApiPlugin()],
  server: {
    port: 3001,
    host: '127.0.0.1',
  },
  resolve: {
    alias: {
      filesize: path.resolve(dirname, 'node_modules/filesize'),
      '@storybook/global': path.resolve(dirname, 'node_modules/@storybook/global'),
      '@neoconfetti/react': path.resolve(dirname, 'node_modules/@neoconfetti/react'),
      'strip-ansi': path.resolve(dirname, 'node_modules/strip-ansi'),
      'storybook/internal/csf': path.resolve(dirname, 'node_modules/storybook/dist/csf'),
      'storybook/highlight': path.resolve(dirname, 'node_modules/storybook/dist/highlight'),
    },
  },
});
