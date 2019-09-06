import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        redirect: { name: 'artical' },
        alias:'/home/artical'
    },
    {
        path: '/home',
        component: () => import("@/modules/index/views/Home.vue"),
        children: [
            {
                path: "artical/:id/:type/:page",
                name: "artical",
                component: () =>  import("@/modules/artical/views/artical/Artical.vue"),
            }
        ]
    },
]

export default new VueRouter({
    routes: routes
})