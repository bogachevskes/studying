<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUppercase | reverse }}</p>
                <hr>
                <button @click="fruits.push('Berries')">Add New Item</button>
                <input v-model="filterText">
                <ul>
                    <li v-for="(fruit, i) in filteredFruits" :key="i">{{ fruit }}</li>
                </ul>
                <hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
    /** 
     * По сути, filters и computed
     * делают одно и тоже, можно применять и так и так.
     * 
     * при доблавении миксинов, Vue мержит их в текущий инстанс,
     * по-этому data можно объявлять и там и там.
    */
   import List from './List.vue';
   import { fruitMixin } from './fruitMixin';

    export default {
        mixins: [fruitMixin],
        data: function () {
            return {
                text: 'Hello there',
            };
        },
        filters: {
            toUppercase: function (value) {
                return value.toUpperCase();
            },
        },
        components: {
            'app-list': List,
        }
    }
</script>

<style>

</style>