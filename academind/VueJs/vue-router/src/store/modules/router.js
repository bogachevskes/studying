import {
    ROUTE_HOME,
    ROUTE_USERS,
    ROUTE_USER_DETAIL,
    ROUTE_USER_EDIT,
} from '@/routes';

const getters = {
    getRoute: () => {
        return (route, params = {}, query = {}, hash = null) => {
            let routeQuery = { name: route };

            if (Object.keys(params).length) {
                routeQuery.params = params;
            }

            if (Object.keys(query).length) {
                routeQuery.query = query;
            }

            if (hash) {
                routeQuery.hash = hash;
            }
            
            return routeQuery;
        };
    },
    getRouteById: (state, getters) => {
        return (route, id = null, query = {}, hash) => {
            
            if (! id && this.$route) {
                id = this.$route.params.id;
            }
            
            return getters.getRoute(route, {id: id}, { ...query }, hash);
        };
    },
    getHomeRoute: function (state, getters) {
        return getters.getRoute(ROUTE_HOME);
    },
    getUserRoute: function (state, getters) {
        return getters.getRoute(ROUTE_USERS);
    },
    getUserDetailRoute: (state, getters) => {
        return (userId) => {
            return getters.getRouteById(ROUTE_USER_DETAIL, userId);
        };
    },
    getUserEditRoute: (state, getters) => {
        return (userId, query = {}, hash = null) => {
            return getters.getRouteById(ROUTE_USER_EDIT, userId, query, hash);
        };
    },
};

export default {
    getters: getters,
}