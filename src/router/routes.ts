import type { RouteRecordRaw } from 'vue-router';
import { MethodEnum } from '@/enums';
import { kebabToPascalCase } from '@/utils/functions';

const methodsRoutes: RouteRecordRaw[] = [];

MethodEnum.values.map(method => {
  const component = () => import(`@/components/methods/${kebabToPascalCase(method)}Method.vue`);

  const route: RouteRecordRaw = {
    name: method,
    path: `/${method}`,
    component,
    meta: {
      scrollable: true,
    },
  };
  methodsRoutes.push(route);
});

export default methodsRoutes;
