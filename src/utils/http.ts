import axios, {AxiosRequestConfig, AxiosInstance, AxiosResponse} from 'axios';

const axiosInstance: AxiosInstance = axios.create({
    // baseURL: 'http://localhost:9090',
    timeout: 5000,
});
// 添加请求拦截器
axiosInstance.interceptors.request.use(
    (config: any) => {
        // 在发送请求之前做些什么
        return config;
    },
    (error: any) => {
        // 处理请求错误
        return Promise.reject(error);
    },
);
// 添加响应拦截器
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        const status = response.status;
        console.log(status)
        if(status==200){
            if(response.data.statusCode==0){
                return response.data.result;
            }

        }


        // 对响应数据做点什么
        return response;
    },
    (error: any) => {
        // 处理响应错误
        return Promise.reject(error);
    },
);
export default axiosInstance;
