<template>
    <div class="menu flex">  
        <ul class="navbar">
            <!-- <navBar v-for="item in items" :navBar="item" :key="item.message"></navBar> -->
            <li v-for="item in items" 
            :key="item.message" 
            @click="selected = item.message" 
            :class="{selected:selected===item.message}">
                {{item.message}}
            </li>
        </ul>
        <div class="all_items">
            
            <div v-for="menuItem in menuItems" :key="menuItem.id">                
                <menuItem :menuItem="menuItem" 
                    :key="menuItem.id" 
                    @sendArticle="addToCart"  
                    v-if="selected==='Все'||menuItem.tag.indexOf(selected)!==-1">
                </menuItem>
            </div>            
        </div>
    </div>
</template>

<script>

import navBar from './menuNavigation.vue'
import menuItem from './menuItem.vue'
export default {
    name: 'cart',
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
                id: 'pizza_1',
                quantity: '1',
                name: 'Индейка в мандаринах',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'indeika.png', 
                // type: 'hot',
                price: '369',
                weight: '228',
                priceOld: '469',
                 tag: [                    
                    'Мясные',
                    'Вегетарианские'
                ]
                },
                {
                id: 'pizza_2',
                quantity: '1',
                name: 'Пепперони фреш',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'indeika.png', 
                type: 'hot',
                price: '289',
                weight: '228',             
                 tag: [                    
                    'Мясные',
                    'Вегетарианские'
                ]
                },
                {
                id: 'pizza_3',
                quantity: '1',
                name: 'Двойной цыпленок',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'indeika.png', 
                // type: 'hot',
                price: '339',
                weight: '228',
                 tag: [                    
                    'Мясные',
                    'Вегетарианские'
                ]
                },
                {
                id: 'pizza_4',
                quantity: '1',
                name: 'Индейка в мандаринах',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'indeika.png', 
                // type: 'hot',
                price: '469',
                weight: '228',
                position: 'last',
                 tag: [                    
                    'Мясные',
                    'Вегетарианские'
                ]
                },
                {
                id: 'pizza_5',
                quantity: '1',
                name: 'Индейка в мандаринах',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'indeika.png', 
                type: 'new',
                price: '469',
                weight: '228',
                 tag: [                    
                    'Мясные',
                    'Вегетарианские'
                ]
                },
                {
                id: 'pizza_6',
                quantity: '1',
                name: 'Пепперони фреш',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'indeika.png', 
                type: 'hot',
                // size: 'big',
                price: '289',
                weight: '228',
                 tag: [                    
                    'Мясные',
                    'Вегетарианские'
                ]
                },
                {
                id: 'pizza_7',
                quantity: '1',
                name: 'Вкусняшка 7',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'menuItemBig.png',
                type: 'hot',
                size: 'big',
                price: '559',
                weight: '228',
                priceOld: '540',
                position: 'last',
                 tag: [                    
                    'Мясные',
                    'Акции'
                ]
                },
                {
                id: 'pizza_8',
                quantity: '1',
                name: 'Вкусняшка 5',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'indeika.png', 
                type: 'hot',
                // size: 'big',
                price: '559',
                weight: '228',
                 tag: [                    
                    'Мясные',
                    'Вегетарианские'
                ]
                },
                {
                id: 'pizza_9',
                quantity: '1',
                name: 'Вкусняшка 5',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'indeika.png', 
                type: 'hot',
                // size: 'big',
                price: '559',
                weight: '228',
                 tag: [                    
                    'Мясные',
                    'Акция'
                ]
                },
                {
                id: 'pizza_10',
                quantity: '1',
                name: 'Вкусняшка 5',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'indeika.png', 
                type: 'hot',
                // size: 'big',
                price: '559',
                weight: '228',
                 tag: [                    
                    'Мясные',
                    'Гриль'
                ]
                },
                {
                id: 'pizza_11',
                quantity: '1',
                name: 'Вкусняшка 5',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'indeika.png', 
                type: 'hot',
                // size: 'big',
                price: '559',
                weight: '228',
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
    components: {
        navBar,
        menuItem
    },
    methods: {
        addToCart(data){
            this.$store.commit('addToCart', data);
        },
    }
}
</script>



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
                padding: 12px 12px;
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
                margin: 0 25px 75px 0;
            }
    }
</style>
