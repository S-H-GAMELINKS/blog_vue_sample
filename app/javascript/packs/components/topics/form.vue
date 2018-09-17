<template>
<div>
    <input v-model="title" class="form-control" placeholder="Add your topic!!">
    <input v-model="content" class="form-control" placeholder="Add your content!!">
    <a class="waves-effect waves-light btn" v-on:click="postTopics">button</a>
</div>
</template>

<script>
import axios from 'axios'

export default {
    data: function() {
        return {
            title: "",
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
