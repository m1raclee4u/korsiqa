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
            <button class="food_buy_laptop">
                <span>Хочу прямо сейчас</span>
            </button>
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
                image: 'burger__slide_one.png',
                price: '599P',
                },
                { 
                name: 'Вкусняшка',
                info: '30см, 500г',
                text: 'huy', 
                image: 'burger__slide_one.png',
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
        margin-top: 235px;
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
        width: 653px;
        position: relative;
        margin: 0;
    }
    .light{
        // position: absolute;
        filter: drop-shadow(0 0 350px #fcd65bc2);
    }
    .food_buy_laptop{
        display: none;
        background-color: orangered;
        padding: 20px 15px;
            span{
                color: white;
                font-size: 18px;
                font-weight: 300;
            }

    }


    // ------------------------------media

 @media screen and (min-width: 768px) and (max-width:1279px) {
     .main{
         margin-top: 0;
     }
     .slogan{
         font-size: 40px;
         line-height: 48px;
     }
     .left{
         height: 250px;
     }
     .food_buy_laptop{
        //  display: block;
         width: 100%;
         margin-top: 100px;
    }
    .swiper-container{
        height: 250px;
        width: 470px;
        position: relative;
        margin: 0;
    }
    
 }

  @media screen and (min-width: 320px) and (max-width:767px) {
     .left{
         display: none;
     }
 }

 



</style>
