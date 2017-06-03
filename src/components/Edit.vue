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
      <li><a :href="'/books/'+book._id">{{ book.name }}</a></li>
      <li class="active">Edit</li>
    </ol>

    <div class="alert alert-success" v-if="success !==''" role="alert">{{ success }}</div>

    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <input-text v-model="book.name" title="Book name" subtitle="* required" placeholder="" required></input-text>
      </div>
      <div class="form-group">
        <input-text v-model="book.author" title="Author" subtitle="* required" placeholder="" required></input-text>
      </div>
      <button type="submit" class="btn btn-primary">Save</button>
    </form>
  </div>
</div>
</template>

<script>
export default {
  name: 'Edit',
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
            this.book = response.data.data[0]
          else this.error = response.body.message
          this.loading = false
        }, response => {
          if (response.status > 199 && response.status < 300) {
            this.error = `Failed to fetch a book with ID ${this.$route.params.id}`
            this.loading = false
          }
        })
    },
    onSubmit () {
      this.loading = true
      this.error = ""
      this.success = ""
      this.$http.put(`api/books/${this.$route.params.id}`, { name: this.book.name, author: this.book.author })
        .then(response => {
          this.loading = false
          this.error = ""
          this.success = response.body.message
        }, response => {
          this.error = `Failed to update a book with ID ${this.$route.params.id}`
          this.loading = false
          this.success = ""
        })
    }
  }
}
</script>

<style lang="scss">
</style>
