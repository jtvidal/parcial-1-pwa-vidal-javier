import "./main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app");

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("poke-worker.js").then((registration) => {
    console.log("poke service worker registered", registration);
  });
}
