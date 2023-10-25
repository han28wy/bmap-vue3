import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
      path: '/map',
      name: 'map',
      component: () => import('../components/map/index.vue'),
    },
  ]

  const router = createRouter({
    history: createWebHistory('/'),
    routes,
  })
  
  export default router