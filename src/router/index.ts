import { createRouter,createWebHistory } from "vue-router";
import Son from '@/components/Son.vue'

export default createRouter({
    history:createWebHistory(),

    routes:[
        {
            path:'/a',
            component:Son
        }
    ]
})