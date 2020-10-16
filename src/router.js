import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [

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
    path: '/plan',
    name: 'plan',
    component: () => import('@/views/Plan.vue')
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: () => import('@/views/Tasks.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;