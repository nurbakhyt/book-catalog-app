<template>
  <div class="jumbotron">
    <h1>Welcome to Books Catalog</h1>
    <p class="lead">Hapi.js, MongoDB, Vue.js training project</p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.jumbotron {
  background: none;
  border-radius: 0;
  margin-bottom: 24px;
  text-align: center;

  h1 {
    font-weight: 400;
  }
}

@media screen and (min-width: 768px) {
  .jumbotron {
    padding-top: 36px;
    padding-bottom: 36px;

    h1 {
      font-size: 52px;
      font-weight: 400;
    }
  }
}
</style>
