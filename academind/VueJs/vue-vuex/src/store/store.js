import Vue from 'vue';
import Vuex from 'vuex';

import counter from './modules/counter';
import value from './modules/value';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

export const store = new Vuex.Store({
    getters: getters,
    /** Мутации не корректно работают с синхронными заданиями */
    mutations: mutations,
    /**
     * Если не предполагается асинхронных заданий
     * со state, то можно использовать мутации,
     * в других случаях нужно использовать экшены.
     * Экшены - очередь мутаций.
     * Вызывать в компонентах экшены а не мутации - good practice
     */
    /** Экшены работают корректно с асинхронными заданиями */
    actions: actions,
    modules: {
        counter: counter,
        value: value,
    },
});