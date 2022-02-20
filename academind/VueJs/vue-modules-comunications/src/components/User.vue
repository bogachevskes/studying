<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my name</button>
        <p>Name is {{ name }}</p>
        <p>Age is {{ age }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <!-- $event - отностится к данным события -->
                <!-- 
                <app-user-detail
                    :name="name"
                    :age="age"
                    @nameWasReset="name = $event"
                    ></app-user-detail> передает проперти внутрь компонентов от parent к child
                    -->
                <app-user-detail
                    :name="name"
                    :age="age"
                    ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <!-- без eventBus
                <app-user-edit
                    :name="name"
                    :age="age"
                    @ageWasEdited="age = $event"
                    ></app-user-edit>
                    -->
                <app-user-edit
                    :name="name"
                    :age="age"
                    ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';
    import { eventBus } from '../main';

    export default {
        data: function () {
            return {
                name: 'Max',
                age: 27,
            };
        },
        methods: {
            changeName() {
                this.name = 'Anna';
                eventBus.changeName(this.name);
            },
        },
        components: {
            'app-user-detail': UserDetail,
            'app-user-edit': UserEdit,
        },
        created: function () {
            eventBus.$on('nameWasReset', (data) => { // листнер евентов
                this.name = data;
            });
        },
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
