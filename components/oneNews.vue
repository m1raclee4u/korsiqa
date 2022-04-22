<template>
   <div class="news swiper-slide">
       <p>{{news.text}}</p>
       <img :src="news.image" alt="">
   </div>
</template>

<script>
export default {
    name: "newsSlide",
    props: [
        "news"
    ]
}
</script>

<style lang="scss">
    .news{        
        display: flex;
        align-items: flex-end;
        // justify-content: center;    
        height: 300px;
        // border: 1px solid gray;   
        // background: gray;   
            p{
                width: 190px;
                font-size: 24px;
                font-weight: 300;
                padding: 0 25px 30px 25px;
                color: whitesmoke;
                z-index: 3;
            }
            img{
                position: absolute;
                width: 100%;
                height: 100%;
                // z-index: 1;
                top: 0px;
                border-radius: 15px;
            }
    }
   </style>