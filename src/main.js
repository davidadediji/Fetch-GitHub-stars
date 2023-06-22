import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
import AppVue from './App.vue'

createApp(AppVue).use(router).mount('#app')
