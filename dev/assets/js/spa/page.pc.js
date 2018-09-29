import Vue from 'vue';
import App from './App.pc.vue';
import router from './router.pc.js';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});