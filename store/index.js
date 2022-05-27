import Vue from 'vue'



export const state = () => ({
  isVisibleBasket: false,
  cart: [],
  cartCount: 0,
})

export const mutations = {
    openBasket(state, basket) {
      state.isVisibleBasket=basket
    },
    addToCart(state, menuItem) {
        let found = state.cart.find(product => product.id == menuItem.id);
        
        if (found) {
            found.quantity ++;
            found.totalPrice = found.quantity * found.price;
            console.log(found.quantity);
        } else {
            state.cart.push(menuItem);
            Vue.set(menuItem, 'quantity', 1);
            Vue.set(menuItem, 'totalPrice', menuItem.price);
        }        
        state.cartCount++;
        this.commit('saveCart');
    },
    saveCart(state) {
      window.localStorage.setItem('cart', JSON.stringify(state.cart));
      window.localStorage.setItem('cartCount', state.cartCount);
    }
  }

export const actions = {

}

export const getters = {
    
}


// let store = {
//   state: {
//       isVisibleBasket: false,
//       cart: [],
//       cartCount: 0,
//   },

//   mutations: {
//       addToCart(state, menuItem) {
//         state.cart.push(menuItem);
//         console.log(menuItem.name);
//         state.cartCount++;
//       },       
//       openBasket(state, basket) {
//         state.isVisibleBasket=basket
//       }    
//   }
// };   

// export default store;