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
                                <h2>{{product.weight}} г</h2>
                                <div class="priceAndQuantitiy">
                                    <div class="price">
                                        <span>{{product.totalPrice}} ₽</span>                                
                                    </div>
                                    <div class="quantity">
                                        <button @click="$store.commit('decrementCartItem', product)">-</button>
                                        <span>{{product.quantity}}</span>
                                        <button @click="$store.commit('incrementCartItem', product)">+</button>
                                    </div>
                                </div>
                                <h3 @click="$store.commit('removeFromCart', product)">Delete</h3>
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
      preloadImages: false,
      lazy: true,
      // loop: true,
      slidesPerView: 4.5,
      spaceBetween: 30,
      grabCursor: true,
    })
    },
}
</script>

<style lang="scss" scoped>
    .cartSlider{
        display: flex;
        flex-direction: row;
    }
    .cartInfo{
        
        padding: 35px;
        height: 185px;
        align-items: center;
        justify-content: start;
            h1{
                margin-bottom: 10px;
                font-weight: 400;
            }
            h2{
                margin-bottom: 35px;
                font-weight: 400;
                font-size: 13px;
                color: white;
            }
            .priceAndQuantitiy{
                margin-bottom: 35px;
            }
    }
    .priceAndQuantitiy{
        display: flex;
        justify-content: space-between;
    }
    .cartProduct{
        width: 265px;
        height: 436px;
        background-color: #252525;
        display: flex;
        flex-direction: column;        
           
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
        height: 700px;        
    }
    .cartNavigation{
        display: flex;
        justify-content: space-between;
        margin-bottom: 65px;
        
        
    }
</style>