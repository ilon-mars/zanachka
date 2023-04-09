import type { RouteRecordRaw } from 'vue-router';
import { MethodEnum } from '@/enums';
import { kebabToPascalCase } from '@/utils/functions';

const methodsRoutes: RouteRecordRaw[] = [];

MethodEnum.notFixed.map(method => {
  const component = () => import(`@/components/Calculator/${kebabToPascalCase(method)}Form.vue`);

  const route: RouteRecordRaw = {
    name: method,
    path: `/${method}`,
    component,
    meta: {
      // for anchor scrolling
      scrollable: true,
    },
  };
  methodsRoutes.push(route);
});

export default methodsRoutes;
