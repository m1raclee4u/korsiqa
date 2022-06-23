<template>
    <div class="buttonPromo">
        <div class="text-field">
            <label class="text-field__label" for="login">Промокод</label>
            <input class="text-field__input" autocomplete="off" type="text" placeholder="KORSIQ" v-model="input">
        </div>        
        <img v-if="input === 'korsiq'" :src="require('../static/checkmark.png')" alt="" class="checkmark">

    </div>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
    
  }

}
</script>

<style lang="scss" scoped>
    // @import url("//unpkg.com/element-ui@2.15.8/lib/theme-chalk/index.css");
    .buttonPromo{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 220px;
        color: gray;
        background-color: #FFF;
        border: none !important;
        img{
            width: 10px;
            height: 8px;
            padding: 0 15px;
        }
    }
    .text-field{
        width: 150px;
        height: 70px;
    }
    /* стили для label */
    .text-field__label {
    // display: block;
    // margin-top: 15px;
    padding: 0 15px;
    font-size: 12.5px;
    position: relative;
    top: 10px;
    }
    /* стили для input */
    .text-field__input {
    text-transform: uppercase;
    // margin-left: 25px;
    margin-top: 10px;
    display: block;
    width: 100%;
    height: 20px;
    padding: 5px 15px;
    font-family: inherit;
    font-size: 15px;
    font-weight: 400;
    // line-height: 1.5;
    color: #212529;
    background-color: #fff;
    // background-clip: padding-box;
    border: none;
    border-radius: 4px;
    // transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
    .text-field__input:focus {
    text-transform: uppercase;
    border: none;
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    // box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
    }
    

</style>