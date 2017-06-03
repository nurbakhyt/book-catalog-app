import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import Router from './routes'
import VueBootstrap from 'bootstrap-for-vue'

Vue.use(VueBootstrap)
Vue.use(VueResource)
Vue.http.options.root = 'http://localhost:8081'

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})
