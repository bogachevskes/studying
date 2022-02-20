<template>
    <div>
        <h1>Filters & Mixins</h1>
        <input v-model="filterText">
        <ul>
            <li v-for="(fruit, i) in filteredFruits" :key="i">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
    import { fruitMixin } from './fruitMixin';
    
    export default {
        mixins: [fruitMixin],
        created: function () {
            console.log('Created inside List component');
        },
    }
</script>

<style>

</style>