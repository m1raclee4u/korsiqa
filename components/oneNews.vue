<template>
   <div class="news">
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
    
        width: 225px;
        height: 300px;
        border: 1px solid gray;   
        background: gray;     
        margin: 0 15px 0 0;
            p{
                width: 150px;
                font-size: 20px;
                font-weight: 400;
                padding: 0 20px 20px 25px;
                color: whitesmoke;
            }
    }
    .slider_news{
        justify-content: space-around;
    }</style>