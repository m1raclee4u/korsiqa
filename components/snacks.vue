<template>
    <section class="snacks">
        <div class="wrapper flex">
            <h1 class="snacks__title">
                Закуски и снэки
            </h1>
            <div class="snacks__slider">
                 <product v-for="item in products" :product="item" :key="item.message"></product>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .last__element{
        margin-right: 0 !important;
    }
    .snacks{
        margin-bottom: 50px;
    }
    .snacks__title{
        font-size: 25px;
        font-weight: 400;
        margin-bottom: 50px;
    }
    .wrapper{
        flex-direction: column;
    }
    .snacks__slider {
        display: flex;
        flex-wrap: wrap;
    }
    
</style>

<script>
import product from './product.vue'
export default {
    data(){
        return{
            products: [
                {
                name: 'Картошка фри',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'fries.png', 
                price: '559'
                },
                {
                name: 'Сырные палочки',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'fries.png', 
                price: '559'
                },
                {
                name: 'Куриные наггетсы',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'fries.png', 
                price: '559'
                },
                {
                name: 'Индейка в маринаде',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'fries.png', 
                price: '559',
                position: 'last'
                }
            ],

        }
    },
    components: {
        product

    }
}
</script>