import Vue from 'vue/dist/vue.esm'
import Index from './components/topics/index.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#topics',
    components: {
      'topic-index': Index,
    }
  })

  console.log(app)
})
