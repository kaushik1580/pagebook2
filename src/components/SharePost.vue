<template>
    <div>
        <v-chip @click="postShare(post.postDTO)">Share Post</v-chip>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import jwtdecode from 'jwt-decode'
Vue.use(VueAxios, axios);
export default {
    name: "Ads",
    data(){
        return{
            userId: jwtdecode(localStorage.getItem("token")).userId,
            posts: {
                "userId" :this.userId,
                "postText" : "",
                "postUrl" : "",
                "postType" : 1,
                "postCategory" : "General",
                "timestamp" : 1234567891,
                "sharedPostId" : null
            },
            // stories: undefined,
        }
    },
    methods: {
        postShare (post) {
            this.posts.timestamp = Date.now()
            this.posts.sharedPostId = post.postId
            this.posts.postText = post.postText
            this.posts.postCategory = post.postCategory
            this.posts.postUrl = post.postUrl
            Vue.axios.post('http://10.177.1.69:8081/pb/post/addPost', this.posts)
            .then((resp) => {
            console.log(resp.data)
            // if (resp.data) {
            // this.$router.push('/home')
            // }
            })
            .catch(function (error){
                console.log(error);
            });
        },
    }
    // mounted() {
    //     const uid = this.userId
    //     Vue.axios.get(`http://10.177.1.69:8081/pb/story/getFriendsStories/${uid}`)
    //         .then((resp) => {
    //         this.stories = resp.data
    //         console.log("LOLLLLL");
    //         console.log(resp.data)
    //         })
    // }
}
</script>