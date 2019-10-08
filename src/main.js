import Vue from 'vue';
import App from './App';
import router from '@/route/test/index.js';
import "babel-polyfill";
import 'lib-flexible';
new Vue({
    router,
    // store,
    render: h => h(App)
}).$mount('#app');