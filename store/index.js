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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
      state.cartArray = state.cartArray.splice(-1, state.cartArray.lenght)
      for (let i in state.cart) {
        let prodID = state.products.find(el => Number(el.id) === Number(state.cart[i].id));
        prodID.quantity = state.cart[i].quantity;
        state.cartArray.push(prodID);
        console.log(state.cartArray);            
        let totalPrice = state.cartArray[i].quantity * state.cartArray[i].price;
        Vue.set(state.cartArray[i], 'totalPrice', totalPrice);          
        // Vue.set(product, 'totalPrice', product.price);
    }     
          
  },
  pushToCartArray (state) {
    
  },
  initTotalPrice(state, totalPrice) {
    state.totalPrice = totalPrice;
  },
  openBasket(state, basket) {
    state.isVisibleBasket=basket;
  },
  changeNavigationPizza(state, name) {
    state.selected=name
  },
  addToCart(state, product) {
    let tempCart = state.cart;
    let found = state.cart.find(prod => prod.id === product.id);
    console.log(found);
    if (found) {
      tempCart.filter(el=>el.id==product.id)[0].quantity++;
    } else {
      tempCart.push({
        id: product.id,
        quantity: 1
      });
    }
    state.cart = tempCart;      
    this.$cookies.set('cart', state.cart, {path: '/', maxAge: 60 * 60 * 24 * 7});
    state.cartArray = state.cartArray.splice(-1, state.cartArray.lenght);
    // state.cartArray.lenght = 1;
      for (let i in state.cart) {
        let prodID = state.products.find(el => Number(el.id) === Number(state.cart[i].id));
        prodID.quantity = state.cart[i].quantity;
        state.cartArray.push(prodID);
        console.log(state.cartArray);            
        let totalPrice = state.cartArray[i].quantity * state.cartArray[i].price;
        Vue.set(state.cartArray[i], 'totalPrice', totalPrice);          
        // Vue.set(product, 'totalPrice', product.price);
    }     
  },
  removeFromCart (state, product) {
    state.cart = state.cart.filter(prod => prod.id !== product.id);
    this.$cookies.set('cart', state.cart, {path: '/', maxAge: 60 * 60 * 24 * 7});   
    state.cartArray = state.cartArray.splice(-1, state.cartArray.lenght)
      for (let i in state.cart) {
        let prodID = state.products.find(el => Number(el.id) === Number(state.cart[i].id));
        prodID.quantity = state.cart[i].quantity;
        state.cartArray.push(prodID);
        console.log(state.cartArray);            
        let totalPrice = state.cartArray[i].quantity * state.cartArray[i].price;
        Vue.set(state.cartArray[i], 'totalPrice', totalPrice);          
        // Vue.set(product, 'totalPrice', product.price);
    }     
  },
  incrementCartItem(state, product) {
    let found = state.cart.find(cartItem => cartItem.id == product.id);
    found.quantity++;        
    this.$cookies.set('cart', state.cart, {path: '/', maxAge: 60 * 60 * 24 * 7});
    state.cartArray = state.cartArray.splice(-1, state.cartArray.lenght)
      for (let i in state.cart) {
        let prodID = state.products.find(el => Number(el.id) === Number(state.cart[i].id));
        prodID.quantity = state.cart[i].quantity;
        state.cartArray.push(prodID);
        console.log(state.cartArray);            
        let totalPrice = state.cartArray[i].quantity * state.cartArray[i].price;
        Vue.set(state.cartArray[i], 'totalPrice', totalPrice);          
        // Vue.set(product, 'totalPrice', product.price);
    }     
  },
  decrementCartItem(state, product){
    let found = state.cart.find(cartItem => cartItem.id == product.id);
    found.quantity--;
    if (found.quantity===0){
        state.cart = state.cart.filter(prod => prod.id !== product.id);
    }
    this.$cookies.set('cart', state.cart, {path: '/', maxAge: 60 * 60 * 24 * 7});
    state.cartArray = state.cartArray.splice(-1, state.cartArray.lenght)
      for (let i in state.cart) {
        let prodID = state.products.find(el => Number(el.id) === Number(state.cart[i].id));
        prodID.quantity = state.cart[i].quantity;
        state.cartArray.push(prodID);
        console.log(state.cartArray);            
        let totalPrice = state.cartArray[i].quantity * state.cartArray[i].price;
        Vue.set(state.cartArray[i], 'totalPrice', totalPrice);          
        // Vue.set(product, 'totalPrice', product.price);
    }     
  },
}

export const actions = {
  nuxtServerInit({commit}) {   
    //инициализация корзины
    if (this.$cookies.get('cart')) {
      let cart = this.$cookies.get('cart');
      commit('initCart', cart);
      // commit('pushToCartArray');     
    }
  },
}

export const getters = {
    
}
