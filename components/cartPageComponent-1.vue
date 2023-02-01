<template>
    <section>
        <div class="cart">
            <div class="cartNavigation">
                <span class="spanActive">Ваш заказ</span>
                <hr class="first hrActive">
                <span class="spanActive">Способ получения</span>
                <hr class="hrActive">
                <span>Подтверждение</span>
            </div>
            <div class="deliveryForms">
                <div class="deliveryInfo">
                    <div class="flex_row">
                        <div class="text-field__name">
                            <label class="text-field__label" for="login">Имя</label>
                            <input class="text-field__input" autocomplete="new-password" type="text" placeholder="Иван" v-model="input_name">
                        </div>     
                        <div class="text-field__number">
                            <label class="text-field__label" for="login">Номер телефона</label>
                            <input class="text-field__input" autocomplete="new-password" type="text" placeholder="79993331512" v-model="input_number">
                        </div>     
                    </div>
                    <div class="flex_row">
                        <div class="text-field__street">
                            <input class="text-field__input_center" autocomplete="new-password" type="text" placeholder="Улица" v-model="input_street">
                        </div>     
                        <div class="text-field__home">
                            <input class="text-field__input_center" autocomplete="new-password" type="text" placeholder="Дом" v-model="input_home">
                        </div>  
                        <div class="text-field__entrance">
                            <input class="text-field__input_center" autocomplete="new-password" type="text" placeholder="Подъезд" v-model="input_entrance">
                        </div>    
                        <div class="text-field__flat">
                            <input class="text-field__input_center" autocomplete="new-password" type="text" placeholder="Кв" v-model="input_flat">
                        </div>   
                        <div class="text-field__floor">
                            <input class="text-field__input_center" autocomplete="new-password" type="text" placeholder="Этаж" v-model="input_floor">
                        </div>  
                        <div class="text-field__code">
                            <input class="text-field__input_center" autocomplete="new-password" type="text" placeholder="Код" v-model="input_code">
                        </div>   
                    </div>
                    <div class="flex_row">
                        <div class="text-field__comment">
                            <input class="text-field__input_center" autocomplete="new-password" type="text" placeholder="Коментарий к заказу" v-model="input_comment">
                        </div>  
                    </div>
                    
                </div>
                <div class="payForms">
                        <button class="text-field__pay">
                            <span> Способы оплаты </span>
                            <img :src="require('../static/arrowDown.png')" alt="" style="width: 9px; height: 5px">
                        </button>     
                        <!-- v-if="Наличные" -->
                        <div class="text-field__change">
                            <input class="text-field__input_center" autocomplete="new-password" type="text" placeholder="С какой суммы сдача?" v-model="input_street">
                        </div>   
                        <div class="text-field__number">
                            <input class="text-field__input_center" autocomplete="new-password" type="text" placeholder="С какой суммы сдача?" v-model="input_street">
                        </div>  

                </div>
            </div>
        </div>
       
    </section>
</template>

<script>
import Swiper, { Navigation, Pagination, EffectCoverflow } from 'swiper'
import 'swiper/swiper-bundle.css'

Swiper.use([ Navigation, Pagination, EffectCoverflow ])

export default {
    data(){
        return {
        input_name: '',
        input_number: '',
        input_street: '',
        input_home: '',
        input_entrance: '',
        input_flat: '',
        input_floor: '',
        input_code: '',
        input_comment: ''
        }
    },
     mounted() {
      new Swiper('.cartSlider', {
        // preloadImages: '', false,
        // lazy: true,
        // loop: true,
        slidesPerView: 4.5,
        spaceBetween: 30,
        grabCursor: true,
    })
    }, 
     updated() {
      new Swiper('.cartSlider', {
        // preloadImages: false,
        // lazy: true,
        // loop: true,
        slidesPerView: 4.5,
        spaceBetween: 30,
        grabCursor: true,
    })
    }, 
    methods: {
        
    },
    
    
}
</script>

