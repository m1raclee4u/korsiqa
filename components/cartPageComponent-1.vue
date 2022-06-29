<template>
    <section>
        <div class="cart">
            <div class="cartNavigation">
                <span class="spanActive">Ваш заказ</span>
                <hr class="hrActive">
                <span>Способ получения</span>
                <hr>
                <span>Подтверждение</span>
            </div>
            <div class="swiper-container cartSlider">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" 
                    v-for="product in $store.state.cartArray" 
                    :key="product.id"                    
                    >
                        <div class="cartProduct">
                            <div class="img">
                                <img :src="require('../static/burger_menu_item/' + product.image)" alt="" class="menu__item__back" v-if="product.size !== 'big'">
                                <img :src="require('../static/burger_menu_item_big/' + product.image)" alt="" class="menu__item__back" v-else>
                            </div>                           
                            <div class="cartInfo">
                                <h1>{{product.name}}</h1>
                                <h2>{{product.weight}} гр</h2>
                                <div class="priceAndQuantitiy">
                                    <div class="price">
                                        <span>{{product.totalPrice}} ₽</span>                                
                                    </div>
                                    <div class="quantity">
                                        <button @click="$store.commit('decrementCartItem', product)">-</button>
                                        <button>{{product.quantity}}</button>
                                        <button @click="$store.commit('incrementCartItem', product)">+</button>
                                    </div>
                                </div>
                                <h3 @click="$store.commit('removeFromCart', product)">УДАЛИТЬ</h3>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide" :class="{opacity: $store.state.cartArray.length > 0}">
                        <Nuxt-Link to="/" class="addProduct">                                
                            <span>Добавьте <br> еще что-нибудь</span>
                            <img :src="require('../static/1270001.svg')" alt="" style="width: 35px; height: 35px">

                        </Nuxt-Link>
                    </div>
                    <div v-if="$store.state.cartArray.length <= 3" class="swiper-slide" :class="{opacity: $store.state.cartArray.length > 0}">
                        <Nuxt-Link to="/" class="addProduct">                                
                            <span>Добавьте <br> еще что-нибудь</span>
                            <img :src="require('../static/1270001.svg')" alt="" style="width: 35px; height: 35px">
                        </Nuxt-Link>
                    </div>
                    <div v-if="$store.state.cartArray.length <= 2" class="swiper-slide" :class="{opacity: $store.state.cartArray.length > 0}">
                        <Nuxt-Link to="/" class="addProduct">                                
                            <span>Добавьте <br> еще что-нибудь</span>
                            <img :src="require('../static/1270001.svg')" alt="" style="width: 35px; height: 35px">
                        </Nuxt-Link>
                    </div>
                </div>
            </div>
        </div>
       
    </section>
</template>

<script>
import Swiper, { Navigation, Pagination, EffectCoverflow } from 'swiper'
import 'swiper/swiper-bundle.css'

Swiper.use([ Navigation, Pagination, EffectCoverflow ])

export default {
     mounted() {
      new Swiper('.cartSlider', {
        // preloadImages: false,
        // lazy: true,
        // loop: true,
        slidesPerView: 4.5,
        spaceBetween: 30,
        grabCursor: true,
    })
    }, 
     updated() {
      new Swiper('.cartSlider', {
        // preloadImages: false,
        // lazy: true,
        // loop: true,
        slidesPerView: 4.5,
        spaceBetween: 30,
        grabCursor: true,
    })
    }, 
    methods: {
        
    },
    
    
}
</script>

<style lang="scss" scoped>
    
    button{
        border-radius: 2px;
        margin: 0 -6px !important;
        width: 35px;
        height: 35px;
        padding: 0 !important;
        color: white;
        font-weight: 300;
        background-color: #3c3c3c;
    }    
    .cartSlider{
        width: 100%;
        display: flex;
        flex-direction: row;
    }
    .cartInfo{        
        padding: 0 35px 20px 35px;
        height: 185px;
        align-items: center;
        justify-content: start;
            h1{
                font-size: 17px;
                margin-bottom: 10px;
                font-weight: 400;
            }
            h2{
                margin-bottom: 35px;
                font-weight: 500;
                font-size: 12.5px;
                color: #bababa;
            }
            h4{
                // height: 400px;
                // text-align: center;
            }
            h3 {
                width: 50px;
                height: 20px;
                color: orangered;
                font-size: 11px;
                font-weight: 400;
                text-align: center;
                cursor: pointer;
                    &:hover{
                        font-weight: 500;
                        // color: orangered;
                        // font-size: 12px;
                        // transform: translate3d(0px, -0.5px, 0px);
                    }
            }
            .priceAndQuantitiy{
                margin-bottom: 35px;
            }
    }    
    .price {
        span {
            font-size: 25px;
            color: white;
        }
    }
    .priceAndQuantitiy{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .cartProduct{
        width: 265px;
        height: 430px;
        background-color: #252525;
        display: flex;
        flex-direction: column;                   
    }
       
    .opacity {
        opacity: 0.8;
    }
    .addProduct{
        width: 265px;
        height: 430px;
        background-color: #252525;
        display: flex;
        flex-direction: column; 
        justify-content: center;
        align-items: center;
            
            span {
                // font-weight: 300;
                padding: 15px;
                font-size: 28px;
                text-align: center;
            }
    }
   
    .img{
        height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
        height: 150px;
        width: 228px;
        }
    }
    span{
        font-size: 13px;
        font-weight: 300;
        color: #535353;        
    }
    .spanActive{
        color: rgb(255, 89, 0);
    }
    hr{
        max-width: 420px;
        width: 100%;
        height: 1px;
        border-width: 0px;
        background-image: linear-gradient(to left, transparent, rgb(53, 53, 53));        
    }
    .hrActive{
        background-image: linear-gradient(to left, transparent, rgb(255, 89, 0));
    }
    .cart{
        width: 100%;
        margin-top: 180px;
        height: 570px;        
    }
    .cartNavigation{
        display: flex;
        justify-content: space-between;
        margin-bottom: 65px;
        
        
    }
</style>