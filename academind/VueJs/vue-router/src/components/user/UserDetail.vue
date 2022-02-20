<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ id }}</p>
        <router-link
            tag="button"
            class="btn btn-warning"
            style="margin-bottom:20px"
            :to="getUserEditRoute(id, { locale: 'en', q: 100, }, '#data')"
        >
            Edit user
        </router-link>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    
    export default {
        data: function () {
            return {
                id: this.$route.params.id,
            };
        },
        computed: {
            ...mapGetters({
                getUserEditRoute: 'getUserEditRoute',
            }),
        },
        // выполняется до того, как компонент примонтировался
        beforeRouteEnter: function (to, from, next) {
            if (true) {
                return next();
            }
            
            return next(false); // блокировать доступ
            
            /**
             * Как обратится уже к загруженному компоненту
            next((vm) => {
                vm.link;
            });
            */
        }
    }
</script>