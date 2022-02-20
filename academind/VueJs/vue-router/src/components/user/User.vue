<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <button class="btn btn-success" @click="navigateToHome">Go to Home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        /* Изменение id по событиям url
        data: function () {
            return {
                id: this.$route.params.id,
            };
        },
        watch: {
            '$route': function (to, from) {
                this.id = to.params.id;
            },
        },
        */
        computed: {
            ...mapGetters({
                getHomeRoute: 'getHomeRoute',
            }),
        },
        methods: {
            navigateToHome: function () {
                this.$router.push(this.getHomeRoute);
            },
        },
    }
</script>