<template>
    <section class="delivery_section">
        <div class="delivery___info">
            <h2 class="delivery__slogan">
                Зона доставки <br>
                и оплаты
            </h2>
            <div class="rules">
                <div class="delivery__rules">
                    <h4>
                        60 минут или пицца бесплатно
                    </h4> 
                    <p class="delivery__subtitle">
                        Если мы не успеем доставить продукты в течении 60 минут, кроме соусов и продуктов израздела "Другие товары", курьер подарит.
                    </p>
                </div>
                <div class="delivery__rules">
                    <h4>
                        Какое то преимущество
                    </h4> 
                    <p class="delivery__subtitle">
                        Если мы не успеем доставить продукты в течении 60 минут, кроме соусов и продуктов израздела "Другие товары", курьер подарит.
                    </p>
                </div>
                <div class="delivery__rules">
                    <h4>
                        Еще какое то преимущество
                    </h4> 
                    <p class="delivery__subtitle" style="margin-bottom: 0">
                        Если мы не успеем доставить продукты в течении 60 минут, кроме соусов и продуктов израздела "Другие товары", курьер подарит.
                    </p>
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
    margin-right: 90px;
}
.delivery__map
{
    width: 90%;
    height: auto;
    z-index: 5;
}
.delivery__rules{
        h4{
            color: orangered;
            font-size: 26px;
            margin-bottom: 15px;
        }
        p{
            color: white;
            font-size: 16px;
            line-height: 28px;
            font-weight: 300;
        }
}
.delivery__subtitle
{
    margin-bottom: 30px;
    width: 480px;
}
.delivery_section
{
    position: relative;
    display: flex;
    justify-content: space-between;
    // height: 837px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 75px;

    @media screen and (min-width: 768px) and (max-width:1279px) {
    flex-direction: column;
  }
}
.delivery__slogan
{
    color: white;
    font-size: 76px;
    font-weight: 300;
    line-height: 76px;
    // margin-bottom: 80px;
}





</style>

