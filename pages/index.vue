<template>
  <b-container fluid="lg" class="py-5 px-md-3">
    <b-alert
      v-model="error"
      class="position-fixed fixed-top m-0 rounded-0"
      variant="danger"
      dismissible
    >
      Server Error Occurs!
    </b-alert>
    <b-row cols-md="3" cols="1">
      <b-col v-for="product in products" :key="product.uuid">
        <card :product="product" />
      </b-col>
    </b-row>
    <b-pagination
      v-model="currentPage"
      :total-rows="60"
      :per-page="6"
      first-text="<<"
      last-text=">>"
      prev-text="<"
      next-text=">"
      align="center"
    />
  </b-container>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'nuxt-property-decorator'
import Card from '~/components/Card.vue'
import { IProductItem, IFetchParam } from '~/@types'

@Component({ components: { Card } })
export default class HomePage extends Vue {
  error: boolean = false
  loading: boolean = false
  products: Array<IProductItem> = []
  currentPage: number = 1

  // Implementation SSR
  async fetch() {
    await this.fetchData({ limit: 6, offset: 0 })
  }

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

  @Watch('currentPage')
  onChangePage(val: number) {
    this.fetchData({ limit: 6, offset: val - 1 })
  }
}
</script>
