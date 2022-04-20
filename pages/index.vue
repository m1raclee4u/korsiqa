<template>
  <div class="container">
      <transition name="slide-opacity">
        <div class="blackout" v-show="$store.state.isVisibleBasket" @click="$store.commit('changeBasket', false)"></div>
      </transition>
    <Header />
    <FoodSlider />
    <NewsSlider/>
    <Menu />
    <Snacks />
    <Delivery />
    <Footer />
    <Copyright />    
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.blackout{
 width: 100%;
 height: 100%;
 position: absolute;
 background-color: black;
 z-index: 90;
 opacity: 0.5;
 cursor: pointer;
}


.slide-fade-enter-active {
      transition: all .5s ease;
    }
    .slide-fade-leave-active {
      transition: all .5s ease;
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active до версии 2.1.8 */ {
      transform: translateX(50px);
      opacity: 0;
    }


    .slide-opacity-enter-active {
      transition: all .8s ease;
    }
    .slide-opacity-leave-active {
      transition: all .8s ease;
    }
    .slide-opacity-enter, .slide-opacity-leave-to
    /* .slide-fade-leave-active до версии 2.1.8 */ {
      /* transform: translateX(10px); */
      opacity: 0;
    }

</style>