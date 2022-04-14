<template>
    <div class="header">
        <div class="header__nav flex">
            <div>
                <nuxt-link to="#" class="header__logo">
                    <h1>
                        KORSIQA
                    </h1>
                </nuxt-link>
            </div>   
            <div class="header__buttons">                    
                <div style="margin-right: 30px;">
                    <nuxt-link to="#" class="pizza">Пицца</nuxt-link>
                    <nuxt-link to="#" class="snacks">Закуски</nuxt-link>
                    <nuxt-link to="#" class="desserts">Десерты</nuxt-link>
                    <nuxt-link to="#" class="drinks">Напитки</nuxt-link>
                    <nuxt-link to="#" class="sale">Акции</nuxt-link>
                    <nuxt-link to="#" class="contacts">Контакты</nuxt-link>
                    <nuxt-link to="#" class="about__us">О нас</nuxt-link>
                </div>
                <div class="header__info">
                    <a class="header__call" href="tel:+228332">8 800 555 35 35</a>
                    <h class="call__subtitle">Работаем с 08:00 до 22:00</h>
                </div>
                <button class="header__login">

                </button>
                <button class="header__basket">

                </button> 
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
a {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
    color: white;
    text-decoration: none;
}
.header{
    display: flex;
    align-content: center;
    height: 135px;
    border-bottom: 1px solid gray;
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
    font-size: 20px;    
    text-align: right;
}
.call__subtitle{    
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: end;
}
.header__login{
    margin: 0 25px 0 0;
    padding: 20px 40px;
    border: none;
}
.header__basket{    
    padding: 20px 50px;
    border: none;
}


</style>
