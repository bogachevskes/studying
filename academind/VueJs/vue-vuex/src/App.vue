<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <hr>
                <app-counter></app-counter>
                <hr>
                <input type="text" class="form-control" v-model="value">
                <div class="alert alert-success" style="margin-top:10px;">{{ value }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';

    export default {
        computed: {
            /**
             * использование геттеров и сеттеров
             * геттер вызывается после сеттера.
             */
            value: {
                get: function () {
                    return this.$store.getters.value;
                },
                set: function (value) {
                    this.$store.dispatch('updateValue', value);
                },
                
            },
        },
        methods: {
            // использование как
            // <input type="text" class="form-control" :value="value" @input="updateValue">
            /*
            updateValue: function () {
                this.$store.dispatch('updateValue', event.target.value);
            },
            */
        },
        components: {
            'app-counter': Counter,
            'app-result': Result,
        }
    }
</script>