<template>
    <div class="basket__menu">
        <h1>Ваша корзина</h1>
        <div class="basket__slider" v-if="$store.state.cart.length > 0">            
            <div v-for="product in $store.state.cartArray" :key="product.id">
                <div class="oneBasketItem">
                    <div class="oneBasketItemBasketInfo__left">
                        <div class="oneBasketItemBasketItem__info">                
                            <h2>{{product.name}}</h2>                
                            <span>{{product.weight}} г</span>
                        </div>
                        <p> 
                            <button @click="$store.commit('decrementCartItem', product)">-</button>
                            {{product.quantity}} 
                            <button @click="$store.commit('incrementCartItem', product)">+</button>
                        </p>
                    </div>
                    <div class="oneBasketItemBasketInfo__right">
                        <button class="oneBasketItemClose" @click="$store.commit('removeFromCart', product); " >
                            X
                        </button>
                        <span>{{product.totalPrice}} ₽</span>            
                    </div>
                </div>
            </div> 
        </div>
        <div class="basket__empty" v-if="$store.state.cart.length === 0">
            <img src="https://dodopizza-a.akamaihd.net/site-static/dist/121df529925b0f43cc73.svg" alt="">
            <h3>Ой пусто</h3>
            <span>Ваша корзина пуста, откройте «Меню»
            и выберите понравившийся товар.<br>
            Мы доставим ваш заказ от 649 ₽</span>
            <button @click="$store.commit('openBasket', !$store.state.isVisibleBasket)">
                <NuxtLink to="/">Вернутся в меню</NuxtLink>                
                Вернутся в меню
            </button>
        </div>

        <footer class="basket__footer" v-if="$store.state.cart.length > 0">
            <div class="footer__price">
                <h2>Итого</h2>
                <span>{{$store.state.totalPrice}} ₽</span>
            </div>            
            <button class="basket__buy" v-if="$store.state.cart.length > 0" @click="$store.commit('openBasket', !$store.state.isVisibleBasket)">
                <Nuxt-link to="/cart" >Оформить покупку</Nuxt-link>
            </button>
        </footer>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.oneBasketItemClose{
    font-size: 15px;
    font-weight: bold;
    color: grey;
    background-color: inherit;
    text-align: right;
    padding: 0;
}
.oneBasketItem{
    display: flex;
    justify-content: space-between;
    height: 70px;
    padding: 25px 20px 25px 20px;
    border-bottom: 1px solid rgba(128, 128, 128, 0.288);
    transition: width 2s;
        
}
.oneBasketItemBasketInfo__left{
    display: flex;
    height: 70px;
    flex-direction: column;
    justify-content: space-between;
}
.oneBasketItemBasketInfo__right{
    display: flex;
    height: 70px;
    flex-direction: column;
    justify-content: space-between;
        span{
            font-size: 12.5px;
            font-weight: 700;
        }
}
.oneBasketItemBasketItem__info{
    h2{
        font-size: 15px;
        font-weight: 00;
        color: black;
        border-bottom: none !important;
    }
    span{
        font-size: 11px;
        font-weight: 400;
        color: gray;
    }

}


.basket__empty{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 20px 20px 20px;
    height: 400px;
        img{
            margin-bottom: 25px;
        }
        h3{
            font-size: 20px;
            padding: 0;
            margin-bottom: 15px;
        }
        span{
            font-size: 13px;
            margin-bottom: 25px;
            text-align: center;
        }
        button{
            padding: 10px 25px;
            background-color: orangered;
            color: white;
        }

}

.blackout{
    width: 100vh;
    height: 100vh;
}
.basket__menu{    
    -moz-user-select: none; 
    -webkit-user-select: none; 
    -ms-user-select: none; 
    user-select: none;
    position: relative;
    top: 15px;
    right: 0;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    min-height: 500px;
    // height: max-content;
    width: 300px;
    border-radius: 3px;
    background-color: #fff;
    z-index: 110;
        h1{
            font-weight: 500;
            font-size: 15px;
            color: black;
            padding-left: 20px;
            // height: 85px;
            line-height: 72px;
            border-bottom: 1px solid rgba(128, 128, 128, 0.288);
        }
}
.basket__slider{
    overflow-y: auto;
    width: 100%;
    height: 360px;  
}
.swiper-wrapper{
    border: none;            
}
.basket__footer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    height: 145px;
    border-top: 1px solid rgba(128, 128, 128, 0.288);
    padding: 0px 20px 0px 20px;
}
.footer__price{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
        h2{
            color: black;
            font-weight: 400;
            color: gray;
        }
        span{
            font-size: 20px;
            font-weight: 500;
            color: orangered;
        }
}
.basket__buy{
    padding: 15px 5px;
    color: white;
    background-color: orangered;
    cursor: pointer;
    font-size: 15px;
    font-weight: 400;
}

</style>