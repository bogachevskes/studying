export const updateValue = (context, payload) => {
    context.commit('updateValue', payload);

    return this;
}