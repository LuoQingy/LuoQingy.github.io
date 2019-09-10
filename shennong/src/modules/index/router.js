import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    // { path: '/', name: 'Hello', component: r => { require(['./HelloWorld.vue'], r) }, meta: { title: '开始' }}
    {
        path: "/",
        redirect: { name: 'Home' },
        alias:'/home/index'
    },
    {
        path: '/home',
        component: () => import("@/modules/index/views/Home.vue"),
        children: [
            {
                path: "index",
                name: "Home",
                component: () =>  import("@/modules/index/views/index.vue"),
            }
        ]
    },
    { path: '*', redirect: '/home/index', hidden: true }
]

export default new VueRouter({
    routes: routes
})