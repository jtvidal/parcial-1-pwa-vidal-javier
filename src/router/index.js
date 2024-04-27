import { createRouter, createWebHashHistory } from "vue-router";
import PokeView from "../views/PokeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: PokeView,
  },
];
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});
export default router;
