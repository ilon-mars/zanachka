import { createRouter, createWebHistory } from 'vue-router';
import methodsRoutes from './methodsRoutes';
import { getKeyFromPath } from '@/utils/functions';
import { MethodEnum } from '@/enums';

const router = createRouter({
  history: createWebHistory('/zanachka/'),
  routes: [
    {
      path: '/',
      name: 'default',
      component: () => import('@/components/Calculator/StartDescription.vue'),
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

// // for error
// router.beforeEach((to, from, next) => {
//   if (MethodEnum.fixed.includes[to.params.key as string]) {
//     to.meta.key = to.params.key;
//   }

//   next();
// });

export default router;
