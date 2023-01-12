import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/about',
  //   name: 'About',
  //   // 懒加载
  //   component: () => import('../views/About.vue'),
  // },
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Index.vue'),
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue'),
    children: [
      {
        path: '/',
        redirect: '/user/login',
      },
      {
        path: '/user/login',
        name: 'login',
        component: () => import('../views/login.vue'),
      },
      {
        path: '/user/register',
        name: 'register',
        component: () => import('../views/register.vue'),
      },
    ],
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('../views/Account.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
