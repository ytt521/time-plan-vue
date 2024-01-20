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
    path: '/plan',
    component: () => import('@/layout/index.vue'),
    name: 'Plan',
    meta: {
      title: 'Plan',
      hidden: true,
    },
    redirect: '/plan/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
          title: 'Dashboard',
          hidden: true,
        },
        redirect: '/plan/dashboard/content',
        children: [
          {
            path: 'content',
            component: () => import('@/views/dashboard/content/index.vue'),
            name: 'Content',
            meta: {
              title: '任务',
              hidden: true,
            },
            redirect: '/plan/dashboard/content/collectbox',
            children: [
              {
                path: 'collectbox',
                component: () =>
                  import('@/views/dashboard/content/collectbox/index.vue'),
                name: 'CollectBox',
                meta: {
                  title: '收集箱',
                  hidden: true,
                },
              },
            ],
          },
        ],
      },
    ],
  },
]
