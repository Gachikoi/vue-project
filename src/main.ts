import { createApp } from 'vue'
import {createPinia}  from "pinia";

import App from './App.vue'
import HospitalTop from './components/HospitalTop.vue';
import HospitalBottom from './components/HospitalBottom.vue';

import router from './router'

import '@/style/reset.scss'

const pinia=createPinia()
const app=createApp(App)

app.component('HospitalTop',HospitalTop)
app.component('HospitalBottom',HospitalBottom)

app.use(router)
app.use(pinia)

app.mount('#app')
