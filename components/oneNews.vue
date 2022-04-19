<template>
   <div class="news swiper-slide">
       <p>{{text}}</p>
   </div>
</template>

<script>
export default {
    name: "test",
    props: [
        "text"
    ]
}
</script>

<style lang="scss">
    .news{        
        display: flex;
        align-items: flex-end;
        justify-content: center;    
        height: 300px;
        border: 1px solid gray;   
        background: gray;   
            p{
                width: 190px;
                font-size: 24px;
                font-weight: 300;
                padding: 0 25px 30px 25px;
                color: whitesmoke;
            }
    }
    .slider_news{
        justify-content: space-around;
    }</style>