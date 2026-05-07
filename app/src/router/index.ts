import { createRouter, createWebHistory } from "vue-router";

import type { RouteLocationNormalized } from "vue-router";

const Home = () => import("../pages/Home.vue");

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        meta: { title: "Himagin.env｜" },
    },
];

export const router = createRouter({
    history: createWebHistory("/himagin/"),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return { top: 0 };
    },
});
