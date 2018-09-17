<template>
<div>
    <a class="waves-effect waves-light btn" v-on:click="postTopics">button</a>
</div>
</template>

<script>
import axios from 'axios'

export default {
    data: function() {
        return {
            title: "post test",
            content: "post test in form"
        }
    },
    methods: {
        postTopics: function() {
            axios.post('/api/topics', {topic: {title: this.title, content: this.content}}).then((response) => {
                console.log("posted!");
            }, (error) => {
                console.log(error);
            });
        }
    }
}
</script>
