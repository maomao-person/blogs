import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',//登录
            name: '/',
            component: () => import('../views//Login.vue'),
        },
    ]
})