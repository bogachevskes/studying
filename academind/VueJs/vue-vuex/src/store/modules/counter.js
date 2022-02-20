const state = {
    counter: 0,
};

const getters = {
    doubleCounter: (state) => {
        return state.counter * 2;
    },
    stringCounter: (state) => {
        return state.counter + ' clicks';
    },
};

const mutations = {
    increment: (state, payload = 0) => {
        state.counter += payload;

        return this;
    },
    decrement: (state, payload = 0) => {
        state.counter -= payload;

        return this;
    },
};

const actions = {
    increment: (context, payload) => {
        context.commit('increment', payload);

        return this;
    },
    decrement: (context) => {
        context.commit('decrement');

        return this;
    },
    asyncIncrement: (context, payload) => {
        setTimeout(() => {
            context.commit('increment', payload.by);
        }, payload.duration);

        return this;
    },
    asyncDecrement: (context, payload) => {
        setTimeout(() => {
            context.commit('decrement', payload.by);
        }, payload.duration);

        return this;
    },
};

export default {
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions,
}