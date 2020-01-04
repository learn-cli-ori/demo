import Vue from 'vue';
import App from './App';
import { router } from '@/router/index';
import store from '@/store/index';
import './static/style/reset.scss';
//路由权限
import '@/router/routePermission';

import "babel-polyfill";
import 'lib-flexible';
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');