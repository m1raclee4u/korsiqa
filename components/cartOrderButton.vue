<template>
    <Nuxt-link to="/" class="order">
        Перейти к оплате
    </Nuxt-link>
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
            span{
                text-align: center;
                width: 100%;
                height: 100%;
                margin: 20px auto;
            }
    }
</style>