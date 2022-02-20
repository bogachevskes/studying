import Vue from 'vue'
import App from './App.vue'

// глобальное использование фильтра.
Vue.filter('reverse', function (value) {
    return value.split('')
        .reverse()
        .join('');
});

Vue.mixin({
    created: function () {
        console.log('Created Global Mixin');
    },
});

new Vue({
  el: '#app',
  render: h => h(App),
})
