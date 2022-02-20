import Vue from 'vue';
import App from './App.vue';

/**
 * Directive hooks
 * 
 * bind - когда директива привязана к элементу.
 * inserted - вставлена в DOM.
 * update - изменен комонент, без изменения потомков.
 * componentUpdated - изменен комонент с потомками.
 * unbind - директива удалена.
 */

 /**
  * Директива без динамического присвоения.
  */
Vue.directive('highlight', {
    bind: function (el, binding, vnode) {
        el.style.backgroundColor = 'green';

        return this;
    },
});

/**
 * Директива с динамическим присвоением.
 */
Vue.directive('highlightWithChangeState', {
    bind: function (el, binding, vnode) {
        el.style.backgroundColor = binding.value;

        return this;
    },
});

/**
 * Директива с динамическим аргументом
 * и динамическим присвоением
 * и модификаторами.
 */
Vue.directive('highlightWithChangeStateAndArgBind', {
    bind: function (el, binding, vnode) {
        let delay = 0,
        interval = binding.value.interval ? binding.value.interval : 1e3;
        
        if (binding.modifiers.delayed) {
            delay = 3e3;
        }

        if (binding.modifiers.consoled) {
            setTimeout(function () {
                console.log('here');
            }, delay);
        }

        if (binding.modifiers.blink) {
            
            let mainColor = binding.value.mainColor ? binding.value.mainColor : 'orange',
            secondColor = binding.value.secondColor ? binding.value.secondColor : 'blue',
            currentColor = mainColor;
            
            setTimeout(function () {
                setInterval(function () {
                    
                    if (currentColor == secondColor) {
                        currentColor = mainColor;
                    } else {
                        currentColor = secondColor;
                    }

                    if (binding.arg == 'background') {
                        el.style.backgroundColor = currentColor;
            
                        return this;
                    }
            
                    el.style.color = currentColor;
                    
                    return this;

                }, interval);
            }, delay);
        
            return this;
        }

        setTimeout(function () {
            if (binding.arg == 'background') {
                el.style.backgroundColor = binding.value;
    
                return this;
            }
    
            el.style.color = binding.value;
        }, delay);

        return this;
    },
});

new Vue({
  el: '#app',
  render: h => h(App)
});
