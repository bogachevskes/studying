<template>
    <div>
        <!--
            в случае разделения по именам общий
            слот выводятся прочие неименованные аттрибуты
        -->
        <slot></slot>
        <div class='title'>
            <slot name="title"></slot>
            <span style="color: gray">
                <!--
                    внутри слота указываются дефолтные данные,
                    есил значения слота не указаны в родителе
                -->
                <slot name="subtitle">The Subtitle</slot>
            </span>
        </div>
        <div>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    /** присваиваются к слоту */
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }

    h2 {
        color:red;
    }

    .title {
        font-style: italic;
    }
</style>