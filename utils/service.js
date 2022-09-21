import axios from 'axios';
//使用create方法创建axios实例
const Service = axios.create({
    timeout: 7000, // 请求超时时间
    method: 'get',
    headers: {
        'Content-Type': '*/*;charset=UTF-8'
    }
});
// 添加请求拦截器
Service.interceptors.request.use(config => {
    //console.log("hint: Loading...");
    return config;
});
// 添加响应拦截器
Service.interceptors.response.use(response => {
    //console.log("hint: response arrived");
    return response.data;
}, error => {
    console.log('TCL: error', error);
    const msg = error.Message !== undefined ? error.Message : ''
    return Promise.reject(error)
});
export default Service;