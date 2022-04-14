<template>
   <div class="slide swiper-slide">
       <div class="slider_info">
           <h1>{{product.name}}</h1>
           <span>{{product.info}}</span>
           <h5>{{product.price}}</h5>
       </div>


       <img :src="product.image" alt="Burger" class="back__one__slide">
   </div>
</template>

<script>
export default {
    name: "test",
    props: [
        "product",
    ]
}
</script>

<style lang="scss">
    .slide{              
        position: relative; 
        right: -30px;
        // background: gray;     
        display: flex;
        align-items: flex-start;
        justify-content: center;    
        width: 690px;
        height: 435px;
            p{
                width: 200px;
                font-size: 16px;
                font-weight: 500;
                padding: 0 15px 15px 15px;
                color: black;
                z-index: 1;
            }
    }
    .slider_info{
        display: flex;
        align-content: flex-start;
        width: 100%;
        flex-direction: column;
        z-index: 3;
            h1{
                font-size: 21px;
                font-weight: 400;                
                margin-bottom: 7px;
            };
            span{
                font-size: 14px;
                color: gray;
                margin-bottom: 10px;
            };
            h5{
                font-size: 26px;
                color: orangered;
                font-weight: 400;
            };
    }   
    .back__one__slide{
        position: absolute;
        width: 100%;
        height: 100%;
        animation: updown 4s ease infinite;
    }
    
    </style>