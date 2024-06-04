import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue'
import Blog from './pages/Blog.vue'
import Contacts from './pages/Contacts.vue'
import About from './pages/About.vue'
import PostDetail from './pages/PostDetail.vue'
import Error404 from './pages/Error404.vue'

const router = createRouter({
  history : createWebHistory(),
  routes:[
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/chi-siamo',
      name: 'about',
      component: About
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/contatti',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/dettaglio-post/:slug',
      name: 'postDetail',
      component: PostDetail
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: Error404
    },
  ]
})

export {router};