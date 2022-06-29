<template>
    <section>
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
                                <button @click="addToCart(product)">Добавить</button>
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
    new Swiper('.recomendedProductSlider', {
        // preloadImages: false,
        // lazy: true,
        // loop: true,
        slidesPerView: 4.5,
        spaceBetween: 0,
        grabCursor: true,
    })    
    },    
      data() {
        return {
        input: ''
        }
    }, 
    methods: {
        addToCart(product){
            this.$store.commit('addToCart', product);
        },
    } 
}
</script>

<style lang="scss" scoped>
.recomendedProduct{
        width: 260px;
        height: 115px;
        display: flex;                
    } 
.someProducts{
    width: 100%;
    margin-bottom: 75px;
        h1{
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
        padding: 0 5px 5px 25px;
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
                color: white;
            }
            h1{
                font-size: 12.5px;
                margin-bottom: 10px;
                font-weight: 400;
            }
            h2{
                font-weight: 200;
                font-size: 14px;
                color: #bababa;
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
     .recomendedImg{
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 140px;
            height: 85px;
        }
    }
</style>