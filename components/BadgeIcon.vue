<template>
  <div class="wrapper">
    <icon :name="icon" class="icon" />
    <span v-if="!noBadge" v-html="badge" class="badge" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from './BaseIcon.vue'

export default Vue.extend({
  components: {
    Icon,
  },

  props: {
    icon: {
      type: String,
      required: true,
    },
    badge: {
      type: String,
      default: null,
    },
    noBadge: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;

  .icon {
    fill: #464c52;
    transition: 0.3s fill;
    height: 32px;
    width: 32px;
  }

  &:hover > .icon {
    fill: #6a7580;
  }

  .badge {
    position: absolute;
    top: -8px;
    right: -8px;
    color: white;
    font-size: 10px;
    font-weight: 800;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    text-align: center;
    z-index: 9;
    padding: 0;
    padding-top: 2px;
  }
}
</style>
