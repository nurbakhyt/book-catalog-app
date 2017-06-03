import Vue from 'vue'
import VueRouter from 'vue-router'
import Catalog from './components/Catalog.vue'
import Book from './components/Book.vue'
import Edit from './components/Edit.vue'
import Add from './components/Add.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/",
      component: Catalog
    },
    {
      path: "/books/:id",
      component: Book
    },
    {
      path: "/books/edit/:id",
      component: Edit
    },
    {
      path: "/book/add",
      component: Add
    }
  ]
})

export default router
