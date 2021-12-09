import Vue from 'vue'
import VueRouter from 'vue-router'

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
    path: '/envelopes',
    name: 'CalculateBudget',
    component: () => import(/* webpackChunkName: "envelopes" */ '../views/EnvelopesBudget.vue')
  },
  {
    path: '/jars',
    name: 'CalculateBudget',
    component: () => import(/* webpackChunkName: "jars" */ '../views/JarsBudget.vue')
  },
  {
    path: '/microsoft',
    name: 'CalculateBudget',
    component: () => import(/* webpackChunkName: "microsoft" */ '../views/MicrosoftBudget.vue')
  },
  {
    path: '/4-envelopes',
    name: 'CalculateBudget',
    component: () => import(/* webpackChunkName: "4-envelopes" */ '../views/4EnvelopesBudget.vue')
  },
  {
    path: '/50-30-20',
    name: 'CalculateBudget',
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
