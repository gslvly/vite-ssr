import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
const router = createRouter({
  history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
  routes: [
    {
      path: '/:path(.*$)',
      redirect: '/home',
    },
    {
      path: '/home',
      component: () => import('./views/home.vue'),
    },
    {
      path: '/about',
      component: () => import('./views/about.vue'),
    },
  ],
})

export { router }
