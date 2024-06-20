import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/components/LoginPage.vue' // Ensure this path is correct
import HomePage from '@/views/HomeView.vue' // Ensure this path is correct

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
