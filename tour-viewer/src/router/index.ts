import { createRouter, createWebHistory } from 'vue-router'
import consts from '@/common/consts'

import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: consts.routes.home.path,
      name: consts.routes.home.name,
      component: HomeView
    },
    {
      path: consts.routes.tour.path,
      name: consts.routes.tour.path,
      props: true,
      component: () => import('../views/Viewer.vue')
    },
  ]
})

export default router
