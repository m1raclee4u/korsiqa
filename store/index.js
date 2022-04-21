export const state = () => ({
    isVisibleBasket: false,
    backetCount: 0,
    basketItems: [
        { name: 'Индейка в мандаринах', weight: '350г' },
        { name: 'Карбонара', weight: '350г' },
        { name: 'Индейка в мандаринах', weight: '350г' },
        { name: 'Карбонара', weight: '350г' },
        { name: 'Индейка в мандаринах', weight: '350г' },
        { name: 'Карбонара', weight: '350г' },                
    ],
    
  })
  
  export const mutations = {
    basketCounе(state, count){
      state.backetCount=count
    },
    basketCountIncrement(state){
        state.backetCount++
    },
    basketCountDecrement(state){
      state.backetCount--
  },
    changeBasket(state, basket) {
        state.isVisibleBasket=basket
    }
  }