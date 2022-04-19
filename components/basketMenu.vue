<template>
    <div class="basket__menu">
        <h1>Ваша корзина</h1>
        <div class="basket__slider">
            <BasketMenuSlide/>
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
export default {
    
}
</script>

<style lang="scss" scoped>
.basket__menu{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    // min-height: 500px;
    width: 270px;
    background-color: #fff;
        h1{
            font-weight: 400;
            font-size: 15px;
            color: black;
            padding-left: 30px;
            // height: 85px;
            line-height: 72px;
            border-bottom: 1px solid rgba(128, 128, 128, 0.288);
        }
}
.basket__slider{
    min-height: 60px;
    padding: 30px 30px 30px 30px;
}
.basket__footer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    height: 145px;
    border-top: 1px solid rgba(128, 128, 128, 0.288);
    padding: 5px 30px 5px 30px;
}
.footer__price{
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
        h2{
            color: black;
            font-weight: 300;
            color: gray;
        }
        span{
            color: orangered;
        }
}
.basket__buy{
    padding: 15px 5px;
    color: white;
    background-color: orangered;
    cursor: pointer;
}

</style>