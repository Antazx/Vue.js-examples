import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Restaurants',
    component: () => import(/* webpackChunkName: "about" */ '../views/Restaurants.vue')
  },
  {
    path: '/local/:id',
    name: 'Local',
    component: () => import(/* webpackChunkName: "about" */ '../views/Local.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
