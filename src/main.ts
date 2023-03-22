import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import router from './router/router'

createApp(App)
    .use(ElementPlus)
    .use(router)
    .mount('#app')

