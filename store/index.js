import Vue from 'vue'



export const state = () => ({
  isVisibleBasket: false,
  cart: [],
  cartCount: 0,
  totalPrice: 0,
  products: [
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
    image:'productBig.png',
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
  items: [
    { message: 'Все'},
    { message: 'Акции'},
    { message: 'Мясные'},
    { message: 'Вегетарианские'},
    { message: 'Морские и Рыбные'},
    { message: 'Закрытые'},
    { message: 'Гриль'},
    { message: 'Острые'},
    { message: 'Акция'}
  ],            
  selected: 'Все',
})

export const mutations = {
    openBasket(state, basket) {
      state.isVisibleBasket=basket
    },
    changeNavigationPizza(state, name) {
      state.selected=name
    },
    addToCart(state, product) {
        let found = state.cart.find(cartItem => cartItem.id === product.id);

        if (found) {
            found.quantity ++;
            found.totalPrice = found.quantity * found.price;
            console.log(found.quantity);
        } else {
            state.cart.push(product);
            Vue.set(product, 'quantity', 1);
            Vue.set(product, 'totalPrice', product.price);
        }        
        state.cartCount++;
    },
    removeFromCart (state, product) {
        // let found = state.cart.find(cartItem => cartItem.id == product.id);
        // state.cartCount = state.cartCount -  found.quantity;
        state.cart = state.cart.filter(prod => prod.id == product.id);
        // state.cart = state.cart.filter(cart => cart === product.id);
    },
    incrementCartItem(state) {
        let found = state.cart.find(cartItem => cartItem.id == product.id);
        found.quantity++;        
        state.cartCount++;
    },
    decrementCartItem(state, product){
        let found = state.cart.find(cartItem => cartItem.id == product.id);
        found.quantity--;
        state.cartCount--;
        if (found.quantity===0){
            state.cartCount = state.cartCount -  found.quantity;
            state.cart = state.cart.filter(cart => cart === product);
        }
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
//       addToCart(state, product) {
//         state.cart.push(product);
//         console.log(product.name);
//         state.cartCount++;
//       },       
//       openBasket(state, basket) {
//         state.isVisibleBasket=basket
//       }    
//   }
// };   

// export default store;