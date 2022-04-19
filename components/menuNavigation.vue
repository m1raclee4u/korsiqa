<template>
    <div class="form_radio_btn">
        {{selected}}
        <div>
            <input type="radio" :id="navBar.message" name="categories" :value="navBar.message" :data-tag="navBar.tag" @click="selected=navBar.message" checked>
            <label :for="navBar.message">{{navBar.message}}</label>
        </div>
    </div>
    <!-- <li class="navigation">
        <NuxtLink :to="navBar.link">
                {{navBar.message}}
        </NuxtLink>
    </li> -->
</template>

<script>
export default {
    name: "test",
    props: [
        "navBar"
    ],
    data(){
        return{
            selected: ''
        }
    }
    
}
</script>

<style lang="scss">
    .navigation{
        flex-direction: row;
        text-decoration: none;
        justify-content: center;
        color: wheat;
            a {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
                color: gray;
                text-decoration: none;
                transition: 0.5s;
            }
            a:hover{
                color: white;
                padding: 7px 10px;
                background: orangered;
                transition: 0.5s;
                border-radius: 3px;
                
            }
            a:active{
                color: white;
                padding: 7px 10px;
                background: orangered;
                transition: 0.5s;
                border-radius: 3px;
                
                
            }
    }
</style>

