import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    cors: true, // 允许跨域
    port: 8050, // 端口号
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: "http://localhost:9090/",
        changeOrigin: true, //表示是否跨域，
        rewrite:(path)=>path.replace('/api','')
      },
    }
  },
  plugins: [vue()],
})
