import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [

  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/Dashboard.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/Test.vue')
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
  }, {
    path: '/tasks',
    name: 'tasks',
    component: () => import('@/views/Tasks.vue')
  }, {
    path: '/plan',
    name: 'plan',
    // component: () => import('@/components/SW.vue')
    component: () => import('@/views/Plan.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;