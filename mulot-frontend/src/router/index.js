import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName "Home" */ '../pages/Home.vue'),
    meta: {
      layout: 'MulotLayout'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName "About" */ '@/pages/About.vue'),
    meta: {
      layout: 'MulotLayoutAbout'
    }
  },
  {
    path: '/partenaires',
    name: 'partners',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/pages/PartnersView.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import(/* webpackChunkName "Contacts" */ '@/pages/Contacts.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/utilisateurs',
    name: 'Utilisateurs',
    component: () => import(/* webpackChunkName "Contacts" */ '@/pages/Utilisateurs.vue'),
    meta: {
      layout: 'MulotLayoutUtilisateurs'
    }
  },
  {
    path: '/equipe',
    name: 'equipe',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/pages/Team.vue'),
    meta: {
      layout: 'MulotLayout'
    }
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import(/* webpackChunkName "Articles" */ '@/pages/Articles.vue'),
    meta: {
      layout: 'MulotLayoutArticles'
    },
    //children: [
  //     {
  //       path: '/:id',
  //       name: 'article-detail',
  //       component: () => import(/* webpackChunkName "Article" */ '@/pages/ArticleDetail.vue'),
  //       meta: {
  //         layout: 'MulotLayoutArticleDetail'
  //         }
  // }
//]
},
{
  path: '/mentionslegales',
  name:'mentions-legales',
  component: () => import('@/pages/MentionsLegales.vue'),
},
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName "Login" */ '@/pages/LoginView.vue'),
  },
  {
    path: '/inscription',
    name: 'Inscription',
    component: () => import(/* webpackChunkName "Inscription" */ '@/pages/Inscription.vue'),
  },
  {
    path: '/blog/:id',
    name: 'Blog',
    component: () => import(/* webpackChunkName "Blog" */ '@/pages/Blog.vue'),
    meta: {
      layout: 'MulotLayoutBlog'
    }
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName "Home" */ '@/pages/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router