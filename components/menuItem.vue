<template>
    <div :data-category="menuItem.filter">        
        <div v-if="menuItem.size==='big'" >
            <div class="menu__item__big">
                <div class="menu__item__big__info">
                    <h4>{{menuItem.tag}}</h4>
                        <div class="menu__item__big__header">
                            <h1>{{menuItem.name}}</h1>
                        </div>    
                        <div class="menu__item__big__info__lower">        
                            <span>{{menuItem.info}}</span>
                            <div class="menu__item__big__buy">
                                <div class="menu__item__big__price">
                                    <h5>{{menuItem.price}}</h5>
                                    <h3>{{menuItem.priceOld}}</h3>
                                </div>
                                <button class="buy">
                                    <span>Выбрать</span>                
                                </button>           
                            </div>
                        </div>   
                </div>
                <img class="back_item_big" :src="menuItem.image" alt="" >
            </div>
        </div>
        <div v-else>
            <div :class="{menu__item: true, hot: menuItem.type==='hot'}">     
                <div :class="{menu__item__tag: true, new: menuItem.type==='new', superhit: menuItem.type==='superhit', hot: menuItem.type==='hot'}">
                        <span v-if="menuItem.type==='new'">новинка</span>
                        <span v-if="menuItem.type==='superhit'">суперхит</span>
                        <span v-if="menuItem.type==='hot'">оссстрый</span>
                    </div>  
                <img :src="menuItem.image" alt="" class="menu__item__back">
                <div class="menu__item__info">
                    <div class="menu__item__header">
                        <h1>{{menuItem.name}}</h1> 
                    </div>
                    <div class="menu__item__buy">
                        <span>{{menuItem.info}}</span>   
                        <div class="menu__item__price">
                            <div class="prices">
                                <h5>{{menuItem.price}}</h5>
                                <h3>{{menuItem.priceOld}}</h3>
                            </div>                            
                            <button class="buy">
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
    name: "test",
    props: [
        "menuItem",
        "menuItemBig"
    ]
}
</script>

<style lang="scss" scoped>
    .menu__item__big{     
        position: relative;  
        // background: gray;     
        display: flex;
        align-items: flex-start;
        flex-direction: row;
        justify-content: center;    
        width: 631px;
        height: 450px;
        margin: 0 0 60px 0; 
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
        height: 476px;
        flex-direction: column;
        justify-content: space-between
        ;
        z-index: 3;
            h1{
                margin-bottom: 12px;
                font-size: 54px;
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
        height: 200px;
    }
    .back_item_big{
        width: 355px;
        height: 100%;
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
        width: 280px;
        height: 476px;
        margin: 0 0 60px 0;
            &.hot{
                background-image: url(@/assets/burger_menu_item/fire.png);
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
    }
    .menu__item__back{
        width: 100%;
        height: 190px;
                
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
                font-weight: 400;
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