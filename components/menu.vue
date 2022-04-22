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
            
            <div v-for="menuItem in menuItems">
                <menuItem :menuItem="menuItem" 
                    :key="menuItem.id" 
                    @sendArticle="showChildArticleInConsole"  
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
                id: '1',
                inCart: false,
                name: 'Индейка в мандаринах',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'indeika.png', 
                // type: 'hot',
                price: '369',
                priceOld: '469',
                 tag: [                    
                    'Мясные',
                    'Вегетарианские'
                ]
                },
                {
                id: '2',
                inCart: false,
                name: 'Пепперони фреш',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'indeika.png', 
                type: 'hot',
                price: '289',             
                 tag: [                    
                    'Мясные',
                    'Вегетарианские'
                ]
                },
                {
                id: '3',
                inCart: false,
                name: 'Двойной цыпленок',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'indeika.png', 
                // type: 'hot',
                price: '339',
                 tag: [                    
                    'Мясные',
                    'Вегетарианские'
                ]
                },
                {
                id: '4',
                inCart: false,
                name: 'Индейка в мандаринах',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'indeika.png', 
                // type: 'hot',
                price: '469',
                position: 'last',
                 tag: [                    
                    'Мясные',
                    'Вегетарианские'
                ]
                },
                {
                id: '5',
                inCart: false,
                name: 'Индейка в мандаринах',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'indeika.png', 
                type: 'new',
                price: '469',
                 tag: [                    
                    'Мясные',
                    'Вегетарианские'
                ]
                },
                {
                id: '6',
                inCart: false,
                name: 'Пепперони фреш',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'indeika.png', 
                type: 'hot',
                // size: 'big',
                price: '289',
                 tag: [                    
                    'Мясные',
                    'Вегетарианские'
                ]
                },
                {
                id: '7',
                inCart: false,
                name: 'Вкусняшка 7',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'menuItemBig.png',
                type: 'hot',
                size: 'big',
                price: '559',
                priceOld: '540',
                position: 'last',
                 tag: [                    
                    'Мясные',
                    'Акции'
                ]
                },
                {
                id: '8',
                inCart: false,
                name: 'Вкусняшка 5',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'indeika.png', 
                type: 'hot',
                // size: 'big',
                price: '559',
                 tag: [                    
                    'Мясные',
                    'Вегетарианские'
                ]
                },
                {
                id: '9',
                inCart: false,
                name: 'Вкусняшка 5',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'indeika.png', 
                type: 'hot',
                // size: 'big',
                price: '559',
                 tag: [                    
                    'Мясные',
                    'Акция'
                ]
                },
                {
                id: '10',
                inCart: false,
                name: 'Вкусняшка 5',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'indeika.png', 
                type: 'hot',
                // size: 'big',
                price: '559',
                 tag: [                    
                    'Мясные',
                    'Гриль'
                ]
                },
                {
                id: '11',
                inCart: false,
                name: 'Вкусняшка 5',
                info: 'Пастрами из индейки, соус альфредо, мандарины, цитрусовый соус, моцарелла, смесь сыров чеддер и пармезан', 
                image:'indeika.png', 
                type: 'hot',
                // size: 'big',
                price: '559',
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
        showChildArticleInConsole(data){
            console.log(data)
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
