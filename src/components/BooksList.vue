<template>
<div>
  <div class="progress" v-if="loading">
    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
      <span class="sr-only">60% Complete</span>
    </div>
  </div>

  <div class="alert alert-danger" v-if="error !==''" role="alert">{{ error }}</div>
  
  <div v-if="!loading">
    <Item
      v-for="book in books"
      :book="book"
      :key="book._id"
      :add="''"
    />
    <Item :add="'Add new Book'"/>
  </div>
</div>
</template>

<script>
import Item from './BookItem.vue'

export default {
  name: 'BooksList',
  components: {
    'Item': Item
  },
  data () {
    return {
      loading: false,
      books: [],
      error: ""
    }
  },
  mounted () {
    this.fetchBooks()
  },
  methods: {
    fetchBooks () {
      this.error = ""
      this.books = []
      this.loading = true
      this.$http.get('api/books')
        .then(response => {
          if (response.body.data.length)
            this.books = response.body.data
          else this.error = "No books"
          this.loading = false
        }, response => {
          this.error = "Failed to fetch books"
          this.loading = false
        })
    }
  }
}
</script>
