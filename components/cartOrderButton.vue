<template>
    <button @click="$store.commit('cartState', 1)" class="order">
        <span> Продолжить </span>
        <img :src="require('../static/arrowRight.png')" alt="" class="arrowRight">
    </button>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .order{
        width: 400px;
        height: 70px;
        background-color: orangered;
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
            span{
                margin-top: -4px;
                font-weight: 400;
                font-size: 16px;
                padding-left: 30px;
            }
            .arrowRight{
                width: 11px;
                height: 11px;
                padding-right: 30px;
            }
    }
</style>