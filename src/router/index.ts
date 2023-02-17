import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        default: HomeView,
        menu: () => import("@/components/menus/MainMenu.vue"),
        header: () => import("@/components/headers/MainHeader.vue"),
      },
      meta: {
        layout: "MainLayout",
      },
    },
    {
      path: "/about",
      name: "about",

      components: {
        default: import("../views/AboutView.vue"),
        menu: () => import("@/components/menus/MainMenu.vue"),
        header: () => import("@/components/headers/MainHeader.vue"),
      },
      meta: {
        layout: "FullLayout",
      },
    },
  ],
});

export default router;
