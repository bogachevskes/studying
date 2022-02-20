/**
 * Для vue instance можно определить проперти из вне,
 * но нельзя использовать их внутри instance,
 * если они не определены внутри сразу,
 * т.к. для них не создаются геттеры и сеттеры
 */

let data = {
  title: 'The VueJS Instance',
  showParagraph: false
};

/**
 * переиспользуемый несколько раз компонент через соотв. тэг <hello></hello>
 */
/*
Vue.component('hello', {
  template: '<h1>Hello!</h1>',
});
*/

const vmOne = new Vue({
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      
      this.updateTitle('The VueJS Instance (Updated)');
      
      console.log(this.$refs.myButton);
      
      this.$refs.myButton.innerText = 'test';
    },
    updateTitle: function(title) {
      this.title = title;
      console.log('Title updated');
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      console.log('Title changed, new value: ' + value);
    }
  }
});

vmOne.$mount('#app-1');

setTimeout(function() {
  vmOne.title = 'Changed by timer';
  vmOne.show();
}, 3e3);

/**
 * правила изменились, теперь это убивает интерполяцию {{ title }},
 * поэтому нужно присваивать через v-html
 */
vmOne.$refs.heading.innerText = 'Something else';

const vmTwo = new Vue({
    el: '#app-2',
    data: {
      title: 'The second instance',
    },
    methods: {
      onChange: function () {
        vmOne.title = 'Changed!';
      },
    }
});

console.log(vmOne, vmOne.$data);

const vmThree = new Vue({
  // el: 'hello', // так заменяет один дом-елемент <hello></hello>
  template: '<h1>Hello!</h1>',
});

// vmThree.$mount('#app-3');
vmThree.$mount(); // тоже самое
document.getElementById('app-3').appendChild(vmThree.$el);

const vmFour = new Vue({
  el: '#app-4',
  data: {
    title: 'The VueJs Instance',
  },
  beforeCreate: function() {
    console.log('beforeCreate()')
  },
  created: function() {
    console.log('created()');
  },
  beforeMount: function() {
    console.log('beforeMount()')
  },
  mounted: function() {
    console.log('mounted()');
  },
  beforeUpdate: function() {
    console.log('beforeUpdate()');
  },
  updated: function() {
    console.log('updated()');
  },
  beforeDestroy: function() {
    console.log('beforeDestroy()');
  },
  destroyed: function() {
    console.log('destroyed()');
  },
  methods: {
    destroy: function() {
        this.$destroy();
    },
  },
})

// vue instance lifecycle
// beforeCreate - до того как instance фактически создан
// created - instance создан, со всеми проперти и проч
// beforeMount - instance готов к интеграции в дом, скомпилированы темплейты, элемент el - готов
// updated - instance вставлен в дом
// beforeUpdate - перед тем как вставить в дом, после того, как уже было событие updated
// beforeDestroy - перед тем как убить instance
// destroyed - instance убит

/**
 * virtual dom прослойка между Vue и DOM, который пропускает через себя изменения
 * в instance, к примеру:
 * updated не произойдет, если проперти не имеет реальных изменений.
 * при вызове $destro(), виртуальный дом больше не существует и не контролирует дом.
 */


/**
 * Использование компонента в нескольких местах.
 */

 /**
  * Если таки способом присваивать дату, то при смене проперти,
  * значение меняется в обоих инстансах компонента.
  */
//let dataTwo = {status: 'critical'};

/* Глобальный компонент
Vue.component('my-cmp', {
  data: function () {
    //return dataTwo;

    
    // Так проперти будут меняться конкренто для каждого instance
    return {
      status: 'critical',
    };
  },
  template: '<p>Server status: {{ status }} (<button @click="changeStatus">Change status</button>)</p>',
  methods: {
    changeStatus: function () {
      this.status = 'normal';
    }
  }
});
*/

/**
 * Использование компонента локально для инстанс
 */
const cmp = {
  data: function () {
    return {
      status: 'critical',
    };
  },
  template: '<p>Server status: {{ status }} (<button @click="changeStatus">Change status</button>)</p>',
  methods: {
    changeStatus: function () {
      this.status = 'normal';
    }
  }
};

const vmFive = new Vue({
  el: '#app-5',
  components: {
    'my-cmp': cmp,
  },
});

const vmSix = new Vue({
  el: '#app-6',
})