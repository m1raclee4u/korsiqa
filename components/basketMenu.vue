<template>
    <div class="basket__menu">
        <h1>Ваша корзина</h1>
        <div class="basket__slider">
            <basketItem v-for="item in basketItems" :basketItem="item" :key="item.message"></basketItem>                 
        </div>
        
        <footer class="basket__footer">
            <div class="footer__price">
                <h2>Итого</h2>
                <span>1992 Р</span>
            </div>            
            <button class="basket__buy">
                Оформить покупку
            </button>
        </footer>
    </div>
</template>

<script>
import basketItem from './basketMenuItem.vue'

// Swiper.use([ Navigation, Pagination ])

export default {
    data(){
        return{
            basketItems: [
                { name: 'Индейка в мандаринах', weight: '350г' },
                { name: 'Карбонара', weight: '350г' },
                { name: 'Индейка в мандаринах', weight: '350г' },
                { name: 'Карбонара', weight: '350г' },
                { name: 'Индейка в мандаринах', weight: '350г' },
                { name: 'Карбонара', weight: '350г' },                
            ]
        }
    },
    
    components: {
        basketItem
    }
}
</script>

<style lang="scss" scoped>
.blackout{
    width: 100vh;
    height: 100vh;
}
.basket__menu{    
    -moz-user-select: none; 
    -webkit-user-select: none; 
    -ms-user-select: none; 
    user-select: none;
    position: relative;
    top: 15px;
    left: 0px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    // min-height: 500px;
    height: max-content;
    width: 300px;
    border-radius: 3px;
    background-color: #fff;
    z-index: 110;
        h1{
            font-weight: 500;
            font-size: 15px;
            color: black;
            padding-left: 20px;
            // height: 85px;
            line-height: 72px;
            border-bottom: 1px solid rgba(128, 128, 128, 0.288);
        }
}
.basket__slider{
    overflow-y: auto;
    width: 100%;
    height: 360px;  
}
.swiper-wrapper{
    border: none;            
}
.basket__footer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    height: 145px;
    border-top: 1px solid rgba(128, 128, 128, 0.288);
    padding: 0px 20px 0px 20px;
}
.footer__price{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
        h2{
            color: black;
            font-weight: 400;
            color: gray;
        }
        span{
            font-size: 20px;
            font-weight: 500;
            color: orangered;
        }
}
.basket__buy{
    padding: 15px 5px;
    color: white;
    background-color: orangered;
    cursor: pointer;
    font-size: 15px;
    font-weight: 400;
}

</style>