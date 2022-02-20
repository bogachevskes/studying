<template>
    <div class="row">
        <form>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
                <label>Quote</label>
                <textarea class="form-control" rows="3" v-model="quote"></textarea>
            </div>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
                <!-- @click.prevent модификатор preventDefault -->
                <button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
            </div>
        </form>
    </div>
</template>

<script>
import { eventBus } from '../storage/storage';

export default {
    data: function () {
        return {
            quote: '', /** v-model отмечает какую проперти заполнять */
        };
    },
    methods: {
        createNew: function () {
            eventBus.addQuote(this.quote);
            this.quote = '';

            return this;
        }
    },
}
</script>

<style>

</style>