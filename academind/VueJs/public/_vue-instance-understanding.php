<script src="js/vue.js"></script>

<!-- ref - vue.js key -->

<div id="app-1">
  <h1 ref="heading" v-html="title"></h1>
  <button @click="show" ref="myButton">Show Paragraph</button>
  <p v-if="showParagraph">This is not always visible</p>
</div>

<div id="app-2">
  <h1 ref="heading">{{ title }}</h1>
  <button @click="onChange">Change something in vueOne</button>
  <!-- <hello></hello> -->
  <!-- <hello></hello> -->
</div>

<div id="app-3"></div>

<hr>

<div id="app-4">
    <h1>{{ title }}</h1>
    <button @click="title = 'changed'">Update title</button>
    <button @click="destroy">Destroy</button>
</div>

<hr>

<div id='app-5'>
    <my-cmp></my-cmp>
    <my-cmp></my-cmp>
</div>

<hr>

<div id='app-6'>
    <my-cmp></my-cmp>
    <my-cmp></my-cmp>
</div>

<script src="js/vue-instance-understanding/app.js"></script>