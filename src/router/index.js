import Vue from 'vue'
import VueRouter from 'vue-router'
import SelectBudget from '../views/SelectBudget.vue'

Vue.use(VueRouter)

const scrollBehavior = function (to) {
  if (to.hash) {
    return {
      selector: to.hash,
      behavior: 'smooth'
    }
  }
}

const routes = [
  {
    path: '/',
    component: SelectBudget
  },
  {
    path: '/envelopes',
    component: () => import(/* webpackChunkName: "envelopes" */ '../views/EnvelopesBudget.vue')
  },
  {
    path: '/jars',
    component: () => import(/* webpackChunkName: "jars" */ '../views/JarsBudget.vue')
  },
  {
    path: '/microsoft',
    component: () => import(/* webpackChunkName: "microsoft" */ '../views/MicrosoftBudget.vue')
  },
  {
    path: '/4-envelopes',
    component: () => import(/* webpackChunkName: "4-envelopes" */ '../views/4EnvelopesBudget.vue')
  },
  {
    path: '/50-30-20',
    component: () => import(/* webpackChunkName: "50-30-20" */ '../views/503020Budget.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior,
  base: process.env.BASE_URL,
  routes
})

export default router
