<template>
<div>
    <p v-for="(topic, key, index) in topics" :key="index">
        {{topic.title}} {{topic.content}}
    </p>
</div>
</template>

<script>
import axios from 'axios'

export default {
    data: function() {
        return {
            topics: []
        }
    },
    mounted: function() {
        this.getTopics();
    },
    methods: {
        getTopics: function() {
            axios.get('api/topics').then((response) => {
                console.log(response.data);
                for(var i = 0; i < response.data.length; i++){
                    this.topics.push(response.data[i]);
                }
                console.log(this.topics);
            }, (error) => {
                console.log(error);
            });
        }
    }
}
</script>
