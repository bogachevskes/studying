<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-new-quote></app-new-quote>
        <app-quote-grid :quotes="quotes"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on a Quote to delete it</div>
            </div>
        </div>
    </div>
</template>

<script>
import { eventBus } from './storage/storage';
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";
import Header from "./components/Header.vue";

export default {
    data: function () {
        return {
            quotes: [
                'Just a Quote to see something',
            ],
            maxQuotes: 10,
        };
    },
    components: {
        'app-quote-grid': QuoteGrid,
        'app-new-quote': NewQuote,
        'app-header': Header,
    },
    methods: {
        newQuote: function (quote) {
            if (this.quotes.length >= this.maxQuotes) {
                return alert('please delete quotes first');
            }
            
            this.quotes.push(quote);

            return this;
        },
        deleteQuote: function (quoteIndex) {
            this.quotes.splice(quoteIndex, 1);

            return this;
        },
    },
    created: function () {
        eventBus
            .$on('quote:added', this.newQuote)
            .$on('quote:deleted', this.deleteQuote);

        return this;
    },
}
</script>

<style>

</style>
