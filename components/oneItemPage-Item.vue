<template>
    <section>
        <div class="kostyl">
            <div class="kostyl2"></div>
            <main class="main flex">
                <div v-for="product in $store.state.product" :key="product.id">
                    <div class="slider-item">
                        <img src="../static/cart/burger.png" alt="" class="govno">
                    </div>
                    <div class="oneItem-info">
                        <nav>Хлебные - крошки</nav>
                        <h1>{{product.name}}</h1>
                        <h2>Курица, Лук, Перец Халапеньо, Сыр Моцарелла, 
                            Томатный соус , Соус Сладкий Чили</h2>
                        <h1>233P</h1>
                        <div class="buttons">
                            <button>add or remove ingrediernts</button>
                            <button class="cart">add to cart</button>                        
                        </div>
                    </div>
                </div>
            </main>
            </div>
    </section>
</template>

<style lang="scss" scoped>
    .kostyl{
        display: flex;
        flex-direction: column;
    }
    .kostyl2{
        height: 200px;
    }
    .oneItem-info{
        height: 100%;
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
            .buttons{
                display: flex;
                flex-direction: column;
                .cart{
                    color: white;
                    background-color: orangered;
                }
            }
            button{
                padding: 20px;
                margin-top: 20px;
            }
            h1{
                color: whitesmoke;
                font-weight: 400;
                font-size: 72px;
            }
            h2{
                line-height: 18px;
                font-size: 12px;
                color: gray;
                width: 300px;
                font-weight: 400;
            }
            nav{
                color: whitesmoke;
            }
            
    }  
    
    
    .slider-item{
        margin-left: 30px;
    }
    section{
        width: 100%;
        background-image: url(../static/cart/cart_back.png);
        background-size: 1905px;
        background-repeat: no-repeat;
        background-position: center center;
        height: 835px;
        margin-bottom: 30px;
    }
    .main{
        height: 535px;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;

    }
</style>

<script>
export default {
   
}
</script>