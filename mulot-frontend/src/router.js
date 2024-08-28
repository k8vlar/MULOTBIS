import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './components/pages/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),



    routes : [
        {
            path: '/',
            name: 'home',
            component: HomeView
          },
          {
            path: '/about',
            name: 'about',
            component: () => import('./components/pages/AboutView.vue')
          },
          {
            path: '/equipe',
            name: 'equipe',
            component: () => import('./components/pages/TeamView.vue')
          },
          {
            path: '/article/:id',
            name: 'article',
            component: () => import('./components/pages/ArticlesView.vue')
          },
          {
            path: '/login',
            name: 'login',
            component: () => import('./components/pages/LoginView.vue')
          },
          {
            path: '/partners',
            name: 'partners',
            component: () => import('./components/pages/PartnersView.vue')
          },
          {
            path: '/contact',
            name: 'contact',
            component: () => import('./components/pages/ContactView.vue')
          }
    ]
})

export default createRouter({
  history: createWebHistory(),
  router
});