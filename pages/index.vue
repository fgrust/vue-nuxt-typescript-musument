<template>
  <b-container>
    <b-alert
      v-model="error"
      class="position-fixed fixed-top m-0 rounded-0"
      variant="danger"
      dismissible
    >
      Server Error Occurs!
    </b-alert>
    <b-row>
      <b-col v-for="product in products" :key="product.uuid">
        {{ product.title }}
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { IProductItem } from '~/@types'

interface IFetchParam {
  limit: number
  offset: number
}

@Component
export default class HomePage extends Vue {
  error: boolean = false
  loading: boolean = false
  products: Array<IProductItem> = []

  async fetchData(params: IFetchParam) {
    this.loading = true
    try {
      this.products = await this.$axios.$get('', {
        params,
      })
    } catch (e) {
      this.products = []
      this.error = true
    } finally {
      this.loading = false
    }
  }

  mounted() {
    this.fetchData({ limit: 6, offset: 0 })
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
