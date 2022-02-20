<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
        <!-- так не работает -->
        <!-- <button class="btn btn-success" @click="asyncIncrement(10, 100)">Async Increment</button> -->
        <button class="btn btn-success" @click="asyncIncrement({by: 50, duration: 2000})">Async Increment</button>
        <button class="btn btn-success" @click="asyncDecrement({by: 50, duration: 200})">Async Decrement</button>
    </div>
</template>

<script>
    import { mapMutations, mapActions } from 'vuex';

    export default {
        /** использование с mapMutations */
        methods: {
            ...mapMutations({
                increment: 'increment',
                decrement: 'decrement',
            }),
            ...mapActions({
                asyncIncrement: 'asyncIncrement',
                asyncDecrement: 'asyncDecrement',
            }),
        },
        
        /* использование без мутаций
        methods: {
            increment: function () {
                // Указание this.$ - обозначает что обращение идет к компоненту
                
                this.$store.state.counter++;

                return this;
            },
            decrement: function () {
                this.$store.state.counter--;

                return this;
            }
        }
        */
       /** использование с мутациями */
       /*
        methods: {
            increment: function () {
                this.$store.commit('increment');

                return this;
            },
            decrement: function () {
                this.$store.commit('decrement');

                return this;
            }
        }
        */
    }
</script>