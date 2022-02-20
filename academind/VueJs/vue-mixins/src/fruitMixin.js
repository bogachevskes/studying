/**
 * При подключении mixin копируется в каждый инстанст.
 * его изменения происходят исключительно в рамках копии.
 */

export const fruitMixin = {
    data: function () {
        return {
            fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
            filterText: '',
        };
    },
    computed: {
        filteredFruits: function () {
            return this.fruits.filter((element) => {
                return element.match(this.filterText);
            });
        },
    },
    created: function () {
        console.log('mixin created');
    }
}