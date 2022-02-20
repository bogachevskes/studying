<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">
            <router-link
                v-for="(user, i) in users"
                :key="i"
                tag="li"
                :to="getUserDetailRoute(user)"
                class="list-group-item"
                style="cursor: pointer"
            >
                User {{ user }}
            </router-link>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    
    export default {
        data: () => {
            return {
                users: [1, 2, 3],
            };
        },
        computed: {
            ...mapGetters({
                getUserDetailRoute: 'getUserDetailRoute',
            }),
        },
    }
</script>