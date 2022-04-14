<template>
    <footer class="footer">
        <div class="footer__info flex">        
            <h1 class="title">
                KORSIQA
            </h1>
            <div class="text__info flex">
                <div class="info">
                    <p class="footer_text">
                        Если мы не успееем доставить заказ в теченнии 60 минут <br> 
                    минут, кроме соусов и продуктов из раздела "Другие <br> 
                    товары", курьер подарит вам сертификат
                    </p>
                    <a class="footer__call" href="tel:+228332">
                        8 800 555 35 35
                    </a>
                </div>
                <div class="links">
                    <div class="column__1">
                        <h3 class="footer__title">
                            КАКИЕ НИБУДЬ ПУНКТЫ
                        </h3>
                        <div class="line">

                        </div>
                        <nuxt-link to="#" class="footer_link">
                            Франшиза
                            </nuxt-link>
                        <nuxt-link to="#" class="footer_link">
                            Инвестиции
                            </nuxt-link>
                        <nuxt-link to="#" class="footer_link">
                            Поставщикам
                        </nuxt-link>
                    </div>
                    <div class="column__2">
                        <h3 class="footer__title">
                            ЕЩЕ КАКИЕ НИБУДЬ
                        </h3>
                        <div class="line">

                        </div>
                        <nuxt-link to="#" class="footer_link">
                            Почему мы готовим без <br> перчаток?
                        </nuxt-link>
                        <nuxt-link to="#" class="footer_link">
                            Экскурсии и мастер классы
                        </nuxt-link>
                        <nuxt-link to="#" class="footer_link">
                            Корпоративные заказы
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
.title{
    margin-bottom: 25px;
    font-size: 21px;
    font-weight: 700;
    color: gray;
}
.footer
{
    height: 275px;
    margin: 25px 0;
    border-bottom: 1px solid gray;
}
.footer__call{
    color: gray;
    font-size: 25px;
    font-weight: 500;
}
.footer_text
{
    color: gray;
    
    margin-bottom: 25px;
}
.footer__info
{
    flex-direction: column;
}
.text__info
{
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 25px;
}
.links{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;    
}
.column__1
{
    margin: 0 100px 0 0;
    display: flex;
    flex-direction: column;
        a{
            margin: 0 0 15px 0;
        }
}
.column__2
{
    display: flex;
    flex-direction: column;
        a 
        {
            margin: 0 0 15px 0;
        }
}
.line
{
    margin: 15px 0;
    width: 40px;
    height: 0px;
    border-top: 4px solid orangered;;
}
.info
{
    height: 200px;
    display: flex;
    flex-direction: column;
}

</style>