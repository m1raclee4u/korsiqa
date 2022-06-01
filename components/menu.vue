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
            
            <div v-for="menuItem in $store.state.menuItems" :key="menuItem.id">                
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
        addToItem(data){
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

// ------------------------------media

 @media screen and (min-width: 768px) and (max-width:1279px) {
     .left{
         display: none;
     }
 }







</style>
