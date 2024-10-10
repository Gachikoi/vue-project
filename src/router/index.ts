import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/home',
            component: () => import("@/pages/Home.vue")
        },
        {
            path: '/hospital',
            component: () => import("@/pages/Hospital.vue"),
            children: [
                {
                    path: 'registration',
                    component:()=>import('@/pages/Registration.vue')
                },
                {
                    path: 'detail',
                    component:()=>import('@/pages/Detail.vue')
                },
                {
                    path: 'notice',
                    component:()=>import('@/pages/Notice.vue')
                },
                {
                    path: 'closeinfo',
                    component: () => import('@/pages/CloseInfo.vue')
                },
                {
                    path: 'searchandcancel',
                    component:()=>import('@/pages/SearchAndCancel.vue')
                }
            ]
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
