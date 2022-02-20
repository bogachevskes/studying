import Vue from 'vue';
import Vuex from 'vuex';

import router from './modules/router';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        router: router,
    },
});