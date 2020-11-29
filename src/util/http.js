import axios from 'axios'
import {Toast} from 'vant'
const http = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 10000,
  headers: {'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1606313308132504036048897","bc":"430100"}'}
});

// Add a request interceptor
http.interceptors.request.use(function (config) {
  //请求时调用轻提示
  Toast.loading({
    message: "加载莫急...",
    forbidClick: true,
    loadingType:'spinner',
    duration:0
  });
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
http.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  //响应时消除轻提示
  Toast.clear();
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default http