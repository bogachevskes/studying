<template>
    <ul class="nav nav-pills">
        <!-- exact указывает на то что, совпадение url должно быть полное -->
        <router-link
            :to="getHomeRoute"
            tag="li"
            active-class="active"
            exact
        >
            <a class="nav-item">Home</a>
        </router-link>
        <router-link
            :to="getUserRoute"
            tag="li"
            active-class="active"
        >
            <a class="nav-item">Users</a>
        </router-link>
    </ul>
</template>

<script>
    import { mapGetters } from 'vuex';
    
    export default {
        data: function () {
            return {

            };
        },
        computed: {
            ...mapGetters({
                getHomeRoute: 'getHomeRoute',
                getUserRoute: 'getUserRoute',
            }),
        },
    }
</script>