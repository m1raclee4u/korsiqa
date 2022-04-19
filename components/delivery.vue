<template>
    <section class="delivery_section">
        <div class="delivery flex">
            <div class="delivery___info">
                <h2 class="delivery__slogan">
                    Зона <br>
                    доставки <br>
                    и оплаты
                </h2>
                <div class="rules">
                    <div class="delivery__rules">
                        <h4 class="delivery__title">
                            60 минут или пицца бесплатно
                        </h4> 
                        <p class="delivery__subtitle">
                            Если мы не успеем доставить продукты в течении 60 минут, кроме соусов и продуктов израздела "Другие товары", курьер подарит.
                        </p>
                    </div>
                    <div class="delivery__rules">
                        <h4 class="delivery__title">
                            Какое то преимущество
                        </h4> 
                        <p class="delivery__subtitle">
                            Если мы не успеем доставить продукты в течении 60 минут, кроме соусов и продуктов израздела "Другие товары", курьер подарит.
                        </p>
                    </div>
                    <div class="delivery__rules">
                        <h4 class="delivery__title">
                            Еще какое то преимущество
                        </h4> 
                        <p class="delivery__subtitle" style="margin-bottom: 0">
                            Если мы не успеем доставить продукты в течении 60 минут, кроме соусов и продуктов израздела "Другие товары", курьер подарит.
                        </p>
                    </div>
                </div>                
            </div>                     
        </div>
        <div class="delivery__map">
            <img src="@/static/map.png" alt="">
        </div>   
    </section>
</template>

<style lang="scss">
.delivery___info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.delivery__map
{
    width: 997px;
    height: 837px;
    z-index: 5;
    position: absolute;
    right: -275px;
}
.delivery__rules{
        h4{
            font-size: 26px;
        }
        p{
            font-size: 16px;
            line-height: 28px;
        }
}
.delivery__title
{
    margin-bottom: 20px;
}
.delivery__subtitle
{
    margin-bottom: 50px;
    width: 480px;
}
.delivery
{
    justify-content: flex-start;
}
.delivery_section
{
    position: relative;
    display: flex;
    width: 1333px;
    height: 837px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 75px;
}
.delivery__slogan
{
        font-size: 100px;
        font-weight: 400;
        line-height: 93px;
        // margin-bottom: 80px;
}
</style>

