import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push;
// 修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

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
        name: 'Login',
        component: () => import('../views/login.vue'),
      },
      {
        path: '/user/register',
        name: 'Register',
        component: () => import('../views/register.vue'),
      },
    ],
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('../views/Account.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
    children: [
      {
        path: '/admin/user',
        name: 'AdminUser',
        component: () => import('../components/admin-user.vue'),
      },
      {
        path: '/admin/assets',
        name: 'AdminAssets',
        component: () => import('../components/admin-assets.vue'),
      },
      {
        path: '/admin/notice',
        name: 'AdminNotice',
        component: () => import('../components/admin-notice.vue'),
      },
      {
        path: '/admin/book',
        name: 'AdminBook',
        component: () => import('../components/admin-book.vue'),
      },
      {
        path: '/admin/book/addBook',
        name: 'AddBook',
        component: () => import('../components/addBook.vue'),
      },
    ],
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/SearchRes.vue'),
  },
  {
    path: '/space',
    name: 'Space',
    component: () => import('../views/SelfSpace.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'is-active',
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && to.name !== 'Register' && !window.sessionStorage.getItem('token')) next({ name: 'Login' });
  else next();
});

export default router;
