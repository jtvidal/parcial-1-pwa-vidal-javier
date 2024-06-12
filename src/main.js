import './main.css';
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app");

if ("serviceWorker" in navigator) {
  window.addEventListener("load", (e) => {
    navigator.serviceWorker
      .register("poke-worker.js")
      .then((registration) => {
        console.log("Poke Service Worker registered", registration);
      })
      .catch((error) => {
        console.error("Error in service worker registration: ", error);
      });
  });
}
