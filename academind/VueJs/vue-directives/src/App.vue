<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-text="'Some text'"></p>
                <p v-html="'<strong>Some strong text</strong>'"></p>
            </div>
        </div>
        <hr>
        <!-- v- Объявляет для vue, что это директива -->
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom directives</h1>
                <p v-highlight>Color this</p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom directives</h1>
                <p v-highlightWithChangeState="'blue'">Color this</p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom directives</h1>
                <p v-highlightWithChangeStateAndArgBind:background.delayed.consoled.blink="{mainColor: 'purple', secondColor: 'cyan', interval: 5e2}">Color this</p>
                <p v-highlightWithChangeStateAndArgBind.blink="'red'">Color this</p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom local directives</h1>
                <p v-local-highlight>Color this locally</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-highlight': {
                bind: function (el, binding, vnode) {
                    el.style.backgroundColor = 'green';
                    
                    return this;
                },
            }
        },
    }
</script>

<style>

</style>