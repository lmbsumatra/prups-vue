import { createWebHistory, createRouter, type RouteRecordRaw } from "vue-router"
// import { defineAsyncComponent } from "vue"

// defineAsyncComponent -> lazy loading
// const Home = defineAsyncComponent(() => import("../views/Home.vue"))
// const Guide = defineAsyncComponent(() => import("../views/Guide.vue"))

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"), // lazy load
  },
  {
    path: "/:id",
    name: "Guide",
    component: () => import("../views/Guide.vue"), // lazy load
    props: true, // pass route.params as props
  },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})