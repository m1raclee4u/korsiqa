<template>
   <div class="menu__item__big">
       <div class="menu__item__big__info">
           <h4>{{menuItemBig.tag}}</h4>
            <div class="menu__item__big__header">
                <h1>{{menuItemBig.name}}</h1>
            </div>    
            <div class="menu__item__big__info__lower">        
                <span>{{menuItemBig.info}}</span>
                <div class="menu__item__big__buy">
                    <div class="menu__item__big__price">
                        <h5>{{menuItemBig.price}}</h5>
                        <h3>{{menuItemBig.priceOld}}</h3>
                    </div>
                    <button class="buy">
                        <span>Выбрать</span>                
                    </button>           
                </div>
            </div>   
       </div>
       <img class="back_item_big" :src="menuItemBig.image" alt="" >
   </div>
</template>

<script>
export default {
    name: "test",
    props: [
        "menuItemBig",
    ]
}
</script>

<style lang="scss">
    
    </style>