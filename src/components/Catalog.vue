<template>
<div class="container">
  <Jumbotron />
  <List />
</div>
</template>

<script>
import List from './BooksList.vue'
import Jumbotron from './Jumbotron.vue'

export default {
  name: 'Catalog',
  components: {
    'Jumbotron': Jumbotron,
    'List': List
  }
}
</script>

<style lang="scss">

</style>
