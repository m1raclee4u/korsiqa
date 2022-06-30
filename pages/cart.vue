<template>
    <div class="container">
        <Header/>
        <div v-if="$store.state.cartState === 0">
            <CartPageComponent-0/>
            <CartPageRecomendedProducts/>
            <section>
                <CartPromocode/>
                <div class="price">
                    <div class="withDiscount" >
                        <span>{{totalPrice}}₽</span>
                        <h1>{{totalPriceWithDiscount}}₽</h1>    
                    </div> 
                    <!-- <div v-else>
                        <h1>{{totalPrice}} ₽</h1>
                    </div> -->
                    <CartOrderButton/>
                </div>
            </section>
        </div>
        <div v-if="$store.state.cartState === 1">
            <CartPageComponent-1/>
            <section>
                <CartBackButton/>                              
                <CartOrderButton/>
            </section>
        </div>      
        <Footer/>        
        <Copyright/>        
    </div>   
</template>

<script>
import input from '~/components/cartPromocode.vue';

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
    .withDiscount{
        height: 100%;
        display: flex;
        align-items: center;
    }
    section{
        width: 1280px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
    .price{
        display: flex;
        align-items: center;
            span{
                color: gray;
                margin-right: 20px;
                font-size: 20px;
                text-decoration: line-through;
            }
            h1{
                margin-right: 50px;
                font-size: 35px;
            }
    }
</style>