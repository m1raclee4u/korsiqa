<template>
    <div class="oneBasketItem">
        <div class="basketInfo__left">
            <div class="basketItem__info">
                <!-- {{item.name}} -->
                <h1>Индейка в мандаринах</h1>
                <!-- {{item.weight}} -->
                <span>350 гр</span>
            </div>
            <p>- 1 +</p>
        </div>
        <div class="basketInfo__right">
            <button class="close">
                X
            </button>
            <span>12228 P</span>            
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.close{
    font-size: 15px;
    font-weight: bold;
    color: grey;
    background-color: inherit;
    text-align: right;
    padding: 0;
}
.oneBasketItem{
    display: flex;
    justify-content: space-between;
    height: 70px;
    padding: 25px 20px 25px 20px;
    border-bottom: 1px solid rgba(128, 128, 128, 0.288);
}
.basketInfo__left{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.basketInfo__right{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
        span{
            font-size: 12.5px;
            font-weight: 700;
        }
}
.basketItem__info{
    h1{
        font-size: 15px;
        font-weight: 00;
        color: black;
    }
    span{
        font-size: 11px;
        font-weight: 400;
        color: gray;
    }

}
</style>