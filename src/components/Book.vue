<template>
<div class="container">
  <div class="progress" v-if="loading">
    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
      <span class="sr-only">60% Complete</span>
    </div>
  </div>

  <div class="alert alert-danger" v-if="error !==''" role="alert">{{ error }}</div>

  <div v-if="!loading && error ===''">
    <ol class="breadcrumb">
      <li><a href="/">Catalog</a></li>
      <li class="active">{{ book.name }}</li>
    </ol>

    <div class="alert alert-success" v-if="success !==''" role="alert">{{ success }}</div>

    <div class="media">
      <div class="media-left">
        <img class="media-object" src="http://via.placeholder.com/200x300" alt="Book cover">
      </div>
      <div class="media-body">
        <h1 class="media-heading">{{ book.name }}</h1>
        <p>Author: {{ book.author }}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
    <div class="text-center">
      <a :href="'/books/edit/'+book._id" class="btn btn-default" role="button">
        <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
        Edit
      </a>
      <a @click="onDelete" class="btn btn-danger" role="button">
        <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        Delete
      </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Book',
  data () {
    return {
      loading: false,
      book: {},
      error: "",
      success: ""
    }
  },
  mounted () {
    this.fetchBook()
  },
  methods: {
    fetchBook () {
      this.loading = true
      this.error = ""
      this.book = {}
      this.$http.get(`api/books/${this.$route.params.id}`)
        .then(response => {
          if (response.body.data.length)
            this.book = response.body.data[0]
          else this.error = response.body.message
          this.loading = false
        }, response => {
          this.error = `Failed to fetch a book with ID ${this.$route.params.id}`
          this.loading = false
        })
    },
    onDelete () {
      this.loading = true
      this.error = ""
      this.success = ""
      this.$http.delete(`api/books/${this.$route.params.id}`)
        .then(response => {
          this.loading = false
          this.error = ""
          this.success = response.body.message
        }, response => {
          this.error = `Failed to delete a book with ID ${this.$route.params.id}`
          this.loading = false
          this.success = ""
        })
    }
  }
}
</script>

<style lang="scss">
.media {
  margin-bottom: 16px;

  &-left {
    float: left;
  }
}
</style>