<style lang="scss" scoped>
    .payForms{
        width: 380px;
        display: flex;
        flex-direction: column;
    }

    .deliveryForms{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .flex_row{
        display: flex;
        margin-bottom: 25px;
    }

    .text-field__change{
        background-color: #292929;
        color: white;
        width: 100%;
        height: 70px;
        margin-bottom: 25px;

    }

    // .text-field__change{
    //     // display: flex;
    //     // justify-content: space-between;
    //     // align-items: center;
    //     text-align: start !important;
    //     margin: 0 0 25px 0 !important;
    //     padding: 0 20px !important;
    //     background-color: transparent;
    //     border: 1px solid white;
    //     color: white;
    //     width: 100%;
    //     height: 70px;
    //     margin-bottom: 25px;
    //         span {
    //             color: white;
    //         }

    // }
    
    .text-field__pay{
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: start !important;
        margin: 0 0 25px 0 !important;
        padding: 0 20px !important;
        background-color: transparent;
        border: 1px solid white;
        color: white;
        width: 100%;
        height: 70px;
        margin-bottom: 25px;
            span {
                color: white;
            }

    }
    
    .text-field__comment{
        background-color: #292929;
        color: white;
        width: 860px;
        height: 150px;
        margin-right: 25px;

    }

    .text-field__code{
        background-color: #292929;
        color: white;
        width: 60px;
        height: 70px;
        margin-right: 25px;

    }

    .text-field__floor{
        background-color: #292929;
        color: white;
        width: 80px;
        height: 70px;
        margin-right: 25px;

    }

    .text-field__flat{
        background-color: #292929;
        color: white;
        width: 60px;
        height: 70px;
        margin-right: 25px;

    }

    .text-field__entrance{
        background-color: #292929;
        color: white;
        width: 111px;
        height: 70px;
        margin-right: 25px;

    }

    .text-field__home{
        background-color: #292929;
        color: white;
        width: 90px;
        height: 70px;
        margin-right: 25px;

    }

    .text-field__street{
        background-color: #292929;
        color: white;
        width: 335px;
        height: 70px;
        margin-right: 25px;
    }

    .text-field__number{
        background-color: #292929;
        color: white;
        width: 385px;
        height: 70px;
    }

    .text-field__name{
        margin-right: 25px;
        background-color: #292929;
        color: white;
        width: 450px;
        height: 70px;
    }
    /* стили для label */
    .text-field__label {
    padding: 0 20px;
    font-size: 12.5px;
    position: relative;
    top: 10px;
    color: #828282;
    }
    /* стили для input */
    .text-field__input {
    margin-top: -20px;
    display: block;
    width: 96%;
    height: 43px;
    padding: 25px 0 0 20px;
    font-family: inherit;
    font-size: 15px;
    font-weight: 500;
    color: white;
    background-color: #292929;
    }
    .text-field__input_comment {
    margin-top: 10px;
    display: block;
    width: 60%;
    height: 20px;
    padding: 5px 0 0 20px;
    font-family: inherit;
    font-size: 15px;
    font-weight: 500;
    // line-height: 1.5;
    color: white;
    background-color: #292929;
    }    
    .text-field__input_center {
    display: block;
    width: 70%;
    height: 70px;
    padding: 0 0 0 20px;
    font-family: inherit;
    font-size: 15px;
    font-weight: 500;
    // line-height: 1.5;
    color: white;
    background-color: #292929;
    }
    .text-field__input:focus {
    border: none;
    color: white;
    background-color: #292929;
    border-color: #bdbdbd;
    outline: 0;
    }
    
    button{
        border-radius: 2px;
        margin: 0 -6px !important;
        width: 35px;
        height: 35px;
        padding: 0 !important;
        color: #828282;
        font-weight: 300;
        background-color: #3c3c3c;
    }    
    .cartSlider{
        width: 100%;
        display: flex;
        flex-direction: row;
    }
    .cartInfo{        
        padding: 0 35px 20px 35px;
        height: 185px;
        align-items: center;
        justify-content: start;
            h1{
                font-size: 17px;
                margin-bottom: 10px;
                font-weight: 400;
            }
            h2{
                margin-bottom: 35px;
                font-weight: 500;
                font-size: 12.5px;
                color: #bababa;
            }
            h4{
                // height: 400px;
                // text-align: center;
            }
            h3 {
                width: 50px;
                height: 20px;
                color: orangered;
                font-size: 11px;
                font-weight: 400;
                text-align: center;
                cursor: pointer;
                    &:hover{
                        font-weight: 500;
                        // color: orangered;
                        // font-size: 12px;
                        // transform: translate3d(0px, -0.5px, 0px);
                    }
            }
            .priceAndQuantitiy{
                margin-bottom: 35px;
            }
    }    
    .price {
        span {
            font-size: 25px;
            color: white;
        }
    }
    .priceAndQuantitiy{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .cartProduct{
        width: 265px;
        height: 430px;
        background-color: #252525;
        display: flex;
        flex-direction: column;                   
    }
       
    .opacity {
        opacity: 0.8;
    }
    .addProduct{
        width: 265px;
        height: 430px;
        background-color: #252525;
        display: flex;
        flex-direction: column; 
        justify-content: center;
        align-items: center;
            
            span {
                // font-weight: 300;
                padding: 15px;
                font-size: 28px;
                text-align: center;
            }
    }
   
    .img{
        height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
        height: 150px;
        width: 228px;
        }
    }
    span{
        font-size: 15px;
        font-weight: 300;
        color: #535353;        
    }
    .spanActive{
        color: rgb(255, 89, 0);
    }
    hr{
        max-width: 420px;
        width: 100%;
        height: 1px;
        border-width: 0px;
        background-image: linear-gradient(to left, transparent, rgb(53, 53, 53));        
    }
    .first{
        background-color: rgb(255, 89, 0) !important;

    }
    .hrActive{
        background-image: linear-gradient(to left, transparent, rgb(255, 89, 0));
    }
    .cart{
        width: 100%;
        margin-top: 180px;
        height: 570px;        
    }
    .cartNavigation{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 65px;
        
        
    }
</style>