export const state = () => ({
    isVisibleBasket: false,
    backetCount: 0,
    menuItems: [],
    basketItems: [],
    
  })
  
  export const mutations = {
    basketCount(state, count){
      state.backetCount=count
    },
    basketCountIncrement(state){
        state.backetCount++
    },
    basketCountDecrement(state){
      state.backetCount--
    },
    openBasket(state, basket) {
        state.isVisibleBasket=basket
    }
  }