export const updateValue = function (state, payload = 0) {
    state.value.value = payload;
    
    return this;
};