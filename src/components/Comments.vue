<template>
    <div style="float:left;">
    <!-- <v-content style="float:left;margin-right:1000px"> -->
      <v-container grid-list-xl style="float:left;width:600px;">
        <v-expansion-panels v-for="comment in comments" :key="comment.commentId">
          <v-expansion-panel>
            <v-expansion-panel-header>{{comment.userDTO.userName}}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>{{comment.commentText}}</p>
                <div>
                    <v-dialog width="500">
                    <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on"  style="margin:20px;color:#006499;">
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
                    <v-btn rounded  @click="replyComment(comment)" class="success mx-0 mt-3">Submit</v-btn>
                    </v-form>
                    </v-card-text>
                    </v-card>
                    </v-dialog>
                </div>
              <v-expansion-panels>
                <v-expansion-panel v-for="nested in comment.comments" :key="nested.commentId">
                  <v-expansion-panel-header>{{nested.userDTO.userName}}</v-expansion-panel-header>
                  <v-expansion-panel-content>{{nested.commentText}}</v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
    <!-- </v-content> -->
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import jwtdecode from 'jwt-decode'
Vue.use(VueAxios, axios);
export default {
    name: "Comments",
    data(){
        return{
            userId: jwtdecode(localStorage.getItem("token")).userId,
            displayPosts: [],
            comments: undefined,
            add_comment:{
                "postId" : null,
                "userId" : this.userId,
                "commentText" : "",
                "parentCommentId" : 0
            },
        }
    },
    mounted() {
        const uid = this.userId
        const postId = this.$store.state.postId
        Vue.axios.get(`http://10.177.1.69:8081/pb/post/getPostDetails/${postId}/${uid}`)
        .then((resp) => {
          this.displayPosts.push(resp.data)
          this.comments = resp.data.parentAndChildCommentDTO
          console.log(resp.data.parentAndChildCommentDTO)
        })
    },
    methods: {
        replyComment (comment) {
            this.add_comment.userId = this.userId
            this.add_comment.postId = comment.postId
            this.add_comment.parentCommentId = comment.commentId
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
    }
}
</script>