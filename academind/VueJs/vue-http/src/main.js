import Vue from 'vue';;
import App from './App.vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.options.root = 'https://vue-http-1ee12.firebaseio.com/';

// перехватчик запроса.
Vue.http.interceptors.push((request, next) => {
    /* способ перехвата
    if (request.method == 'POST') {
        request.method = 'PUT';
    }
    */

    // перехватчик ответа.
    /* способ перехвата
    next((response) => {
        response.json = () => {
            return {
                messages: response.body,
            };
        }
    });
    */
});

new Vue({
    el: '#app',
    render: h => h(App)
});
