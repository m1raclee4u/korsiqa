export const state = () => ({
    isVisibleBasket: false,
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
    changeBasket(state, basket) {
        state.isVisibleBasket=basket
    }
  }