<template>
<div>
  <app-header />
  <router-view></router-view>
  <app-footer />
</div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-footer': Footer
  }
}
</script>

<style lang="scss">
body {
  font-family: "Segoe UI", sans-serif;
}
</style>
