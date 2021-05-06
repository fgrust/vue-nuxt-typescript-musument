<template>
  <button class="btn-favorite btn-rounded" v-bind="$attrs" v-on="$listeners">
    <svg
      id="wishlist"
      width="20px"
      height="20px"
      viewBox="0 4 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="icon"
      :class="{ icon__active: isActive }"
    >
      <!-- Generator: Sketch 42 (36781) - http://www.bohemiancoding.com/sketch -->
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <polygon
        id="Wishlist-Icon"
        stroke="none"
        fill-rule="evenodd"
        points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"
      ></polygon>
    </svg>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.icon {
  width: 20px;
  height: 20px;
  fill: #d9d9d9;
  transition: 0.3s fill;

  &__active {
    fill: #fcbd50;
  }
}

button {
  border: 1px solid #d9d9d9;
  background-color: #fff;
  cursor: pointer;
  transition: 0.3s border, 0.3s color, 0.3s background-color;

  &:hover {
    border: 1px solid #767e91;

    & > .icon {
      fill: #767e91;

      &__active {
        fill: #b07000;
      }
    }
  }
}

.btn-favorite {
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-rounded {
  border-radius: 50%;
}
</style>
