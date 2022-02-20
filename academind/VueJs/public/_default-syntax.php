<!DOCTYPE html>
<html>
    <head>
        <title>Дефолтный синтакс vue.js</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <script src="/js/vue.js"></script>
    </head>
    <body>
        <div id="app">
            <h1 v-once>{{ title }}</h1> <!-- v-once - рендерит елемент 1 раз -->
            <p>{{ sayHello() }} - <a :href="link">Google</a></p> <!-- : - сокращенное обозначение v-bind -->
            <p v-html="finishedLink"></p> <!-- v-html - рендерит строку как html -->
        </div>
        <hr>

        <script>
            new Vue({
                el: '#app',
                data: {
                    title: 'Hello World',
                    link: 'http://google.com',
                    finishedLink: '<a href="http://google.com">Google</a>',
                },
                methods: {
                    sayHello: function () {
                        this.title = 'Hello';
                        return this.title;
                    }
                }
            })
        </script>

        <div id="app-2">
            <button v-on:click="increase(2, $event)">Click Me</button>
            <button v-on:click="counter++">Click Me</button>
            <p>{{ counter * 2 }}</p>
            <p v-on:mousemove="updateCoordinates">
                Coordinates {{ x }} / {{ y }} - <span v-on:mousemove.stop="">DEAD SPOT</span>
            </p>
            <input type="text" v-on:keyup.enter.space="alertMe">
        </div>
        <hr>

        <script>
            new Vue({
                el: '#app-2',
                data: {
                    counter:0,
                    x: 0,
                    y: 0,
                },
                methods: {
                    increase: function (step, event) {
                        this.counter += step;
                    },
                    updateCoordinates: function (event) {
                        this.x = event.clientX;
                        this.y = event.clientY;
                    },
                    alertMe: function () {
                        alert('me!');
                    },
                }
            })
        </script>

        <div style='margin-top:20px;' id='app-3'>
            <input type="text" v-model="name">
            <p>{{ name }}</p>
        </div>

        <script>
            new Vue({
                el: '#app-3',
                data: {
                    name:'Andy',
                },
                methods: {

                }
            })
        </script>

        <div style='margin-top:20px;' id='app-4'>
            <button v-on:click="counter++">Increase</button>
            <button v-on:click="counter--">Decrease</button>
            <button @click="secondCounter++">Increase Second</button> <!-- @ - сокращенное обозначение v-on -->
            <p>Counter: {{ counter }} | {{ secondCounter }}</p>
            <p>Result: {{ result() }} | {{ output }}</p>
        </div>
        <hr>

        <script>
            let asdf = new Vue({
                el: '#app-4',
                data: {
                    counter: 0,
                    secondCounter: 0,
                },
                computed: { // пересчитывается когда одна из зависимостей изменена. проперти. Указывает как обработать изменение этой проперти
                    output: function () {
                        console.log('Computed');
                        return this.counter > 5 ? 'Greater than  5' : 'Smaller than 5';
                    }
                },
                watch: { // работает, когда проперти изменено. Указывает что еще сделать, когда проперти изменена
                    counter: function (value) {
                        let vm = this; // для колбэчных функций this (vue) нужно ложить в переменную и передавать, this (vue) не доступен в контексте колбэка

                        setTimeout(function () {
                            vm.counter = 0;
                        }, 2000);
                    }
                },
                methods: { // пересчитывается всегда, когда пересчитывается дом
                    result: function () {
                        console.log('Method');
                        return this.counter > 5 ? 'Greater than  5' : 'Smaller than 5';
                    },
                }
            })
        </script>

        <div style='margin-top:20px;' id="app-5">
            <div
                class="demo"
                @click="attachRed = !attachRed"
                :class="{red: attachRed}"
                ></div>
            
            <div
                class="demo"
                :class="divClasses"
                ></div>
            
            <div class="demo" :class="[color, {red: attachRed}]"></div> <!-- {red: attachRed} доп класс, если первый - null -->
            <input type="text" v-model="color">
        </div>
        <hr>

        <script>
            new Vue({
                el: '#app-5',
                data: {
                    attachRed: false,
                    color: 'green',
                },
                computed: {
                    divClasses: function () {
                        return {
                            red: this.attachRed,
                            blue: (!this.attachRed),
                        };
                    },
                },
            })
        </script>

        <style>
            .demo {
                width: 50px;
                height:50px;
                background-color:silver;
                margin-bottom:5px;
            }

            .red {
                background-color: red;
            }

            .green {
                background-color: green;
            }

            .blue {
                background-color: blue;
            }
        </style>

        <div style='margin-top:20px;' id="app-6">
            <div class="demo" :style="{backgroundColor: color}"></div> <!-- не использовать  -  не читается  -->
            <div class="demo" :style="myStyle"></div>
            <div class="demo" :style="[myStyle, {height: width + 'px'}]"></div>
            <input type="text" v-model="color">
            <input type="text" v-model="width">
        </div>
        <hr>

        <script>
            new Vue({
                el: '#app-6',
                data: {
                    color: 'gray',
                    width: 50,
                },
                computed: {
                    myStyle: function () {
                        return {
                            backgroundColor: this.color,
                            width: this.width + 'px',
                        };
                    }
                },
            })
        </script>

        <div style='margin-top:20px;' id='app-7'>
            <p v-if="show">You can see me!</p>
            
            <template v-if="show">
                <h1>Heading</h1>
                <p>Inside a template</p>
            </template>

            <p v-show="show">Do you also see me?</p> <!-- v-show - устанавливает display:none | v-if - удалеяет, но сотавляет коммент -->

            <button @click="show = !show">Switch</button> 
        </div>
        <hr>

        <script>
            new Vue({
                el: '#app-7',
                data: {
                    show: true,
                },
            })
        </script>

        <div id='app-8'>
            
            <ul>
                <li v-for="(ingredient, i) in ingredients">{{ ingredient }} ({{ i }})</li>
            </ul>
            <button @click="ingredients.push('spices')">Add New</button>

            <template v-for="(ingredient, index) in ingredients">
                <h1>{{ ingredient }}</h1>
                <p>{{ index }}</p>
            </template>

            <ul>
                <li v-for="person in persons">
                    <div v-for="(value, key, index) in person">{{ key }}: {{ value }} ({{ index }})</div>
                </li>
            </ul>

            <span v-for="n in 10">{{ n }}</span>

        </div>

        <script>
            new Vue({
                el: '#app-8',
                data: {
                    ingredients: ['meat', 'fruit', 'cookies'],
                    persons: [
                        {name: 'Max', age:27, color:'red'},
                        {name: 'Anna', age:'unknown', color:'blue'},
                    ],
                },
                watch: {
                    'ingredients': function () {
                        console.log(this.ingredients);
                    },
                }
            })
        </script>

    </body>
</html>