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
    initCart(state, cart) {
        state.cart = cart;
    },
    initTotalPrice(state, totalPrice) {
      state.totalPrice = totalPrice;
    },
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
            state.totalPrice = Number(state.totalPrice) + Number(product.price);
        } else {
            state.cart.push(product);
            state.totalPrice = Number(state.totalPrice) + Number(product.price);
            Vue.set(product, 'quantity', 1);
            Vue.set(product, 'totalPrice', product.price);
        }        
        state.cartCount++;
        console.log(state.cart.length)
        this.$cookies.set('cart', state.cart, {path: '/', maxAge: 60 * 60 * 24 * 7});
        this.$cookies.set('totalPrice', state.totalPrice, {path: '/', maxAge: 60 * 60 * 24 * 7});
    },
    removeFromCart (state, product) {
        state.cart = state.cart.filter(prod => prod.id !== product.id);
        state.totalPrice = Number(state.totalPrice) - Number(product.price) * Number(product.quantity);
        state.cartCount = state.cartCount - product.quantity;
        this.$cookies.set('cart', state.cart, {path: '/', maxAge: 60 * 60 * 24 * 7});
        this.$cookies.set('totalPrice', state.totalPrice, {path: '/', maxAge: 60 * 60 * 24 * 7});


    },
    incrementCartItem(state, product) {
        let found = state.cart.find(cartItem => cartItem.id == product.id);
        found.quantity++;        
        found.totalPrice = found.quantity * found.price;
        state.cartCount++;
        state.totalPrice = Number(state.totalPrice) + Number(product.price);
        this.$cookies.set('cart', state.cart, {path: '/', maxAge: 60 * 60 * 24 * 7});
        this.$cookies.set('totalPrice', state.totalPrice, {path: '/', maxAge: 60 * 60 * 24 * 7});     
    },
    decrementCartItem(state, product){
        let found = state.cart.find(cartItem => cartItem.id == product.id);
        found.quantity--;
        state.cartCount--;
        found.totalPrice = found.quantity * found.price;
        if (found.quantity===0){
            state.cartCount = state.cartCount -  found.quantity;
            state.cart = state.cart.filter(prod => prod.id !== product.id);
        }
        state.totalPrice = Number(state.totalPrice) - Number(product.price);
        this.$cookies.set('cart', state.cart, {path: '/', maxAge: 60 * 60 * 24 * 7});
        this.$cookies.set('totalPrice', state.totalPrice, {path: '/', maxAge: 60 * 60 * 24 * 7});
    },
}

export const actions = {
    nuxtServerInit({commit}, {req}) {   
      //инициализация корзины
      if (this.$cookies.get('cart')) {
        let cart = this.$cookies.get('cart');
        commit('initCart', cart);
      }
      if (this.$cookies.get('totalPrice')) {
        let totalPrice = this.$cookies.get('totalPrice');
        commit('initTotalPrice', totalPrice);
      }
    }
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