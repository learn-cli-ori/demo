import Vue from 'vue';
import App from './App';
import router from '@/route/test/index.js';
new Vue({
    router,
    // store,
    render: h => h(App)
}).$mount('#app');