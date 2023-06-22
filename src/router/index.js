import {createRouter, createWebHistory} from 'vue-router'
import NotePageVue from '../components/NotePage.vue'
import HomeView from '../view/HomeView.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/note/:id',
    name: 'NoteItem',
    component: NotePageVue
  }
]

const router = createRouter({
  history:createWebHistory(),
  routes:routes
})

export default router
