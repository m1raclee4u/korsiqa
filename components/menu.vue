<template>
    <div class="menu flex">  
        <ul class="navbar">
            <!-- <navBar v-for="item in items" :navBar="item" :key="item.message"></navBar> -->
            <li 
            v-for="item in $store.state.items" 
            :key="item.message" 
            @click="$store.commit('changeNavigationPizza', item.message)"
            :class="{selected:$store.state.selected===item.message}"
            >
                {{item.message}}
            </li>
        </ul>
        <div class="all_items">
            
            <div v-for="product in $store.state.products" :key="product.id">                
                <product :product="product" 
                    :key="product.id" 
                    @sendArticle="addToCart"                    
                    v-if="$store.state.selected==='Все'||product.tag.indexOf($store.state.selected)!==-1">
                </product>
            </div>            
        </div>
    </div>
</template>

<script>

import navBar from './menuNavigation.vue'
import product from './product.vue'
export default {
    name: 'cart',
    components: {
        navBar,
        product
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

// ------------------------------media

 @media screen and (min-width: 768px) and (max-width:1279px) {
     .left{
         display: none;
     }
 }







</style>
