import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/translators/:translatorId',
      name: 'Translator',
      component: () => import('./views/Translator.vue')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('./views/NotFound.vue')
    },
    {
      path: '/500',
      name: '500',
      component: () => import('./views/ServerError.vue')
    }
  ],
})
