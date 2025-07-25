import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
// import tailwindcss from 'tailwindcss/vite'; // Removed, not needed
import path from 'path'; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    '@components':path.resolve(__dirname, './src/components'),
  '@pages': path.resolve(__dirname, './src/pages'),},
  },
  server: {
    port: 3000,
    open: true, // Abre el navegador automáticamente
  },
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'src/main.tsx'), // Fuerza a usar main.jsx como entrada
    },
  },
});