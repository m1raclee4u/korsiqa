<template>
    <div>        
        <div v-if="product.size==='big'">            
            <div :class="{menu__item__big: true, last__element: product.position==='last',  menu__item__big: true, hot: product.type==='hot'}">
                <div class="menu__item__big__info">
                    <div :class="{menu__item__tag: true, new: product.type==='new', superhit: product.type==='superhit', hot: product.type==='hot', premium: product.type==='premium'}">
                        <span v-if="product.type==='new'">новинка</span>
                        <span v-if="product.type==='superhit'">суперхит</span>
                        <span v-if="product.type==='hot'">оссстрый</span>
                        <span v-if="product.type==='premium'">PREMIUM</span>
                    </div>
                        <div class="menu__item__big__header">
                            <h1>{{product.name}}</h1>
                        </div>    
                        <div class="menu__item__big__info__lower">        
                            <span>{{product.info}}</span>
                            <div class="menu__item__big__buy">
                                <div class="menu__item__big__price">
                                    <h5>от {{product.price}} ₽</h5>
                                    <h3 v-if="product.priceOld !==''">{{product.priceOld}} ₽</h3>
                                </div>
                                <button class="buy" @click="sendDataToParent">
                                    <span>Выбрать</span>                
                                </button>           
                            </div>
                        </div>   
                </div>
                <Nuxt-link to="/oneItemPage" @click="sendDataToSlug"> <img class="back_item_big" :src=" require('../static/burger_menu_item_big/' + product.image)" alt=""></Nuxt-link>
            </div>
        </div>
        <div v-else>
            <div :class="{last__element: product.position==='last', menu__item: true, hot: product.type==='hot'}">     
                <div :class="{menu__item__tag: true, new: product.type==='new', superhit: product.type==='superhit', hot: product.type==='hot'}">
                    <span v-if="product.type==='new'">новинка</span>
                    <span v-if="product.type==='superhit'">суперхит</span>
                    <span v-if="product.type==='hot'">оссстрый</span>
                </div>
                <Nuxt-link to="/oneItemPage" @click="sendDataToSlug"><img :src="require('../static/burger_menu_item/' + product.image)" alt="" class="menu__item__back"></Nuxt-link>   
                <div class="menu__item__info">
                    <div class="menu__item__header">
                        <h1>{{product.name}}</h1> 
                    </div>
                    <div class="menu__item__buy">
                        <span>{{product.info}}</span>   
                        <div class="menu__item__price">
                            <div class="prices">
                                <h5>от {{product.price}} ₽</h5>
                                <h3 v-if="product.priceOld > 0">{{product.priceOld}} ₽</h3>
                            </div>                            
                            <button class="buy" @click="sendDataToParent">
                            <!-- <button class="buy" @click="addToCart(product)"> -->
                                <span>Выбрать</span>              
                            </button>  
                        </div>         
                    </div>
                </div>       
            </div>            
        </div>
    </div>

</template>

<script>
export default {
    name: "product",
    props: [
        "product"
    ],  
    methods: {
        // addToCart(product) {
        //     this.$store.commit('addToCart', product);
        // },
        sendDataToParent (){
            this.$emit('sendArticle', this.product);
            // console.log(this.product)
        },
        sendDataToSlug (){
            this.$emit('sendData', this.product.id)
        },
    }
    
}
</script>

<style lang="scss" scoped>
    .last__element{
        margin-right: 0 !important;
    }
    .menu__item__big{     
        position: relative;  
        // background: gray;     
        display: flex;
        align-items: flex-start;
        flex-direction: row;
        justify-content: center;    
        width: 613px;
        height: 476px;
        margin: 0 30px 60px 0; 
            p{
                width: 200px;
                font-size: 16px;
                font-weight: 500;
                padding: 0 15px 15px 15px;
                color: black;
                z-index: 1;
            }
    }
    .menu__item__big__info{
        display: flex;
        align-content: flex-end;
        height: 100%;
        width: 280px;
        flex-direction: column;
        justify-content: space-between
        ;
        z-index: 3;
            h1{
                margin-bottom: 18px;
                font-size: 56px;
                font-weight: 300;
            };
            span{
                color: gray;
                font-size: 12.5px;
                margin-bottom: 5px;
            };
            h4{
                color: yellow;
                font-size: 16px;
                font-weight: 400;
                letter-spacing: 3px;
                
                
            }
    }  
    .menu__item__big__info__lower{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 137px;
    }
    .back_item_big{
        width: 333px;
        height: 406px;
        max-width: inherit;
    }
    .menu__item__big__price{
        display: flex;
        flex-direction: column;
            h5{
                color: white;
                font-size: 25px;
                font-weight: 400;
            }
            h3{
                color: grey;
                font-size: 18px;
                text-decoration: line-through;
            }
    }

    .menu__item__big__buy{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .menu__item__big__header{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .buy{
        background-color: orangered;
        padding: 15px 35px 15px 35px;
        border-radius: 5px;
        border: none;
            span{
                color: white;
            }
    }
// -----------------------------------------------------------------
    .menu__item{              
        position: relative; 
        // background: gray;   
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: space-between;    
        // background-color: wheat;
        width: 280px;
        height: 476px;
        margin: 0 53.333333px 60px 0;
        @media screen and (min-width: 768px) and (max-width:1279px) {
            margin: 0 13px 60px 0;
        }
            &.hot{
                background-image: url(@/static/burger_menu_item/fire.png);
                background-repeat: no-repeat;
                background-size: 261px 331px;
                background-position-x: 10px;                
            }
            p{
                width: 200px;
                font-size: 16px;
                font-weight: 500;
                padding: 0 15px 15px 15px;
                color: black;
                z-index: 1;
            }           
      
            
            
    }
    .fire{
        color: whitesmoke;
    }
    .menu__item__tag{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 30px;
        color: white;
        margin-top: 20px;
        border-radius: 5px;
        &.new{
            background-color: gray;
        }
        &.hot{
            background-color: red;
        }
        &.superhit{
            background-color: purple;
        }
        &.premium{
            span{
                color: #fcc918;
                font-size: 16px;
            }
            justify-content: start;
            letter-spacing: 3px;
            font-weight: 300;
        }
        span{
            margin-top: -3px;
        }
    }
    .menu__item__back{
        width: 100%;
        height: 190px;
        :-moz-focusring{
                padding: 10px;
                transition: all .5s ease;
                transform: 10px;
                opacity: 0;
            }
        
    }
    .menu__item__info{
        display: flex;
        align-content: space-between;
        height: 200px;
        flex-direction: column;
        z-index: 3;
            h1{
                margin-bottom: 12px;
                font-size: 24px;
                font-weight: 300;
                letter-spacing: 0.5px
            };
            span{
                color: gray;
                font-size: 12.5px;
                line-height: 20px;
                margin-bottom: 5px;
            };
    }   
    .menu__item__header{
        margin-bottom: 15px;
        height: 70px;
    }
    
    .menu__item__buy{
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
    }
    .menu__item__price{
        display: flex;
        align-items: center;
        justify-content: space-between;
            h5{
                color: white;
                font-size: 25px;
                font-weight: 400;
            }
            h3{
                color: grey;
                font-size: 18px;
                text-decoration: line-through;
            }
    }
    .buy{
        background-color: orangered;
        padding: 15px 35px 15px 35px;
        border-radius: 5px;
        border: none;
            span{
                color: white;
            }
    }
</style>