<!--

Коммуникации не работют от потомков к потомкам,
информация проходит через родительский компонент и передается потомкам

Реализация предложенная в видеоуроке была неверной.
Проперти в потомках должны обрабатываться через computed,
в возращать измененые значения через $emit | eventBus

евенты приделываются на этапе created

-->

<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <!-- <p>User Name: {{ myName }}</p> --> <!-- обычное использование -->
        <p>User Name: {{ userName }}</p> <!-- с изменением входящего значения -->
        <p>User Age {{ userAge }}</p>
        <button @click="resetName">reset Name</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';

    export default {
        data: function () {
            return {
                nameValue: this.name,
                userAge: this.age,
            };
        },
        props: { // валидация входящих данных в компонент
            name: {
                type: String,
                required: true,
                // default: 'Max', значение по умолчанию
            },
            age: Number,
        },
        methods: {
            resetName: function () {
                this.nameValue = 'Max';
                // this.$emit('nameWasReset', name); // кастомный евент //использование без eventBus
                // eventBus.$emit('nameWasReset', this.nameValue); // исползование без метода в eventBus
                eventBus.changeName(this.nameValue);
            },
        },
        computed: {
            userName: function () {
                return this.nameValue.split('').reverse().join('');
            },
        },
        created: function () {
            eventBus.$on('nameWasReset', (data) => { // листнер евентов
                this.nameValue = data;
            });
            
            eventBus.$on('ageWasEdited', (data) => {
                this.userAge = data;
            });
        },
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
