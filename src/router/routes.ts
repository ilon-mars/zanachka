import type { RouteRecordRaw } from 'vue-router';
import { MethodEnum } from '@/enums';
import { kebabToPascalCase } from '@/utils/functions';

const methodsRoutes: RouteRecordRaw[] = [];

MethodEnum.values.map(method => {
  const component = () => import(`@/components/Calculator/${kebabToPascalCase(method)}Form.vue`);

  const route: RouteRecordRaw = {
    name: method,
    path: `/${method}`,
    component,
    // for anchor scrolling
    meta: {
      scrollable: true,
    },
  };
  methodsRoutes.push(route);
});

export default methodsRoutes;
