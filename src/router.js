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
    path: '/place',
    name: 'Place',
    component: () => import('@/views/Place.vue')
  },
  {
    path: '/place2',
    name: 'Place2',
    component: () => import('@/views/Place2.vue')
  },
  {
    path: '/bank',
    name: 'Bank',
    component: () => import('@/views/Bank.vue')
  },
  {
    path: '/slave/:name',
    name: 'slave',
    component: () => import('@/views/Slave.vue')
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