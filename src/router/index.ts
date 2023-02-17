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
    {
      path: "/product",
      name: "product",

      components: {
        default: import("../views/products/ProductView.vue"),
        menu: () => import("@/components/menus/MainMenu.vue"),
        header: () => import("@/components/headers/MainHeader.vue"),
      },
      meta: {
        layout: "MainLayout",
      },
    },
  ],
});

export default router;
