<template>
<div>
    <app-quiz></app-quiz>
    <hr>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <select v-model="alertAnimation" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <br><br>
                <button class='btn btn-primary' @click="show = !show">Show alert</button>
                <br><br>
                <!-- анимировать то, что внутри тэга transition -->
                <transition name="fade">
                    <div class="alert alert-info" v-if="show">This is some info one</div>
                </transition>
                <!-- type - по какому аттрибуту стиля определять, что действие завршено -->
                <transition name="slide" type="animation">
                    <div class="alert alert-info" v-if="show">This is some info two</div>
                </transition>
                <!-- appear запускает превращение когда эелемент встроен в DOM -->
                <transition name="fade" appear>
                    <div class="alert alert-info" v-if="show">This is some info three</div>
                </transition>
                <!-- применения кастомных евентов класссов анимации
                    -- enter-class=""
                    -- enter-active-class=""
                    -- leave-class=""
                    -- leave-active-class=""
                -->
                <transition
                    appear
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake"
                    >
                    <div class="alert alert-info" v-if="show">This is some info four</div>
                </transition>
                <!-- динамическое изменение типа анимации -->
                <transition :name="alertAnimation">
                    <div class="alert alert-info" v-if="show">This is some info fiveth</div>
                </transition>
                <!--
                    чтобы анимировать два дива в блоке превращаения,
                    они должны быть унфицированы ключом key="key"
                    mode="out-in" - указывает, что нужно отыграть анимации последовательно
                -->
                <transition :name="alertAnimation" mode="out-in">
                    <div class="alert alert-info" v-if="show" key="info">This is some info sixth</div>
                    <div class="alert alert-warning" v-else key="warning">This is some info warning</div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="load = (! load)">Load / Remove Elevent</button>
                <br><br>
                <!--
                    Управление анимации через js
                    :css="false" - для вью обозначает, что не нужно искать css
                -->
                <transition
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"

                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                    :css="false"
                >
                    <div
                        style="height:100px; background-color:lightgreen"
                        v-if="load"
                        :style="{width: elementWidth + 'px'}"
                    ></div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="switchComponent">Toggle components</button>
                <br><br>
                
                <!-- применение превращения к преключению компонентов -->
                <transition name="fade" mode="out-in">
                    <component :is="selectedComponent"></component>
                </transition>
                <hr>
                <!-- -->
                <button class="btn btn-primary" @click="addItem">Add item</button>
                <br><br>
                <ul class="list-group">
                    <transition-group name="slide" tag="ul">
                        <li
                            class="list-group-item"
                            v-for="(number, i) in numbers"
                            :key="number"
                            @click="removeItem(i)"
                            style="cursor:pointer"
                            >{{ number }}
                        </li>
                    </transition-group>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import Quiz from './components/Quiz';
    import DangerAlert from './components/DangerAlert';
    import SuccessAlert from './components/SuccessAlert';

    const SUCCESS_ALERT_CLASS = 'app-success-alert';
    const DANGER_ALERT_CLASS = 'app-danger-alert';
    
    export default {
        data: function () {
            return {
                show: false,
                load: false,
                alertAnimation: 'fade',
                elementWidth: 0,
                selectedComponent: SUCCESS_ALERT_CLASS,
                numbers: [1, 2, 3, 4, 5],
            }
        },
        components: {
            'app-quiz': Quiz,
            'app-danger-alert': DangerAlert,
            'app-success-alert': SuccessAlert,
        },
        methods: {
            switchComponent: function () {
                if (this.selectedComponent == SUCCESS_ALERT_CLASS) {

                    this.selectedComponent = DANGER_ALERT_CLASS;
                    return this;
                }

                this.selectedComponent = SUCCESS_ALERT_CLASS;

                return this;
            },
            removeItem: function (index) {
                this.numbers.splice(index, 1);

                return this;
            },
            addItem: function () {
                const pos = Math.floor(Math.random() * this.numbers.length);

                this.numbers.splice(pos, 0, (this.numbers.length + 1));

                return this;
            },
            beforeEnter: function (el) {
                console.log('beforeEnter');
                
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';
            },
            enter: function (el, done) {
                console.log('enter');
                
                let round = 1;

                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth + round * 10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done(); // триггер того, что анимация завершена
                    }
                }, 20);
            },
            afterEnter: function (el) {
                console.log('afterEnter')
            },
            enterCancelled: function (el) {
                console.log('enterCancelled');
            },

            beforeLeave: function (el) {
                console.log('beforeLeave');
                
                this.elementWidth = 300;
                el.style.width = this.elementWidth + 'px';
            },
            leave: function (el, done) {
                console.log('leave');
                let round = 1;

                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - round * 10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done(); // триггер того, что анимация завершена
                    }
                }, 20);
            },
            afterLeave: function (el) {
                console.log('afterLeave');
            },
            leaveCancelled: function (el) {
                console.log('leaveCancelled');
            },
        },
    }
</script>

<style scoped>
    /** Если не задать имя анимации, будет по дефолту использовано v- */
    .fade-enter {
        opacity:0;
    }

    .fade-enter-active {
        transition: opacity 1s;
    }

    .fade-leave {
        opacity:1;
    }

    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter {
        opacity:0;
        transform: translateY(20px);
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }

    .slide-leave {
        cursor:default;
    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity:0;
        position:absolute;
    }

    /** добавляется для плавного движения остальных блоков при добавлении */
    .slide-move {
        transition: transform 1s;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
        }
    }
</style>