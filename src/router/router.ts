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
        {
            path: '/home',//编辑器
            name: '/home',
            component: () => import('../views/Home.vue'),
        },
        {
            path: '/editor',//编辑器
            name: '/editor',
            component: () => import('../components/Editor.vue'),
        },
    ]
})