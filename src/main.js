import Vue from 'vue';
import App from './App';
import { router } from '@/route/index';
import store from '@/store/index';
//路由权限
// import '@/router/routePermission';

import "babel-polyfill";
import 'lib-flexible';
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');