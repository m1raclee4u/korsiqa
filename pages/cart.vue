<template>
    <div class="container">
        <Header/>
        <CartPageComponent-1/>
        <CartPageRecomendedProducts/>
        <section>
            <CartPromocode/>
            <div class="price">
                <!-- <div v-if="isDiscountRight"> -->
                    <span>{{totalPrice}} ₽</span>
                    <h1>{{totalPriceWithDiscount}} ₽</h1>    
                <!-- </div>  -->
                <!-- <div v-else>
                    <h1>{{totalPrice}} ₽</h1>
                </div> -->
                <CartOrderButton/>
            </div>
        </section>
        <Footer/>        
        <Copyright/>        
    </div>   
</template>

<script>
export default {
    computed: {
            totalPrice() {
                return this.$store.state.cartArray.reduce(
                    (acc, val) => acc + val.quantity * val.price,
                    0
                );
            },
            totalPriceWithDiscount() {
                let discount = this.$store.state.cartArray.reduce(
                    (acc, val) => acc + val.quantity * val.price,
                    0);
                // return Math.ceil(discount / 100) * (100 - 15);
                return parseInt(discount*0.85)+1;
                
            },
        }
}
</script>

<style lang="scss" scoped>
    section{
        width: 1280px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
    .price{
        display: flex;
        align-items: flex-start;
            span{
                color: white;
                margin-right: 35px;
                font-size: 18px;
            }
            h1{
                margin-right: 50px;
                font-size: 35px;
            }
    }
</style>