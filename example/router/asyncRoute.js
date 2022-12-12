const asyncRoutes = [
  {
    path: '/guide',
    name: 'Guide',
    redirect: '/guide/start',
    component: () => import('@/layout/index'),
    meta: {
      title: '开发指南'
    },
    children: [
      {
        path: 'start',
        name: 'Start',
        component: () => import('@/views/guide/start'),
        meta: {
          title: '开始'
        }
      }
    ]
  },
  {
    path: '/basic',
    name: 'Basic',
    redirect: '/basic/input',
    meta: {
      title: '基础组件'
    },
    component: () => import('@/layout/index'),
    children: [
      {
        path: 'input',
        name: 'Input',
        component: () => import('@/views/basic/input'),
        meta: {
          title: '输入框'
        }
      },
      {
        path: 'message',
        name: 'Message',
        component: () => import('@/views/basic/message'),
        meta: {
          title: '消息提示'
        }
      },
      {
        path: 'charts',
        name: 'DcsChartsPage',
        component: () => import('@/views/basic/charts'),
        meta: {
          title: '图表'
        }
      }
    ]
  },
  {
    path: '/business',
    name: 'Business',
    redirect: '/business/header',
    component: () => import('@/layout/index'),
    meta: {
      title: '业务组件'
    },
    children: [
      {
        path: 'tableHeader',
        name: 'TableHeader',
        component: () => import('@/views/business/tableHeader'),
        meta: {
          title: '表格筛选'
        }
      },
      {
        path: 'tableContainer',
        name: 'TableContainer',
        component: () => import('@/views/business/tableContainer'),
        meta: {
          title: '表格内容'
        }
      }
    ]
  },
  {
    path: '/reference',
    name: 'Reference',
    redirect: '/reference/variable',
    meta: {
      title: '参考文档'
    },
    component: () => import('@/layout/index'),
    children: [
      {
        path: 'variable',
        name: 'Variable',
        component: () => import('@/views/reference/variable'),
        meta: {
          title: 'Sass变量'
        }
      },
      {
        path: 'mixin',
        name: 'Mixin',
        component: () => import('@/views/reference/mixin'),
        meta: {
          title: 'Sass混入'
        }
      },
      {
        path: 'common',
        name: 'Common',
        component: () => import('@/views/reference/common'),
        meta: {
          title: '全局样式'
        }
      }
    ]
  }
]
export default asyncRoutes
