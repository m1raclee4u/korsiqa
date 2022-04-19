<template>
    <header class="header">
        <div class="header__nav flex">
            <div>
                <nuxt-link to="#" class="header__logo">
                    <h1>
                        KORSIQA
                    </h1>
                </nuxt-link>
            </div>   
            <div class="header__buttons">                    
                <ul class="navbar">
                    <!-- <navBar v-for="item in items" :navBar="item" :key="item.message"></navBar> -->
                    <li v-for="item in items" :key="item.message">
                        {{item.message}}
                    </li>
                </ul>
                <div class="header__info">
                    <a class="header__call" href="tel:+228332">8 800 555 35 35</a>
                    <h class="call__subtitle">Работаем с 08:00 до 22:00</h>
                </div>
                <button class="header__login">
                    Войти
                </button>
                <div class="dropdown">
                    <button class="header__basket">
                        Корзина
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import navBar from './menuNavigation.vue'
export default {
  data(){
        return{
            items: [
                { message: 'Пицца'},
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

}
</script>

<style lang="scss" scoped>

    /* Dropdown Button */
.dropbtn {
    background-color: #3498DB;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}

/* Dropdown button on hover & focus */
.dropbtn:hover, .dropbtn:focus {
    background-color: #2980B9;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
    position: relative;
    display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
.show {display:block;}


     .navbar {
        height: 50px;
        display: flex;
        align-items: center;
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
    position: sticky;
    top: 0px;
    z-index: 100;
    display: flex;
    align-content: center;
    height: 130px;
    background-color: rgb(19, 19, 19);
    border-bottom: 1px solid rgb(55, 55, 55);
    margin-bottom: 130px;
}
.header__nav{
    justify-content: space-between;
    flex-direction: row;
    align-items: center;    
}
.header__buttons{
    display: flex;
    justify-content: space-around;    
    align-items: center;    
}
.header__buttons a {
    margin: 0 25px 0 0;
}
.header__logo {
    font-size: 25px;
        h1{
            font-weight: 800;
            letter-spacing: 2px;
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


</style>
