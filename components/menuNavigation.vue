<template>
    <div class="form_radio_btn">
        <div v-if="navBar.message==='Все'">
            <input type="radio" :id="navBar.message" name="categories" :value="navBar.message" :data-active="navBar.active" checked>
            <label :for="navBar.message">{{navBar.message}}</label>
        </div>
        <div v-else>
            <input type="radio" :id="navBar.message" name="categories" :value="navBar.message" :data-active="navBar.active">
            <label :for="navBar.message">{{navBar.message}}</label>
        </div>
    </div>
    <!-- <li class="navigation">
        <NuxtLink :to="navBar.link">
                {{navBar.message}}
        </NuxtLink>
    </li> -->
</template>

<style lang="scss">


.form_radio_btn {
display: inline-block;
margin-right: 25px;
transition: 0.5s;
color: #999;
    input[type=radio] {
	display: none;
    }
    label {
	display: inline-block;
	cursor: pointer;
	line-height: 34px;
	user-select: none;
    transition: 0.5s;

    }
    input[type=radio]:checked + label {
	background: orangered;
	border-radius: 3px;
	padding: 5px 17px;
    color: white;
    transition: 0.5s;
    }
    label:hover {
	color: #666;
    background: orangered;
    transition: 0.5s;
	border-radius: 3px;
    color: white;
	padding: 5px 17px;
    }
    input[type=radio]:disabled + label {
	background: #efefef;
    transition: 0.5s;
    }
}


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

<script>
export default {
    name: "test",
    props: [
        "navBar"
    ]
}
</script>