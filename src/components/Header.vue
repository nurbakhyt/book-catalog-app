<template>
<nav class="navbar navbar-inverse">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="/">Books</a>
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><a href="/">Catalog</a></li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'header',
}
</script>

<style lang="scss">
.navbar {
  border-radius: 0;
}
.navbar-inverse {
  .navbar-brand {
    color: #eee;
  }
  .navbar-nav {
    > li {
      > a {
        color: #eee;
      }
    }
  }
}
</style>
