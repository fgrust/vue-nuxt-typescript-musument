<template>
  <b-card
    :img-src="`${product.cover_image_url}&q=60&fit=crop&h=320`"
    :img-alt="product.title"
    img-top
    :title="product.title"
    class="mb-3"
  >
    <b-card-text v-html="product.description" />
    <b-card-text class="text-center price">
      <span
        v-if="isDiscount"
        class="stroke-text"
        v-html="product.original_retail_price.formatted_value"
      />
      <span
        :class="{ 'text-danger': isDiscount }"
        v-html="product.retail_price.formatted_value"
      />
    </b-card-text>
    <favorite-button
      class="btn-favorite"
      :isActive="isinw"
      @click="toggleFavorite"
    />

    <b-button
      pill
      variant="outline-secondary"
      block
      :disabled="isinb"
      @click="addToCart"
      >{{ isinb ? 'IN CART' : 'ADD TO CART' }}</b-button
    >
  </b-card>
</template>

<script lang="ts">
import { Vue, Component, Prop, Getter, Mutation } from 'nuxt-property-decorator'
import { IProductItem } from '~/@types'
import FavoriteButton from './FavoriteButton.vue'

@Component({ components: { FavoriteButton } })
export default class Card extends Vue {
  @Prop() product?: IProductItem

  @Getter isInWishlist!: Function
  @Getter isInBag!: Function

  @Mutation addToBag!: Function
  @Mutation addToWishlist!: Function
  @Mutation removeFromWishlist!: Function

  get isinw() {
    return this.product && this.isInWishlist(this.product.uuid)
  }

  get isinb() {
    return this.product && this.isInBag(this.product.uuid)
  }

  get isDiscount() {
    return this.product && this.product.discount > 0
  }

  toggleFavorite() {
    if (this.product) {
      this.isinw
        ? this.removeFromWishlist(this.product.uuid)
        : this.addToWishlist(this.product.uuid)
    }
  }

  addToCart() {
    this.product &&
      this.addToBag({
        uuid: this.product.uuid,
        price: this.product.retail_price.value,
        title: this.product.title,
        img: this.product.cover_image_url,
      })
  }
}
</script>

<style lang="scss" scoped>
.stroke-text {
  text-decoration: line-through;
}
.btn-favorite {
  position: absolute;
  top: 8px;
  right: 8px;
}
button.disabled,
button:disabled {
  background-color: #c8d7e6;
  color: #525a61;
  font-weight: 600;
}
</style>
