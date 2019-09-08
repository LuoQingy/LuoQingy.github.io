import Main from '@/modules/artical/common/Main.vue';
export const routes = [
    {
        path: '/',
        redirect: '/home/index'
    },
    // 首页
    {
    path: '/home',
    component: Main,
    meta: {
        title: '商城首页'
    },
    icon: 'el-icon-menu',
    children: [
        {
            path: '/home/index',
            name: 'home',
            icon: 'el-icon-menu',
            component: () => import("@/modules/artical/views/home.vue"),
            meta: {
                title: '商城首页'
            }
        },
        {
            path: '/home/artical',
            name: 'artical',
            icon: 'el-icon-menu',
            component: () =>  import("@/modules/artical/views/Artical.vue"),
            meta: {
                title: '自定义'
            }
        }
    ]
    },
]