export { default as CartMenu } from '../../components/cartMenu.vue'
export { default as Copyright } from '../../components/copyright.vue'
export { default as Delivery } from '../../components/delivery.vue'
export { default as FoodSlider } from '../../components/foodSlider.vue'
export { default as Footer } from '../../components/footer.vue'
export { default as Header } from '../../components/header.vue'
export { default as Menu } from '../../components/menu.vue'
export { default as MenuNavigation } from '../../components/menuNavigation.vue'
export { default as NewsSlider } from '../../components/newsSlider.vue'
export { default as OneItemPageItem } from '../../components/oneItemPage-Item.vue'
export { default as OneNews } from '../../components/oneNews.vue'
export { default as OneSlide } from '../../components/oneSlide.vue'
export { default as Product } from '../../components/product.vue'
export { default as Snacks } from '../../components/snacks.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
