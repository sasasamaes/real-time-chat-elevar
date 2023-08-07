import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'Mi Progressive Web App',
        short_name: 'Mi PWA',
        description: 'Una aplicación web progresiva',
        theme_color: '#007bff',
        background_color: '#ffffff',
        start_url: '/',
        display: 'standalone',
        icons: [
          {
            src: '/path/to/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/path/to/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        // ... Opciones de configuración de Workbox ...
      },
    }),
  ],
  build: {
    rollupOptions: {
      // ... Otras opciones de rollup ...
      output: {
        manualChunks: undefined, // Asegúrate de no definir manualChunks
      },
    },
  },
});
