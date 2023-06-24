import './assets/main.css'
import {createPinia} from 'pinia'


import { createApp } from 'vue'
import router from './router'
import AppVue from './App.vue'
const pinia = createPinia()
const app = createApp(AppVue)
app.use(router)
app.use(pinia)

app.mount('#app')
