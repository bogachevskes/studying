import Vue from 'vue';

export const eventBus = new Vue({
    methods: {
        addQuote: function (quote) {
            this.$emit('quote:added', quote);

            return this;
        },
        deleteQuote: function (quoteIndex) {
            this.$emit('quote:deleted', quoteIndex);

            return this;
        }
    },
});