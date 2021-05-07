<template>
  <b-navbar toggleable="md" type="dark">
    <b-navbar-brand href="https://www.jagaad.it" target="__blank">
      <img
        src="~assets/images/jagaad.png"
        alt="Jagaad"
        class="d-inline-block align-top"
        height="30"
      />
      Jagaad
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown no-caret menu-class="p-0" right>
          <template slot="button-content">
            <div class="price-in-bag">
              <span v-html="price" class="mr-1" />
              <badge-icon
                icon="bag"
                :badge="`${countBag}`"
                :no-badge="!countBag"
              />
            </div>
          </template>

          <menu-item
            v-for="item in bag"
            :key="item.uuid"
            :product="item"
            class="dropdown-menu-item"
          />
          <p
            v-if="!(bag && bag.length)"
            class="dropdown-menu-item__empty py-3 m-0 text-secondary"
          >
            (No Item)
          </p>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown no-caret>
          <template slot="button-content">
            <badge-icon
              icon="favorite"
              :badge="`${countWishlist}`"
              :no-badge="!countWishlist"
            />
          </template>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import BadgeIcon from './BadgeIcon.vue'
import MenuItem from './MenuItem.vue'

export default Vue.extend({
  components: {
    BadgeIcon,
    MenuItem,
  },

  computed: {
    ...mapGetters(['priceInBag', 'countBag', 'countWishlist', 'bag']),

    price() {
      return new Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'EUR',
      }).format(this.priceInBag)
    },
  },
})
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #249fe3;
}
.price-in-bag {
  display: flex;
  align-items: center;

  & > span {
    color: #eee;
  }
}
.dropdown-menu-item {
  width: 320px;

  &__empty {
    text-align: center;
    background-color: #efefef;
  }
}
</style>
