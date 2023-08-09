import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
  /*
    VitePWA({
         add this to cache all the imports
         workbox: {
          globPatterns: ["** /*"],
        },
       add this to cache all the
        static assets in the public folder
        includeAssets: [
            "** /*",
        ],
        manifest: {
          name: 'Elevar Test',
          short_name: 'ElevarChat',
          description: 'Una aplicación web progresiva de real time chat',
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
       
      }),
  
  */
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
