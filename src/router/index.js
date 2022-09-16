import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('../views/Main.vue'),
        redirect: '/monitor',
        children: [
            {
                path: '/monitor',
                name: 'monitor',
                component: () => import('../views/monitor')
            },
            {
                path: '/basic',
                name: 'basic',
                component: () => import('../views/basic')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router