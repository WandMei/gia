import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc';
import compression from 'vite-plugin-compression2';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    compression({ algorithms: ['brotliCompress'] })
  ],
  esbuild: {
    drop: ['console', 'debugger'], // Mantém a remoção de logs para deixar mais rápido
  },
  build: {
    rollupOptions: {
      output: {
        // Deixamos o Vite nomear e fatiar os arquivos automaticamente
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      }
    },
    cssCodeSplit: true,
  },
});