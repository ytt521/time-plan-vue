export const constantRoute = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
    meta: {
      title: '登录',
      hidden: true,
    },
  },
  {
    path: '/register',
    component: () => import('@/views/register/index.vue'),
    name: 'register',
    meta: {
      title: '注册',
      hidden: true,
    },
  },
  {
    path: '/dashboard',
    component: () => import('@/views/dashboard/index.vue'),
    name: 'dashboard',
    meta: {
      title: '仪表盘',
      hidden: true,
    },
  },
]
