import { createApp } from 'vue'
import { createPinia } from "pinia"
import ElementPlus from "element-plus"
import router from './router'


import App from './App.vue'
import HospitalTop from './components/HospitalTop.vue';
import HospitalBottom from './components/HospitalBottom.vue';

import '@/style/reset.scss'
import 'element-plus/dist/index.css'

const pinia=createPinia()
const app=createApp(App)

app.component('HospitalTop',HospitalTop)
app.component('HospitalBottom',HospitalBottom)

app.use(router)
app.use(pinia)
app.use(ElementPlus)

app.mount('#app')
