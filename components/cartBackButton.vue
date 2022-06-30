<template>
    <button @click="$store.commit('cartState', 0)" class="order">
        <img :src="require('../static/arrowLeft.png')" alt="" class="arrowRight">
        <span> Прошлый этап </span>
    </button>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .order{
        width: 272px;
        height: 70px;
        background-color: transparent;
        border: 1px solid gray;
        color: gray;
        display: flex;
        align-items: center;
        justify-content: space-between;
            span{
                margin-top: -4px;
                font-weight: 400;
                font-size: 16px;
                padding-right: 30px;
            }
            .arrowRight{
                width: 11px;
                height: 11px;
                padding-left: 30px;
            }
    }
</style>