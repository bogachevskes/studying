<template>
    <div>
        <h3>New Quote</h3>
        <button @click="counter++">Increase counter</button>
        <p>Counter {{ counter }}</p>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            counter: 0,
        };
    },
    destroyed: function () { // происходит, когда переключается компонент, но он не keep-alive
        console.log('destroyed');
    },
    deactivated: function () { // происходит когда переключается компонент, но он keep-alive
        console.log('deactivated');
    },
}
</script>

<style>

</style>