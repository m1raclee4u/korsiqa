<template>
    <header class="header">
        <div class="wrapper">
            <div class="header__nav flex">
                <div>
                    <nuxt-link to="/" class="header__logo">
                        <h1>
                            KORSIQA
                        </h1>
                    </nuxt-link>
                </div>   
                <div class="header__links">                    
                    <ul class="navbar">
                        <!-- <navBar v-for="item in items" :navBar="item" :key="item.message"></navBar> -->
                        <li v-for="item in items" :key="item.message">
                            {{item.message}}
                        </li>
                    </ul>
                    <div class="header__info">
                        <a class="header__call" href="tel:+228332">8 800 555 35 35</a>
                        <h1 class="call__subtitle">Работаем с 08:00 до 22:00</h1>
                    </div>
                    <div class="header__buttons">
                        <button class="header__login">
                            Войти
                        </button>
                        <div class="basket">
                            <button class="header__basket" @click="$store.commit('openBasket', !$store.state.isVisibleBasket)">
                                Корзина
                            </button>
                        </div>
                    </div>                    
                </div>                
            </div>
            <transition name="slide-fade">
                <CartMenu v-show="$store.state.isVisibleBasket" />
            </transition>
        </div>
    </header>
</template>

<script>
import navBar from './menuNavigation.vue'
export default {
  data(){
        return{                   
            items: [
                { message: 'Бургеры'},
                { message: 'Закуски'},
                { message: 'Десерты'},
                { message: 'Напитки'},
                { message: 'Акции'},
                { message: 'Контакты'},
                { message: 'О нас'}
            ],
        }
    },
    components: {
        navBar
    },
    name: 'Basket',
    methods: {
    }

}
</script>

<style lang="scss" scoped>

    .wrapper{
        align-items: flex-end;
        height: 130px;
        display: flex;
        flex-direction: column;
        width: 1280px;
        margin-right: auto;
        margin-left: auto;
    }

    .header__buttons{
        display: flex;
        align-items: flex-start;
    }

    .basket{
        z-index: 110;
        display: flex;
        flex-direction: column;
    }


     .navbar {
        height: 50px;
        display: flex;
        align-items: center;
        margin-right: 25px;
            input{
                margin-right: 10px;
            }
            li{
                display: inline;
                font-size: 15px;
            }
                :hover{
                    color: orangered;
                }
    }

    ul{
        
    text-decoration: none;
        li{
        font-size: 15px;
        font-weight: 300;
        margin-right: 25px;
        transition: 0.5s;
        color: white;        
        cursor: pointer;
            &.selected{
                background: orangered;
                border-radius: 3px;
                padding: 12px 17px;
                color: white;
            }
        }
    }

a {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
    color: white;
    text-decoration: none;
    font-size: 14px;
}
.header{
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    position: fixed;
    top: 0px;
    // TODO от скролла менять z-index:  и высоту;
    z-index: 100;
    display: flex;
    align-content: center;
    height: 130px;
    // background-color: rgb(19, 19, 19);
    // border-bottom: 1px solid rgb(55, 55, 55);
    // margin-bottom: 130px;
    background-image: url(../static/back.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}
.header__nav{
    margin-top: 40px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;    
}
.header__links{
    display: flex;
    justify-content: space-around;    
    align-items: center;    
}
.header__logo {
    font-size: 25px;
        h1{
            font-weight: 800;
            letter-spacing: 2px;
            color: white;
        }
}
.header__info{
    display: flex;
    flex-direction: column;
    margin: 0 25px 0 0;
}
.header__call{
    width: 100%;
    margin: 0;
    color: orangered;
    font-size: 17px;    
    text-align: right;
}
.call__subtitle{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: right;
    color: #b5b5b5;
    font-size: 11px;
}
.header__login{
    margin: 0 25px 0 0;
    padding: 12px 30px;
    border-radius: 3px;
    border: 1px solid white;
    background-color: rgba(255, 0, 0, 0);
    color: white;
    font-weight: 300;
    font-size: 14px;
}
.header__basket{
    padding: 12px 30px;
    border-radius: 3px;
    border: 1px solid transparent;
    background-color: orangered;
    color: white;
    font-weight: 300;
    font-size: 14px;
    cursor: pointer;
}


// ------------------------------media

 @media screen and (min-width: 768px) and (max-width:1279px) {
     .header{
         margin-bottom: 20px;
     }
     .navbar{
         display: none;
     }
     .header__links{
         display: none;
     }
     
 }


</style>
