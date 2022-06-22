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
                        </Nuxt-Link>
                    </div>
                    <div v-if="$store.state.cartArray.length <= 3" class="swiper-slide" :class="{opacity: $store.state.cartArray.length > 0}">
                        <Nuxt-Link to="/" class="addProduct">                                
                            <span>Добавьте <br> еще что-нибудь</span>
                        </Nuxt-Link>
                    </div>
                    <div v-if="$store.state.cartArray.length <= 2" class="swiper-slide" :class="{opacity: $store.state.cartArray.length > 0}">
                        <Nuxt-Link to="/" class="addProduct">                                
                            <span>Добавьте <br> еще что-нибудь</span>
                        </Nuxt-Link>
                    </div>
                </div>
            </div>
        </div>
        <div class="someProducts">
            <h1>Рекомендуем к вашему заказу</h1>
           <div class="swiper-container recomendedProductSlider">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" 
                    v-for="product in $store.state.products" 
                    :key="product.id"          
                    >
                        <div class="recomendedProduct">
                            <div class="recomendedImg">
                                <img :src="require('../static/burger_menu_item/' + product.image)" alt="" class="menu__item__back" v-if="product.size !== 'big'">
                                <img :src="require('../static/burger_menu_item_big/' + product.image)" alt="" class="menu__item__back" v-else>
                            </div>                           
                            <div class="recomendedProductInfo">
                                <div class="recomendedPriceAndQuantitiy">
                                    <h1>{{product.name}}</h1>
                                    <div class="recomendedProductInfo__numbers">
                                        <span>{{product.price}} ₽</span>, &nbsp;
                                        <h2> {{product.weight}}</h2>     &nbsp;      
                                        <h2 v-if="product.tag !== 'Напитки'">г</h2>                   
                                    </div>
                                </div>
                                <button @click="addToCart">Добавить</button>
                            </div>
                        </div>
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
    }),
    new Swiper('.recomendedProductSlider', {
        // preloadImages: false,
        // lazy: true,
        // loop: true,
        slidesPerView: 4.5,
        spaceBetween: 60,
        grabCursor: true,
    })
    }, 
    methods: {
        addToCart(product){
            this.$store.commit('addToCart', product);
        },
    }
    
}
</script>

<style lang="scss" scoped>
    .someProducts{
        h1{
            margin-bottom: 35px;
        }
    }
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
                color: orangered;
                font-size: 11px;
                font-weight: 400;
            }
            .priceAndQuantitiy{
                margin-bottom: 35px;
            }
    }
    .recomendedProductInfo__numbers{
        align-items: center;
        color: white;
        display: flex;
            span{
                font-size: 14px;
                color: white;
            }
            h2{
                font-size: 14px;
                font-weight: 100;
            }
    }
    .recomendedProductInfo{        
        padding: 0 5px 5px 15px;
        // height: 185px;
        width: 150px;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-between;
            button{
                background-color: orangered;
                width: 111px;
                height: 42px;
                margin: 0 !important;
            }
            h1{
                font-size: 12.5px;
                margin-bottom: 10px;
                font-weight: 400;
            }
            h2{
                font-weight: 500;
                font-size: 12.5px;
                color: #bababa;
            }
            h4{
                // height: 400px;
                // text-align: center;
            }
            h3 {
                color: orangered;
                font-size: 11px;
                font-weight: 400;
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
    .recomendedProduct{
        width: 233px;
        height: 115px;
        display: flex;                
    }    
    .opacity {
        opacity: 0.8;
    }
    .addProduct{
        width: 265px;
        height: 436px;
        background-color: #252525;
        display: flex;
        flex-direction: column; 
        justify-content: center;
            
            span {
                padding: 15px;
                font-size: 28px;
                text-align: center;
            }
    }
    .recomendedImg{
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 140px;
            height: 85px;
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
        margin-top: 180px;
        height: 570px;        
    }
    .cartNavigation{
        display: flex;
        justify-content: space-between;
        margin-bottom: 65px;
        
        
    }
</style>