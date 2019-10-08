import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const test = () =>
    import ('@/views/test.vue');
export default new Router({
    routes: [{
        path: '/test',
        name: 'test',
        component: test
    }]
})