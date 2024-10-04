import { createApp } from 'vue'
import App from './App.vue'
import {createPinia}  from "pinia";
import HospitalTop from './components/HospitalTop.vue';
import HospitalBottom from './components/HospitalBottom.vue';
import '@/style/reset.scss'
// import router from './router'

const app=createApp(App)
app.component('HospitalTop',HospitalTop)
app.component('HospitalBottom',HospitalBottom)
const pinia=createPinia()

// app.use(router)
app.use(pinia)
app.mount('#app')
