<template>
    <section class="flex swiper-container newsSlider ">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
          <!-- Slides -->
          <oneNews v-for="item in items" :news="item" :key="item.message"></oneNews>
      </div>
    </section>
        
</template>

<style>
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
    async mounted() {
    new Swiper('.newsSlider', {
      // loop: true,
      slidesPerView: 5.5,
      spaceBetween: 15,
    })
    },
    data(){
        return{
            items: [
                { text: '', image: 'https://cdn.inappstory.com/story/g0e/s1f/rho/0bpscotay70ydam9bgtchya/custom_cover/logo-350x440.jpg?v=1649258385' },
                { text: '', image: 'https://cdn.inappstory.com/story/9bk/nmf/klp/r9q8wwyheizyuevi9qvt41b/custom_cover/logo-350x440.jpg?v=1649437269' },
                { text: '', image: 'https://cdn.inappstory.com/story/8hi/pq3/9lv/9t6qhpdqwwnvzh7m0ipvnqr/custom_cover/logo-350x440.jpg?v=1648212169' },
                { text: '', image: 'https://cdn.inappstory.com/story/ois/n3y/rhy/cgpomforbawtzowiyx7wqdx/custom_cover/logo-350x440.jpg?v=1649681715' },
                { text: '', image: 'https://cdn.inappstory.com/story/xfm/kcz/x3p/r9b2d1ig02dnwrky2pk3rfd/custom_cover/logo-350x440.jpg?v=1649412228' },
                { text: '', image: 'https://cdn.inappstory.com/story/7b1/klx/v6x/riexe9inqj0gzjbxeuvvwlf/custom_cover/logo-350x440.jpg?v=1649147602' },
                { text: '', image: 'https://cdn.inappstory.com/story/x1f/7kc/4hw/cljap6wqho3arthkvw43gnh/custom_cover/logo-350x440.jpg?v=1646887150' },
                { text: '', image: 'https://cdn.inappstory.com/story/sv6/jdc/cv5/muwb75c4lcaimnb9kopmc31/custom_cover/logo-350x440.jpg?v=1646478650' },
                

            ]
        }
    },
    
    components: {
        oneNews
    }
}
</script>


