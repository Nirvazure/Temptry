import Vue from "vue";
import VueRouter from "vue-router";
import Home from '@/views/Home.vue'

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ceremony',
    name: 'Ceremony',
    component: () => import('@/views/Ceremony.vue')
  },

  {
    path: '/pay',
    name: 'Pay',
    component: () => import('@/views/Pay.vue')
  },

  {
    path: '/train',
    name: 'train',
    component: () => import('@/views/Train.vue')
  },
  {
    path: '/schedule',
    name: 'schedule',
    component: () => import('@/views/Schedule.vue')
  },
  {
    path: '/plan',
    name: 'plan',
    component: () => import('@/views/Plan.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;