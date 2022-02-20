<template>
    <div class="row">
        <!-- @click.native - определяет что нужно слушать евент на html внутри компонента -->
        <app-quote
            v-for="(quote, index) in quotes"
            :key="index"
            @click.native="deleteQuote(index)"
            >
            {{ quote }}
        </app-quote>
    </div>
</template>

<script>
import { eventBus } from '../storage/storage';
import Quote from './Quote.vue';

export default {
    props: ['quotes'],
    components: {
        'app-quote': Quote,
    },
    methods: {
        deleteQuote: function (quoteIndex) {
            eventBus.deleteQuote(quoteIndex);

            return this;
        },
    },
}
</script>

<style>

</style>