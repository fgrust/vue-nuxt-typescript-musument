<template>
  <button class="btn-favorite btn-rounded" v-bind="$attrs" v-on="$listeners">
    <icon name="favorite" class="icon" :class="{ icon__active: isActive }" />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from './BaseIcon.vue'

export default Vue.extend({
  components: {
    Icon,
  },

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
