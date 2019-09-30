import axios from 'axios';

// 请求时间30秒
axios.defaults.timeout = 15000;

// 请求时的拦截
axios.interceptors.request.use(function (config) {
    // 发送请求之前做一些处理
    return config;
}, function (error) {
    // 当请求异常时做一些处理
    return Promise.reject(error);
});

// 响应时拦截
axios.interceptors.response.use(function (response) {
    // 返回响应时做一些处理
    return response;
}, function (error) {
    // 当响应异常时做一些处理
    return Promise.reject(error);
});

// 使用Promise对象以同步的方式处理异步操作
export function request (obj) {
    return new Promise((resolve, reject) => {
        axios({
                url: obj.url,
                method: obj.method || 'GET', // 默认方式GET方法
                data: obj.params
            }).then(res => {
                resolve(res.data);
            })
            .catch(function (err) {
                reject(err);
            });
    });
}
