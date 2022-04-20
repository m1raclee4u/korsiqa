<template>
    <section class="main">                
        <div class="content flex">
            <div class="left">
                <h2 class="slogan">
                    Вкусно. <br> Празднично. <br> Экономно.
                </h2>
                <button class="food_buy">
                    <span>Хочу прямо сейчас</span>
                </button>
            </div>       
            <div class="light">
                <div class="swiper-container foodswiper">
                    <div class="swiper-wrapper">
                    <oneSlide v-for="item in items" :product="item" :key="item.message"></oneSlide>
                    </div>
                    <!-- If we need pagination -->
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import oneSlide from './oneSlide.vue'

import Swiper, { Navigation, Pagination, EffectCoverflow } from 'swiper'
import 'swiper/swiper-bundle.css'

Swiper.use([ Navigation, Pagination, EffectCoverflow ])

export default {
     mounted() {
      new Swiper('.foodswiper', {
      preloadImages: false,
      lazy: true,
      // loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      effect: 'coverflow',
      coverflowEffect: {
          modifier: 1,
          slideShadows: false
      },
      grabCursor: true,      
      pagination: {
      el: '.swiper-pagination',
      },
    })
    },
    data(){
        return{
            items: [
                { 
                name: 'Вкусняшка',
                info: '30см, 500г',
                text: 'huy', 
                image: '/_nuxt/static/burger__slide_one.png',
                price: '599P',
                },
                { 
                name: 'Вкусняшка',
                info: '30см, 500г',
                text: 'huy', 
                image: '/_nuxt/static/burger__slide_one.png',
                price: '599P',
                },
            ]
        }
    },
    components: {
        oneSlide
    }
}
</script>


<style lang="scss" scoped>
    .food_buy{
        background-color: orangered;
        padding: 20px 15px;
            span{
                color: white;
                font-size: 18px;
                font-weight: 300;
            }

    }
    .swiper-pagination {
        text-align: right;
    }


    .main{
        margin-bottom: 100px;
    }    
    .left{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 435px;
    }
    .content{        
        align-items: center;
        justify-content: space-between;
    }
    .slogan{
        font-size: 70px;
        font-weight: 400;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        line-height: 80px;
        color: white;
    }
    .swiper-container{
        height: 435px;
        width: 690px;
        position: relative;
        margin: 0;
    }
    .light{
        // position: absolute;
        filter: drop-shadow(0 0 120px #ffd46866);
    }
</style>
