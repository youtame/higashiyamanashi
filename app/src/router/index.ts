import { createRouter, createWebHistory } from "vue-router";

import type { RouteLocationNormalized } from "vue-router";

const Home = () => import("../pages/Home.vue");
const Start = () => import("../pages/Start.vue");

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        meta: { title: "Himagin.env" },
    },
    {
        path: "/start",
        name: "start",
        component: Start,
        meta: { title: "Himagin.env | Start" },
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
