<template>
    <div>
        <h3>Edit the User</h3>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Analytics: {{ $route.query.q }}</p>
        <hr>
        <button class="btn btn-primary" @click="confirm">Confirm</button>
        <h4>{{ printConfirmed }}</h4>
        <div style="height: 700px;"></div>
        <p id="data">Some Extra Data</p>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                confirmed: false,
            };
        },
        methods: {
            confirm: function () {
                this.confirmed = true;

                return this;
            }
        },
        computed: {
            printConfirmed: function () {
                if (this.confirmed) {
                    return 'confirmed';
                }

                return 'not confirmed';
            },
        }, 
        // перед тем как покинуть компонент
        // используется только в компоненте
        beforeRouteLeave: function (to, from, next) {
            if (this.confirmed || confirm('Are you sure?')) {
                return next();
            }

            return next(false);
        }
    }
</script>