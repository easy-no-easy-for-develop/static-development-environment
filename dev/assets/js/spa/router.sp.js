import Vue from 'vue';
import VueRouter from 'vue-router';
import Sample01 from './components/sp/Sample01.vue';
import Sample02 from './components/sp/Sample02.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/spa/sample01', component: Sample01 },
    { path: '/spa/sample02', component: Sample02 },
    { path: '*', beforeEnter (to, from, next) {
        next({path: '/spa/'});
    }}
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;