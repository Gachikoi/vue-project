import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/home',
            component: () => import("@/pages/Home.vue")
        },
        {
            path: '/hosptial',
            component: () => import("@/pages/Hosptial.vue")
        },
        {
            path:'/',
            redirect:'/home'
        }
    ],

    scrollBehavior(){
        return {
            left:0,
            right:0
        }
    }
})
