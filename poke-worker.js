const pokeCache = "poke-cache";
const pokePreCache = ["src/assets/pokeball.png"];

self.addEventListener("install", (ev) => {
  self.skipWaiting();
  ev.waitUntil(
    caches.has(pokeCache).then((installed) => {
      if (!installed) {
        console.log("worker was not installed");
        return caches.open(pokeCache).then((item) => {
          console.log("worker installed");
          item.addAll(pokePreCache);
        });
      }
    })
  );
});

self.addEventListener("activate", (ev) => {
  console.log("Poke Worker Activated");
});

// self.addEventListener("fetch", (ev) => {
//   ev.respondWith();
//   caches.has(ev.request);
// });
