import { createRouter, createWebHistory } from 'vue-router';
import methodsRoutes from './methodsRoutes';
import StartDescription from '@/components/Calculator/StartDescription.vue';
import { getKeyFromPath } from '@/utils/functions';

const router = createRouter({
  // base for github
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'default',
      component: StartDescription,
    },
    {
      path: '/fixed/:key',
      name: 'fixed',
      component: () => import('@/components/Calculator/FixedPercentForm.vue'),
      meta: {
        // for anchor scrolling
        scrollable: true,
      },
      alias: ['/:key'],
    },
    ...methodsRoutes,
  ],

  scrollBehavior(to, from, savedPosition) {
    if (to.meta.scrollable) {
      return {
        el: `#${getKeyFromPath(to.path)}`,
        behavior: 'smooth',
      };
    } else {
      return savedPosition || { left: 0, top: 0 };
    }
  },
});

export default router;
