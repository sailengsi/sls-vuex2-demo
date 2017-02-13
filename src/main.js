import Vue from 'vue';
import App from './App';

import store from './store/';

new Vue({
    el: '#app',
    template: '<App/>',
    store,
    components: {
        App
    }
})