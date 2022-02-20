import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import { routes } from './routes';
import { store } from './store/store';

/**
 * как конфижить серверы, чтобы работало без /#/ в url
 * https://router.vuejs.org/guide/essentials/history-mode.html
 */

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes,
    mode: 'history', // отключает /#/ в url
    scrollBehavior: function (to, from, savedPosition) {
        // перемещение к предыдущему положению страницы
        if (savedPosition) {
            return savedPosition;
        }
        // перемещение по хешу части страницы
        if (to.hash) {
            return {
                selector: to.hash,
            }
        }
    },
});

/** Глобавльный middleware */
router.beforeEach((to, from, next) => {
    console.log('global middleware');
    next();
});

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
});