<template>
    <section class="snacks">
        <div class="wrapper flex">
            <h1 class="snacks__title">
                Закуски и снэки
            </h1>
            <div class="snacks__slider">
                 <menuItem v-for="item in menuItems" :menuItem="item" :key="item.message"></menuItem>
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
import menuItem from './menuItem.vue'
export default {
    data(){
        return{
            menuItems: [
                {
                name: 'Картошка фри',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'fries.png', 
                price: 'от 559Р'
                },
                {
                name: 'Сырные палочки',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'fries.png', 
                price: 'от 559Р'
                },
                {
                name: 'Куриные наггетсы',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'fries.png', 
                price: 'от 559Р'
                },
                {
                name: 'Индейка в маринаде',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'fries.png', 
                price: 'от 559Р',
                position: 'last'
                }
            ],

        }
    },
    components: {
        menuItem

    }
}
</script>