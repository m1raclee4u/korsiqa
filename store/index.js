import Vue from 'vue'



export const state = () => ({
  isVisibleBasket: false,
  cart: [],
  cartCount: 0,
  totalPrice: 0,
  cartArray: [],
  products: [
    {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: '4',
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
    id: '5',
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
    id: '6',
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
    id: '7',
    quantity: '1',
    name: 'Какое-то название бургера',
    info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
    image:'productBig.png',
    type: 'premium',
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
    id: '8',
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
    id: '9',
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
    id: '10',
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
    id: '11',
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
        if (state.cart.length !== 0){
          for (let i in state.cart) {
            let prodID = state.products.find(el => Number(el.id) === Number(state.cart[i].id));
            prodID.quantity = state.cart[i].quantity;
            state.cartArray.push(prodID);
            //Vue.set(state.cartArray[i], 'quantity', state.cart[i].quantity)
            console.log(state.cartArray);
          }
        }
        
    },
    initTotalPrice(state, totalPrice) {
      state.totalPrice = totalPrice;
    },
    openBasket(state, basket) {
      state.isVisibleBasket=basket;
      // console.log(state.cart);

      

      // for (let id in state.cart) {
      //   let product = state.products.find(id);
      // }
      //   state.cartArray.push(push);        
      // }

      // let found = state.cart.find(prod => prod.id === product.id);
      
    },
    changeNavigationPizza(state, name) {
      state.selected=name
    },
    addToCart(state, product) {
      let tempCart = state.cart;
      let found = state.cartArray.find(prod => prod.id === product.id);

      if (found) {
        tempCart.filter(el=>el.id==product.id)[0].quantity++;
      } else {
        tempCart.push({
          id: product.id,
          quantity: 1
        });
            Vue.set(product, 'totalPrice', product.price);

      
      }
      state.cart = tempCart;
      this.$cookies.set('cart', state.cart, {path: '/', maxAge: 60 * 60 * 24 * 7});
      
      // state.cart[product.id] = 1;
      // ÷  let found = state.cartArray.find(prod => prod.id === product.id);


        // if (found) {
        //     found.quantity ++; 
        //     found.totalPrice = found.quantity * found.price;
        //     state.totalPrice = Number(state.totalPrice) + Number(product.price);
        //     console.log(state.cart);
        //     this.$cookies.set('cart', state.cart, {path: '/', maxAge: 60 * 60 * 24 * 7});
        //     this.$cookies.set('totalPrice', state.totalPrice, {path: '/', maxAge: 60 * 60 * 24 * 7});
        // } else {
        //     state.cartArray.push([Number(product.id), Number(product.quantity)]);
        //     state.totalPrice = Number(state.totalPrice) + Number(product.price);
        //     Vue.set(product, 'quantity', 1);
        //     Vue.set(product, 'totalPrice', product.price);
        //     this.$cookies.set('cart', state.cart, {path: '/', maxAge: 60 * 60 * 24 * 7});
        //     this.$cookies.set('totalPrice', state.totalPrice, {path: '/', maxAge: 60 * 60 * 24 * 7});
        // }        
        // state.cartCount++;
        // console.log(state.cartArray.length)
    },
    removeFromCart (state, product) {
        state.cart = state.cartArray.filter(prod => prod.id !== product.id);
        state.totalPrice = Number(state.totalPrice) - (Number(product.price) * Number(product.quantity));
        // // state.cartCount = state.cartCount - product.quantity;
        this.$cookies.set('cart', state.cart, {path: '/', maxAge: 60 * 60 * 24 * 7});
        this.$cookies.set('totalPrice', state.totalPrice, {path: '/', maxAge: 60 * 60 * 24 * 7});


    },
    incrementCartItem(state, product) {
        let found = state.cartArray.find(cartItem => cartItem.id == product.id);
        found.quantity++;        
        found.totalPrice = found.quantity * found.price;
        // state.cartCount++;
        state.totalPrice = Number(state.totalPrice) + Number(product.price);
        this.$cookies.set('cart', state.cart, {path: '/', maxAge: 60 * 60 * 24 * 7});
        this.$cookies.set('totalPrice', state.totalPrice, {path: '/', maxAge: 60 * 60 * 24 * 7});     
    },
    decrementCartItem(state, product){
        let found = state.cartArray.find(cartItem => cartItem.id == product.id);
        found.quantity--;
        // state.cartCount--;
        found.totalPrice = found.quantity * found.price;
        if (found.quantity===0){
            // // state.cartCount = state.cartCount -  found.quantity;
            state.cart = state.cartArray.filter(prod => prod.id !== product.id);
            state.totalPrice = Number(state.totalPrice) - (Number(product.price) * Number(product.quantity));
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
        state.cartCount++;
//       },       
//       openBasket(state, basket) {
//         state.isVisibleBasket=basket
//       }    
//   }
// };   

// export default store;