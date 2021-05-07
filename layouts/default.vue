<template>
  <div>
    <navbar />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '~/components/Navbar.vue'

export default Vue.extend({
  components: {
    Navbar,
  },
})
</script>

<style lang="scss">
@font-face {
  font-family: 'Lato-Bold';
  src: url('~assets/fonts/Lato-Bold.ttf') format('ttf');
}

@font-face {
  font-family: 'Lato-BoldItalic';
  src: url('~assets/fonts/Lato-BoldItalic.ttf') format('ttf');
}

@font-face {
  font-family: 'Lato-Italic';
  src: url('~assets/fonts/Lato-Italic.ttf') format('ttf');
}

@font-face {
  font-family: 'Lato-Regular';
  src: url('~assets/fonts/Lato-Regular.ttf') format('ttf');
}

html {
  font-size: 12px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  font-family: 'Lato-Regular', sans-serif;
}
</style>
