import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import cart from './cart/';

module.exports = new Vuex.Store({
    modules: {
        cart
    }
});