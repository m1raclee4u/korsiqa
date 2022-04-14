<template>
    <div class="menu flex">       
        <ul class="navbar">
            <navBar v-for="item in items" :navBar="item" :key="item.message"></navBar>
        </ul>
        <div class="items">
            <menuItem v-for="item in menuItems" :menuItem="item" :key="item.message"></menuItem>  

        </div>
    </div>
</template>

<style lang="scss" scoped>
    .menu{
        flex-direction: column;
    }
    .items{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
}
    .navbar {
        display: flex;
        align-items: center;
            input{
                margin-right: 10px;
            }
            li{
                display: inline;
                font-size: 15px;
                margin: 0 15px 75px 0;
            }
    }
</style>

<script>
import navBar from './menuNavigation.vue'
import menuItem from './menuItem.vue'
import menuItemBig from './menuItemsBig.vue'
export default {
    data(){
        return{
            items: [
                { message: 'Все', active: 'true'},
                { message: 'Акции'},
                { message: 'Мясные'},
                { message: 'Вегетарианские'},
                { message: 'Морские и Рыбные'},
                { message: 'Закрытые'},
                { message: 'Гриль'},
                { message: 'Острые'},
                { message: 'Акция'}


            ],
            menuItems: [
                {
                name: 'Вкусняшка 1',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'/_nuxt/assets/burger_menu_item/indeika.png', 
                // type: 'hot',
                price: 'от 559Р',
                active: 'Мясной Закрытые',
                },
                {
                name: 'Вкусняшка 2',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'/_nuxt/assets/burger_menu_item/indeika.png', 
                type: 'hot',
                price: 'от 559Р'
                },
                {
                name: 'Вкусняшка 3',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'/_nuxt/assets/burger_menu_item/indeika.png', 
                // type: 'hot',
                price: 'от 5529Р',
                priceOld: '540р'
                },
                {
                name: 'Вкусняшка 3',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'/_nuxt/assets/burger_menu_item/indeika.png', 
                // type: 'hot',
                price: 'от 559Р'
                },
                {
                name: 'Вкусняшка 4',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'/_nuxt/assets/burger_menu_item/indeika.png', 
                type: 'new',
                price: 'от 559Р'
                },
                {
                name: 'Вкусняшка 5',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'/_nuxt/assets/burger_menu_item/indeika.png', 
                type: 'hot',
                // size: 'big',
                price: 'от 559Р'
                },
                {
                name: 'Вкусняшка 7',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'/_nuxt/assets/burger_menu_item_big/menuItemBig.png',
                type: 'hot',
                size: 'big',
                price: 'от 559Р',
                priceOld: '540р'
                },
                {
                name: 'Вкусняшка 5',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'/_nuxt/assets/burger_menu_item/indeika.png', 
                type: 'hot',
                // size: 'big',
                price: 'от 559Р'
                },
            ],

        }
    },
    components: {
        navBar,
        menuItem,
        menuItemBig

    }
}
</script>