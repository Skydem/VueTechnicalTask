import { createRouter, createWebHistory } from "vue-router";
import frontPage from "@/views/FrontPage.vue";
import fightPage from "@/views/FightPage.vue";

const routes = [
  {
    path: "/",
    name: "frontPage",
    component: frontPage,
  },
  {
    path: "/FightPage",
    name: "fightPage",
    component: fightPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
