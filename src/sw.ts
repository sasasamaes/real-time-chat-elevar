import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies';

declare const self: ServiceWorkerGlobalScope & typeof globalThis;

// Precachea los recursos. Estos se rellenarán automáticamente por Vite.
precacheAndRoute(self.__WB_MANIFEST);

// Usa la estrategia NetworkFirst para cachear archivos CSS y JavaScript.
registerRoute(
  ({ request }) => request.destination === 'script' || request.destination === 'style',
  new NetworkFirst()
);

// Usa la estrategia StaleWhileRevalidate para cachear imágenes.
registerRoute(
  ({ request }) => request.destination === 'image',
  new StaleWhileRevalidate()
);

// Puedes agregar más rutas y estrategias según las necesidades de tu aplicación.
