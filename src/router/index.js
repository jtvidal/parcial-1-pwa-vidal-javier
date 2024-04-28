import { createRouter, createWebHashHistory } from "vue-router";
import PokeView from "../views/PokeView.vue";
import PokeHistory from '../views/PokeHistory.vue';

const routes = [
  {
    path: "/",
    name: "home",
    component: PokeView,
  },
  {
    path: "/history",
    name: "history",
    component: PokeHistory,
  },
];
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});
export default router;
