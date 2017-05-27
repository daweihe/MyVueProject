import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import axios from 'axios'

require('./assets/css/base.css'); //全局引入
require("../src/assets/js/font.js");
require("../src/assets/js/jquery-1.7.2.js");


//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
//
axios.interceptors.request.use(function(config) { //配置发送请求的信息
    store.dispatch('showLoading');
    return config;
}, function(error) {
    return Promise.reject(error);
});


axios.interceptors.response.use(function(response) { //配置请求回来的信息
    store.dispatch('hideLoading')
    return response;
}, function(error) {

    return Promise.reject(error);
});

axios.defaults.baseURL = 'http://localhost:8080/';
Vue.prototype.$http = axios //其他页面在使用axios的时候直接  this.$http就可以了


new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})