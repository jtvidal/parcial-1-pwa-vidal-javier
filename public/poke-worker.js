const pokeCache = "poke-precache";
const pokePreCache = [
  "/",
  "/src/App.vue",
  "/src/router/index.js",
  "/src/assets/pokeball.png",
  "/src/main.js",
  "/src/main.css",
  "/src/views/PokeView.vue",
  "/src/views/PokeHistory.vue",
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
        //if request is in cache and has a result:
        if (result) {
          console.log("url fetched from cache: ", ev.request.url);
          return result;
        }
        //if request isn't in cache:
        return fetch(ev.request).then((response) => {
          //if response is not valid
          if (
            !response ||
            response.status !== 200 ||
            response.type !== "basic"
          ) {
            return response;
          }
          //if response is valid
          const evResponse = response.clone();
          caches.open(pokeCache).then((cache) => {
            cache.put(ev.request, evResponse);
          });
          return response;
        });
      })
      .catch((error) => {
        console.error("no matches for request: ", error);
      })
  );
});
