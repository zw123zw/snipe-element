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
        path: 'icon',
        name: 'Icon',
        component: () => import('@/views/basic/icon'),
        meta: {
          title: 'Icon 图标'
        }
      },
      {
        path: 'input',
        name: 'Input',
        component: () => import('@/views/basic/input'),
        meta: {
          title: 'Input 输入框'
        }
      },
      {
        path: 'button',
        name: 'Button',
        component: () => import('@/views/basic/button'),
        meta: {
          title: 'Button 按钮'
        }
      },
      {
        path: 'link',
        name: 'Link',
        component: () => import('@/views/basic/link'),
        meta: {
          title: 'Link 文字链接'
        }
      },
      {
        path: 'radio',
        name: 'Radio',
        component: () => import('@/views/basic/radio'),
        meta: {
          title: 'Radio 单选框'
        }
      },
      {
        path: 'checkbox',
        name: 'Checkbox',
        component: () => import('@/views/basic/checkbox'),
        meta: {
          title: 'Checkbox 多选框'
        }
      },
      {
        path: 'inputNumber',
        name: 'InputNumber',
        component: () => import('@/views/basic/inputNumber'),
        meta: {
          title: 'InputNumber 计数器'
        }
      },
      {
        path: 'select',
        name: 'Select',
        component: () => import('@/views/basic/select'),
        meta: {
          title: 'Select 选择器'
        }
      },
      {
        path: 'cascader',
        name: 'Cascader',
        component: () => import('@/views/basic/cascader'),
        meta: {
          title: 'Cascader 级联选择器'
        }
      },
      {
        path: 'switch',
        name: 'Switch',
        component: () => import('@/views/basic/switch'),
        meta: {
          title: 'Switch 开关'
        }
      },
      {
        path: 'slider',
        name: 'Slider',
        component: () => import('@/views/basic/slider'),
        meta: {
          title: 'Slider 滑块'
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
      }
    ]
  }
]
export default asyncRoutes
