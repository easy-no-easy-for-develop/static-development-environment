import Vue from 'vue';
import App from './App.sp.vue';
import router from './router.sp.js';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});