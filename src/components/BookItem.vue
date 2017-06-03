<template>
<div class="col-md-3 col-sm-4">
  <div class="panel panel-default">
    
    <a v-if="book" :href="/books/+book._id">
      <div class="panel-body">
        <h3>{{ book.name }}</h3>
        <p>{{ book.author }}</p>
      </div>
    </a>

    <a v-if="!book" href="/book/add">
      <div class="panel-body">
        <h1>
          <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
        </h1>
        <p>Add new Book</p>
      </div>
    </a>
  </div>
</div>
</template>

<script>
export default {
  name: 'BookItem',
  props: ['book', 'add']
}
</script>

<style lang="scss">
.panel {
  cursor: pointer;
  text-align: center;

  &:hover {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  }

  > a {
    &:hover{
      text-decoration: none;
    }
  }
  .panel-body {
    min-height: 300px;
    overflow: hidden;

    h3,
    p {
      color: #333
    }
  }
}
</style>
