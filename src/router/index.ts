import { createRouter, createWebHistory } from 'vue-router';
import methodsRoutes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'default',
      component: () => import('@/components/EmptyComponent.vue'),
    },
    ...methodsRoutes,
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.meta.scrollable) {
      return {
        el: `#${String(to.name)}`,
        behavior: 'smooth',
      };
    } else {
      return savedPosition || { left: 0, top: 0 };
    }
  },
});

export default router;
