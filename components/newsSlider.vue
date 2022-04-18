<template>
    <section class="flex swiper-container newsSlider ">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
          <!-- Slides -->
          <oneNews v-for="item in items" :text="item.message" :key="item.message"></oneNews>
      </div>
    </section>
        
</template>

<style>
.swiper-container{
    overflow: hidden;
    height: 300px;    
}
.newsSlider{
    margin-bottom: 100px;
}
</style>


<script>
import oneNews from './oneNews.vue'

import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'

Swiper.use([ Navigation, Pagination ])

export default {
    mounted() {
    new Swiper('.newsSlider', {
      // loop: true,
      slidesPerView: 5.5,
      spaceBetween: 15,
    })
    },
    data(){
        return{
            items: [
                { message: 'Весенние скидки' },
                { message: 'Оплата Visa и MasterCard работает как обычно' },
                { message: 'Вечер с кино и пиццей' },
                { message: 'Выгодная пара' },
                { message: 'Вкуснейшая горячая пицца'},
                { message: 'Новость что темич пидор' },
                { message: 'Новость что темич пидор' }


            ]
        }
    },
    
    components: {
        oneNews
    }
}
</script>


