<template>
  <b-card
    :img-src="`${product.img}&q=60&fit=clip&h=60`"
    :img-alt="product.title"
    img-left
    no-body
    class="menu-item-wrapper p-1"
  >
    <b-card-body class="menu-item-body p-0">
      <p v-html="product.title" class="menu-item-content mb-0 p-1" />
      <b-button
        variant="outline-secondary"
        class="menu-item-action p-0"
        size="sm"
        @click.stop="removeItem"
      >
        ×
      </b-button>
    </b-card-body>
    <div class="overlay" />
  </b-card>
</template>

<script lang="ts">
import { Vue, Component, Prop, Mutation } from 'nuxt-property-decorator'
import { IBagItem } from '~/@types'

@Component
export default class MenuItem extends Vue {
  @Prop() product?: IBagItem

  @Mutation removeFromBag!: Function

  removeItem() {
    this.product && this.removeFromBag(this.product)
  }
}
</script>

<style lang="scss" scoped>
.menu-item-wrapper {
  border-radius: 0;
  background-color: transparent;

  &:hover {
    background-color: #fafafb;
  }
}
.menu-item-body {
  display: flex;
  align-items: center;

  .menu-item-content {
    font-size: 0.8rem;
    font-weight: 700;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .menu-item-action {
    font-size: 12px;
    height: 20px;
    width: 20px;
    min-width: 20px;
    border-radius: 50%;
  }
}
</style>
