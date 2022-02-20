<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Name: {{ userName }} </p>
        <p>User Age: {{ userAge }} </p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';
    
    export default {
        data: function () {
            return {
                userName: this.name,
                userAge: this.age,
            };
        },
        props: {
            name: String,
            age: Number,
        },
        methods: {
            editAge: function () {
                this.userAge = 30;
                // this.$emit('ageWasEdited', age); //использование без eventBus
                // eventBus.$emit('ageWasEdited', this.userAge); // исползование без метода в eventBus
                eventBus.changeAge(this.userAge);
            },
        },
        created: function () {
            eventBus.$on('nameWasReset', (data) => { // листнер евентов
                this.userName = data;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
