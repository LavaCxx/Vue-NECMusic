import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
    meta: {
      showTab: true,
    },
  },
  {
    path: "/login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/player",
    component: () => import("../views/Player.vue"),
  },

  {
    path: "/songListDetail/:id",
    name: "songListDetail",
    component: () => import("../views/SongList.vue"),
  },
  {
    path: "/result",
    component: () => import("../views/Search/SearchResult.vue"),
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("../views/Account.vue"),
    meta: {
      showTab: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
