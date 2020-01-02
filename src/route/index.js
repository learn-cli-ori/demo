import Vue from 'vue';
import Router from 'vue-router';

// import login from '../views/login/login.vue';
// import error from '../views/index/404.vue';
const test = () =>
    import ('@/views/test.vue');
Vue.use(Router);

export const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/test',
        name: 'test',
        component: test
    }]
});

//默认路由
export const defalRouter = [];

export function routerGo(to, next, getRouter) {
    getRouter = [...filterAsyncRouter(getRouter), ...[{
        "path": "*",
        "redirect": "/404",
        "hidden": true
    }]]; //过滤路由

    router.addRoutes(getRouter); //动态添加路由
    next({...to, replace: true });
}

export function filterAsyncRouter(asyncRouterMap, isChildren) { //遍历后台传来的路由字符串，转换为组件对象
    const accessedRouters = asyncRouterMap.filter(route => {
        if (isChildren && !route.component && !route.isParent) {
            route.component = () =>
                import (`@/views${route.filePath || route.path}.vue`);
        }
        if (route.children && route.children.length) {
            route.children = filterAsyncRouter(route.children, true);
        }
        return true;
    });
    return accessedRouters;
}