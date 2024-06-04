import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "",
    component: () => import("../views/applyMain.vue"),
  },
  {
    path: "/applyMain",
    name: "applyMain",
    component: () => import("../views/applyMain.vue"),
  },
  {
    path: "/viewDocx",
    name: "viewDocx",
    component: () => import("../components/commons/viewDocx.vue"),
  },
  {
    path: "/viewPdf",
    name: "viewPdf",
    component: () => import("../components/commons/viewPdf.vue"),
  },
  {
    path: "/viewUrl",
    name: "viewUrl",
    component: () => import("../components/commons/viewUrl.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
