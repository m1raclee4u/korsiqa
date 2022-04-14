<template>
    <section class="main">
        <div class="content flex">
            <div class="left">
                <h2 class="slogan">
                    Вкусно. <br> Празднично. <br> Экономно.
                </h2>
                <button class="food_buy">
                    <span>Хочу прямо сейчас</span>
                </button>
            </div>
            <div class="slider">
                 <oneSlide v-for="item in items" :product="item" :key="item.message"></oneSlide>
            </div>
        </div>
    </section>
</template>

<script>
import oneSlide from './oneSlide.vue'
export default {
    data(){
        return{
            items: [
                { 
                name: 'Вкусняшка',
                info: '30см, 500г',
                text: 'huy', 
                image: '_nuxt/assets/burger__slide_one.png',
                price: '599P',
                }
                
            ]
        }
    },
    components: {
        oneSlide
    }
}
</script>


<style lang="scss">
    .food_buy{
        background-color: orangered;
        padding: 20px 15px;
            span{
                color: white;
                font-size: 18px;
            }

    }
    .main{
        margin-bottom: 100px;
    }    
    .left{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 435px;
    }
    .content{        
        align-items: center;
        justify-content: space-between;
    }
    .slogan{
        font-size: 70px;
        font-weight: 400;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        line-height: 80px;
    }
    .slider{
        position: relative;
        right: -30px;
    }
</style>
