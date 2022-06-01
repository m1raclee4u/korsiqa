import Vue from 'vue'



export const state = () => ({
  isVisibleBasket: false,
  cart: [],
  cartCount: 0,
  menuItems: [
    {
    id: 'pizza_1',
    quantity: '1',
    name: 'Индейка в мандаринах',
    info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
    image:'indeika.png', 
    // type: 'hot',
    price: '369',
    weight: '228',
    priceOld: '469',
     tag: [                    
        'Мясные',
        'Вегетарианские'
    ]
    },
    {
    id: 'pizza_2',
    quantity: '1',
    name: 'Пепперони фреш',
    info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
    image:'indeika.png', 
    type: 'hot',
    price: '289',
    weight: '228',             
     tag: [                    
        'Мясные',
        'Вегетарианские'
    ]
    },
    {
    id: 'pizza_3',
    quantity: '1',
    name: 'Двойной цыпленок',
    info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
    image:'indeika.png', 
    // type: 'hot',
    price: '339',
    weight: '228',
     tag: [                    
        'Мясные',
        'Вегетарианские'
    ]
    },
    {
    id: 'pizza_4',
    quantity: '1',
    name: 'Индейка в мандаринах',
    info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
    image:'indeika.png', 
    // type: 'hot',
    price: '469',
    weight: '228',
    position: 'last',
     tag: [                    
        'Мясные',
        'Вегетарианские'
    ]
    },
    {
    id: 'pizza_5',
    quantity: '1',
    name: 'Индейка в мандаринах',
    info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
    image:'indeika.png', 
    type: 'new',
    price: '469',
    weight: '228',
     tag: [                    
        'Мясные',
        'Вегетарианские'
    ]
    },
    {
    id: 'pizza_6',
    quantity: '1',
    name: 'Пепперони фреш',
    info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
    image:'indeika.png', 
    type: 'hot',
    // size: 'big',
    price: '289',
    weight: '228',
     tag: [                    
        'Мясные',
        'Вегетарианские'
    ]
    },
    {
    id: 'pizza_7',
    quantity: '1',
    name: 'Вкусняшка 7',
    info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
    image:'menuItemBig.png',
    type: 'hot',
    size: 'big',
    price: '559',
    weight: '228',
    priceOld: '540',
    position: 'last',
     tag: [                    
        'Мясные',
        'Акции'
    ]
    },
    {
    id: 'pizza_8',
    quantity: '1',
    name: 'Вкусняшка 5',
    info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
    image:'indeika.png', 
    type: 'hot',
    // size: 'big',
    price: '559',
    weight: '228',
     tag: [                    
        'Мясные',
        'Вегетарианские'
    ]
    },
    {
    id: 'pizza_9',
    quantity: '1',
    name: 'Вкусняшка 5',
    info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
    image:'indeika.png', 
    type: 'hot',
    // size: 'big',
    price: '559',
    weight: '228',
     tag: [                    
        'Мясные',
        'Акция'
    ]
    },
    {
    id: 'pizza_10',
    quantity: '1',
    name: 'Вкусняшка 5',
    info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
    image:'indeika.png', 
    type: 'hot',
    // size: 'big',
    price: '559',
    weight: '228',
     tag: [                    
        'Мясные',
        'Гриль'
    ]
    },
    {
    id: 'pizza_11',
    quantity: '1',
    name: 'Вкусняшка 5',
    info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
    image:'indeika.png', 
    type: 'hot',
    // size: 'big',
    price: '559',
    weight: '228',
    position: 'last',
     tag: [                    
        'Закрытые',
        'Вегетарианские'
    ]
    },
  ],
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
    },
    quantityIncrement(state, menuItem) {
      let found = state.cart.find(product => product.id == menuItem.id);
      
      if (found) {
        found.quantity ++;
      }
      
    },
    quantityDecrement(cart) {
      cart.quantity++;
    },
    
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