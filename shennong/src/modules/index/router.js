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
                path: "index/:type",
                name: "Home",
                component: () =>  import("@/modules/index/views/index/index.vue"),
            }
        ]
    },
]

export default new VueRouter({
    routes: routes
})