export const state = () => ({
    isVisibleBasket: false
  })
  
  export const mutations = {
    changeBasket(state, basket) {
        state.isVisibleBasket=basket
    }
  }