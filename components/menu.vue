<template>
    <div class="menu flex">  
        <ul class="navbar">
            <!-- <navBar v-for="item in items" :navBar="item" :key="item.message"></navBar> -->
            <li v-for="item in items" :key="item.message" @click="selected = item.message" :class="{selected:selected===item.message}">
                {{item.message}}
            </li>
        </ul>
        <div class="all_items">
            <div v-for="item in menuItems"  :key="item.message">
                <menuItem :menuItem="item"  v-if="selected==='Все'||item.tag.indexOf(selected)!==-1"></menuItem>
            </div>
            
        </div>
    </div>
</template>

<style lang="scss" scoped>

    ul{
        li{
        font-size: 15px;
        font-weight: 300;
        margin-right: 25px;
        transition: 0.5s;
        color: #b5b5b5;        
        cursor: pointer;
            &.selected{
                background: orangered;
                border-radius: 3px;
                padding: 12px 17px;
                color: white;
            }
        }
    }
    .menu{
        flex-direction: column;
    }
    .all_items{
        display: flex;
        flex-wrap: wrap;
        
}
    .navbar {
        height: 50px;
        display: flex;
        align-items: center;
        margin-bottom: 5px;
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
                { message: 'Все'},
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
                name: 'Индейка в мандаринах',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'@/static/burger_menu_item/indeika.png', 
                // type: 'hot',
                price: 'от 369Р',
                priceOld: '469р',
                 tag: [                    
                    'Мясные',
                    'Вегетарианские'
                ]
                },
                {
                name: 'Пепперони фреш',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'@/static/burger_menu_item/indeika.png', 
                type: 'hot',
                price: 'от 289Р',             
                 tag: [                    
                    'Мясные',
                    'Вегетарианские'
                ]
                },
                {
                name: 'Двойной цыпленок',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'@/static/burger_menu_item/indeika.png', 
                // type: 'hot',
                price: 'от 339',
                 tag: [                    
                    'Мясные',
                    'Вегетарианские'
                ]
                },
                {
                name: 'Индейка в мандаринах',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'@/static/burger_menu_item/indeika.png', 
                // type: 'hot',
                price: 'от 469Р',
                position: 'last',
                 tag: [                    
                    'Мясные',
                    'Вегетарианские'
                ]
                },
                {
                name: 'Индейка в мандаринах',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'@/static/burger_menu_item/indeika.png', 
                type: 'new',
                price: 'от 469Р',
                 tag: [                    
                    'Мясные',
                    'Вегетарианские'
                ]
                },
                {
                name: 'Пепперони фреш',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'@/static/burger_menu_item/indeika.png', 
                type: 'hot',
                // size: 'big',
                price: 'от 289Р',
                 tag: [                    
                    'Мясные',
                    'Вегетарианские'
                ]
                },
                {
                name: 'Вкусняшка 7',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'@/static/burger_menu_item_big/menuItemBig.png',
                type: 'hot',
                size: 'big',
                price: 'от 559Р',
                priceOld: '540р',
                position: 'last',
                 tag: [                    
                    'Мясные',
                    'Акции'
                ]
                },
                {
                name: 'Вкусняшка 5',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'@/static/burger_menu_item/indeika.png', 
                type: 'hot',
                // size: 'big',
                price: 'от 559Р',
                 tag: [                    
                    'Мясные',
                    'Вегетарианские'
                ]
                },
                {
                name: 'Вкусняшка 5',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'@/static/burger_menu_item/indeika.png', 
                type: 'hot',
                // size: 'big',
                price: 'от 559Р',
                 tag: [                    
                    'Мясные',
                    'Акция'
                ]
                },
                {
                name: 'Вкусняшка 5',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'@/static/burger_menu_item/indeika.png', 
                type: 'hot',
                // size: 'big',
                price: 'от 559Р',
                 tag: [                    
                    'Мясные',
                    'Гриль'
                ]
                },
                {
                name: 'Вкусняшка 5',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'@/static/burger_menu_item/indeika.png', 
                type: 'hot',
                // size: 'big',
                price: 'от 559Р',
                position: 'last',
                 tag: [                    
                    'Закрытые',
                    'Вегетарианские'
                ]
                },
            ],
            selected: 'Все',

        }
    },
    async asyncData({store}){
        let items = store.state.items;
        return {items};
    },
    components: {
        navBar,
        menuItem,
        menuItemBig
    }
}
</script>