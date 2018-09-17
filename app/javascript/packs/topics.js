import Vue from 'vue/dist/vue.esm'
import Index from './components/topics/index.vue'
import Form from './components/topics/form.vue'

const app = new Vue({
  el: '#topics',
  components: {
    'topic-form': Form,
  }
})