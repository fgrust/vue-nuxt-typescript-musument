<template>
  <svg v-html="require(`~/assets/icons/icon-${name}.svg`)" />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true,
    },
  },
})
</script>
