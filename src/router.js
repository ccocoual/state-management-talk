import Vue from 'vue';
import Router from 'vue-router';
import StateManagement from './views/StateManagement.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/state-management/:slide/:step',
            name: 'state-management',
            component: StateManagement,
        },
    ],
});
