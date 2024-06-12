const pokeCache = "poke-precache";
const pokePreCache = [
  "/",
  "/src/App.vue",
  "/src/router/index.js",
  "/src/assets/pokeball.png",
  "/src/main.js",
  "/src/main.css",
  "@vite-plugin-pwa/pwa-entry-point-loaded",
  "/src/views/PokeView.vue",
  "/src/views/PokeHistory.vue",
  "/favicon.ico",
  "/@id/__x00__plugin-vue:export-helper",
];

self.addEventListener("install", (ev) => {
  self.skipWaiting();
  ev.waitUntil(
    caches.has(pokeCache).then(async (installed) => {
      if (!installed) {
        console.log("worker was not installed");
        return caches.open(pokeCache).then(async (item) => {
          await item.addAll(pokePreCache);
          console.log("worker installed");
        });
      }
    })
  );
});

self.addEventListener("activate", (ev) => {
  console.log("Poke Worker Activated");
});

self.addEventListener("fetch", (ev) => {
  ev.respondWith(
    caches
      .match(ev.request)
      .then((result) => {
        if (result) {
          console.log("petición en cache: ", ev.request.url);
        }
        return result || fetch(ev.request);
      })
      .catch((error) => {
        console.error("Error petición no encontrada en cache: ", error);
      })
  );
});
