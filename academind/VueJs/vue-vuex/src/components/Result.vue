<template>
    <div>
        <p>Counter is: {{ counter }}</p>
        <!-- использование геттеров -->
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of clicks is: {{ clicks }}</p>
    </div>

</template>

<script>
    import { mapGetters } from 'vuex';
    
    export default {
        /* использование без mapGetters
        computed: {
            counter: function () {
                return this.$store.state.counter;
            },
            doubleCounter: function () {
                return this.$store.getters.doubleCounter;
            },
            clicks: function () {
                return this.$store.getters.stringCounter;
            },
        },
        */
       computed: {
           // ...object позволяет объединять геттеры и другие computed свойства
            ...mapGetters({
                counter: 'counter',
                doubleCounter: 'doubleCounter',
                clicks: 'stringCounter',
            }),
            counter: function (state) {
                return this.$store.state.counter.counter;
            },
       },
    }
</script>