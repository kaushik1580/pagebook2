<template>
<div id>
  <v-app>
    <v-content>
      <v-container grid-list-xl>
        <v-expansion-panels v-for="comment in comments" :key="comment.commentId">
          <v-expansion-panel>
            <v-expansion-panel-header>{{comment.userDTO.userName}}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>{{comment.commentText}}</p>
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
    </v-content>
  </v-app>
</div>
</template>


<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

export default {
  name: "Comments",
  data(){
    return {
        comments: undefined
    }
  },
  mounted(){
      const postId = 24
      Vue.axios.get(`http://10.177.1.69:8081/pb/post/getPostDetails/${postId}`)
      .then((resp) => {
        this.comments = resp.data.parentAndChildCommentDTO
        console.log(resp.data.parentAndChildCommentDTO)
      })
  }
};
</script>