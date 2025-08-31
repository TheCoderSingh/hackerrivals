import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import eslint from 'vite-plugin-eslint';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    eslint({
      emitWarning: true, // emits to the console if there is a warning
      emitError: true, // emits to the console if there is an error
      failOnError: false, // hides the stack trace
    }),
  ],
});
