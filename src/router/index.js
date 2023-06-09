import { createRouter, createWebHistory } from "vue-router";
import frontPage from "@/views/FrontPage.vue";
import fightPage from "@/views/fightPage.vue";

const routes = [
  {
    path: "/",
    name: "frontPage",
    component: frontPage,
  },
  {
    path: "/fightPage",
    name: "fightPage",
    component: fightPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
