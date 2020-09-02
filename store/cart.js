export const state = () => ({
  cart: [],
  total: 0,
})

export const mutations = {
  addItem(state, payload) {
    state.cart.push(payload);
    this.commit('hall/addSelectedFlag',{
      seatId: payload.seatId,
      rowId: payload.rowId,
    }, { root: true });
  },
  removeItem(state, payload) {
    const index = state.cart.findIndex(t => t.seatId === payload.seatId);
    state.cart.splice(index, 1);
    this.commit('hall/removeSelectedFlag',{
      seatId: payload.seatId,
      rowId: payload.rowId,
    }, { root: true });
    // console.log(seatId);

  },
  calculateTotal(state) {
   state.total = state.cart.reduce((acc, current) => {
      return acc + current.price;
    }, 0)
  },
}
export const actions = {

};

export const getters = {
  cart: (state) => state.cart,
  total: (state) => state.total,
}
