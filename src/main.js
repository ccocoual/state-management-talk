import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import Eagle from 'eagle.js';

import App from './App.vue';
import router from './router';
import store from './store';

// import eagle.js default styles
import 'eagle.js/dist/eagle.css';

// import animate.css for slide transition
import 'animate.css';

Vue.use(Eagle);

Vue.config.productionTip = false;

sync(store, router);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
