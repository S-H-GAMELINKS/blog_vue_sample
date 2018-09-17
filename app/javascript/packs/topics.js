import Vue from 'vue/dist/vue.esm'
import Index from './components/topics/index.vue'

const app = new Vue({
  el: '#topics',
  components: {
    'topic-index': Index,
  }
})