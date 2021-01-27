<template>
     <div class="post" style="float:left">
        <v-card class="" max-width="1000" style="margin:0px 0px 20px 0px" outlined v-for="(post,index) in displayPosts" :key="post.userId">
        <v-img height="200" :src="post.postDTO.postUrl" float="right"></v-img>
        <v-card-title>{{post.postDTO.userDTO.username}}</v-card-title>
        <v-card-text>
        <v-row align="center" class="mx-5">
        </v-row>
        <div @click="toPost(post.postDTO.postId)">{{post.postDTO.postText}}</div>
        <div><h6> {{post.postDTO.timestamp}} </h6> </div>
        </v-card-text>
        <v-divider class="mx-4"></v-divider>
        <v-card-text class="mx=5">
        <v-chip-group column>
        <v-chip @click="func(1,index)" ><v-icon>mdi-thumb-up</v-icon></v-chip>
        <v-chip @click="func(2,index)"><v-icon>mdi-thumb-down</v-icon></v-chip>
        <v-chip @click="func(3,index)"><i class="fa fa-angry"></i></v-chip>
        <v-chip @click="func(4,index)"><v-icon>mdi-heart</v-icon></v-chip>
        </v-chip-group>
        </v-card-text>
        <v-chip class="ma-1" v-for="value in post.reactionsDTOS" :key="value.reaction_type" @click="reactTo(value.reaction_type, post.postDTO.postId)">{{reaction_data[value.reactionType]}} {{value.count}}</v-chip>
        <!-- <router-link to="/comdetail"><v-btn rounded >Comment Details</v-btn></router-link> -->
        <v-chip @click="postShare(post.postDTO)">Share Post</v-chip>
        <div>
        <v-dialog width="500">
        <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" color="#006499" style="margin:20px">
        Add Comment
        </v-btn>
        </template>
        <v-card>
        <v-card-title>
        <h2>Add a new Comment</h2>
        </v-card-title>
        <v-card-text>
        <v-form class="px-3" ref="form">
        <v-textarea v-model="add_comment.commentText" label="Content"></v-textarea>
        <v-spacer></v-spacer>
        <v-btn rounded  @click="postComment(post.postDTO.postId)" color="#006499">Submit</v-btn>
        </v-form>
        </v-card-text>
        </v-card>
        </v-dialog>
        </div>
        </v-card>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import jwtdecode from 'jwt-decode'
Vue.use(VueAxios, axios);
export default {
    name: "DisplayPost",
    data(){
        return{
            userId: jwtdecode(localStorage.getItem("token")).userId,
            displayPosts: undefined,
            posts: {
                "userId" :this.userId,
                "postText" : "",
                "postUrl" : "",
                "postType" : 1,
                "postCategory" : "General",
                "timestamp" : 1234567891,
                "sharedPostId" : null
            },
            add_comment:{
                "postId" : null,
                "userId" : this.userId,
                "commentText" : "",
                "parentCommentId" : 0
            },
            curr_reaction: 0,
            react_data: {
                "postId" : null,
                "reactionType" : null,
                "userId" : null
            },
            reaction_data: {
                1: "likes",
                2: "dislikes",
                3: "angry",
                4: "hearts"
            },
            items: ['General', 'Sports', 'Fashion', 'Automobile', 'Food', 'Education'],
        }
    },
    mounted() {
        const uid = this.userId
        console.log(uid)
        Vue.axios.get(`http://10.177.1.69:8081/pb/post/getFriendPosts/${uid}`)
            .then((resp) => {
            this.displayPosts = resp.data
            console.log(resp.data)
        })
    },
    methods:{
        reactTo(val, id){
            this.$store.state.postId_react = id
            this.$store.state.reactId = val
            this.$router.push({path: `/reaction/`})
        },
        toPost(postId){
            console.log(postId)
            this.$store.state.postId = postId
            this.$router.push({path: `/comdetail/`})
        },
        func: function(val, index){
            this.react_data.userId = this.displayPosts[index].postDTO.userDTO.userId
            this.react_data.postId = this.displayPosts[index].postDTO.postId
            this.react_data.reactionType = val
            console.log(this.react_data)
            this.axios.post(`http://10.177.1.69:8081/pb/reaction/updateReaction`, this.react_data)
            .then((resp) => {
            console.log(resp)
            })
            // console.log(this.curr_reaction !== val )
            // console.log(this.displayPosts.)
            if(this.curr_reaction !== val){
            if(this.curr_reaction !== 0){
            this.displayPosts[index].reactionsDTOS[this.curr_reaction-1].count = this.displayPosts[index].reactionsDTOS[this.curr_reaction-1].count-1
            }
            this.displayPosts[index].reactionsDTOS[val-1].count = this.displayPosts[index].reactionsDTOS[val-1].count+1
            // console.log(this.displayPosts[index].reactionsDTOS[this.curr_reaction-1].count)
            this.curr_reaction = val
            }
            else{
            this.displayPosts[index].reactionsDTOS[val-1].count = this.displayPosts[index].reactionsDTOS[val-1].count-1
            this.curr_reaction = 0
            }
        },
        postComment (id) {
            this.add_comment.postId = id
            this.add_comment.userId = this.userId
            console.log(this.add_comment)
            Vue.axios.post('http://10.177.1.69:8081/pb/comment/addComment/', this.add_comment)
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
}
</script>