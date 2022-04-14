<template>
    <div class="news_slider flex swiper">   
        <oneNews v-for="item in items" :text="item.message" :key="item.message"></oneNews>
    </div>    
</template>

<style>
.news_slider{
    margin-bottom: 100px;
}
</style>


<script>
import oneNews from './oneNews.vue'
export default {
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


