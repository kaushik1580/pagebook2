<template>
<div>
  <v-app>
    <DetailPost/>
    <Comments/>
  </v-app>
</div>
</template>


<script>
// import Vue from 'vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// import jwtdecode from 'jwt-decode'
// Vue.use(VueAxios, axios);
import Comments from '../../../components/Comments'
import DetailPost from '../../../components/DetailPost'
export default {
  components: {
      Comments,
      DetailPost
  },
//   data(){
//     return {
//         userId: jwtdecode(localStorage.getItem("token")).userId,
//         comments: undefined,
//         posts: {
//               "userId" : this.userId,
//               "postText" : "",
//               "postUrl" : "",
//               "postType" : 1,
//               "postCategory" : "General",
//               "timestamp" : 1234567891,
//               "sharedPostId" : null
//  },
//  add_comment:{
//     "postId" : null,
//     "userId" : this.userId,
//     "commentText" : "",
//     "parentCommentId" : 0
//   },
//  displayPosts: [],
//  links: {
//  'hearts': '/hearts',
//  'likes': '/likes',
//  'dislikes': '/dislikes',
//  'angry': '/angry'
//  },
//  curr_reaction: 0,
//  react_data: {
//  "postId" : null,
//  "reactionType" : null,
//  "userId" : this.userIds
//  },
//  reaction_data: {
//  1: "likes",
//  2: "dislikes",
//  3: "angry",
//  4: "hearts"
//  },
//  items: ['General', 'Sports', 'Fashion', 'Automobile', 'Food', 'Education'],
//     }
//   },
//   mounted(){
//     const uid = this.userId
//       Vue.axios.get(`http://10.177.1.69:8081/pb/story/getFriendsStories/${uid}`)
//       .then((resp) => {
//       this.stories = resp.data
//       console.log("LOLLLLL");
//       console.log(resp.data)
//       })
//       const postId = this.$store.state.postId
//       Vue.axios.get(`http://10.177.1.69:8081/pb/post/getPostDetails/${postId}/${uid}`)
//       .then((resp) => {
//         this.displayPosts.push(resp.data)
//         this.comments = resp.data.parentAndChildCommentDTO
//         console.log(resp.data.parentAndChildCommentDTO)
//       })
//   },
//   methods: {
//  func: function(val, index){
//  this.react_data.userId = this.displayPosts[index].postDTO.userDTO.userId
//  this.react_data.postId = this.displayPosts[index].postDTO.postId
//  this.react_data.reactionType = val
//  console.log(this.react_data)
//  this.axios.post(`http://10.177.1.69:8081/pb/reaction/updateReaction`, this.react_data)
//  .then((resp) => {
//  console.log(resp)
//  })
//  // console.log(this.curr_reaction !== val )
//  // console.log(this.displayPosts.)
//  if(this.curr_reaction !== val){
//  if(this.curr_reaction !== 0){
//  this.displayPosts[index].reactionsDTOS[this.curr_reaction-1].count = this.displayPosts[index].reactionsDTOS[this.curr_reaction-1].count-1
//  }
//  this.displayPosts[index].reactionsDTOS[val-1].count = this.displayPosts[index].reactionsDTOS[val-1].count+1
//  // console.log(this.displayPosts[index].reactionsDTOS[this.curr_reaction-1].count)
//  this.curr_reaction = val
//  }
//  else{
//  this.displayPosts[index].reactionsDTOS[val-1].count = this.displayPosts[index].reactionsDTOS[val-1].count-1
//  this.curr_reaction = 0
//  }
//  },
//  postData (e) {
//  this.posts.timestamp = Date.now()
//  console.log(this.posts.timestamp)
//  this.axios.post('http://10.177.1.69:8081/pb/post/addPost', this.posts)
//  .then((resp) => {
//  console.log(resp.data)
//  // if (resp.data) {
//  // this.$router.push('/home')
//  // }
//  })
//  .catch(error => alert(error))
//  e.preventDefault()
//  },
//  replyComment (comment) {
//   this.add_comment.userId = this.userId
//   this.add_comment.postId = comment.postId
//   this.add_comment.parentCommentId = comment.commentId
// console.log(this.add_comment)
//   Vue.axios.post('http://10.177.1.69:8081/pb/comment/addComment/', this.add_comment)
//   .then((resp) => {
//   console.log(resp.data)
//   // if (resp.data) {
//   // this.$router.push('/home')
//   // }
//   })
//   .catch(function (error){
//     console.log(error);
//   });
// },
//  },
 
};
</script>