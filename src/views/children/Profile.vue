<template>
  <div>
    <Profile1/>
    <DisplayPost1/>
  </div>  
</template>
<script>
// import Vue from 'vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios);
// import jwtdecode from 'jwt-decode'
import Profile1 from '../../../src/components/Profile1.vue'
import DisplayPost1 from '../../../src/components/DisplayPost1.vue'
export default {
  name: 'Profile',
  components: {
    Profile1,
    DisplayPost1,
  },
  // data () {
  //   return{
  //   userId: jwtdecode(localStorage.getItem("token")).userId,
  //   userData: undefined,
  //   comments: undefined,
  //   add_comment:{
  //   "postId" : null,
  //   "userId" : this.userId,
  //   "commentText" : "",
  //   "parentCommentId" : 0
  // },
  //   posts: {
  //     "userId" : this.userId,
  //     "postText" : "",
  //     "postUrl" : "",
  //     "postType" : 1,
  //     "postCategory" : "General",
  //     "timestamp" : 1234567891,
  //     "sharedPostId" : null
  // },
  // displayPosts: undefined,
  // links: {
  //   'hearts': '/hearts',
  //   'likes': '/likes',
  //   'dislikes': '/dislikes',
  //   'angry': '/angry'
  // },
  // curr_reaction: 0,
  // react_data: {
  //   "postId" : null,
  //   "reactionType" : null,
  //   "userId" : this.userId
  // },
  // reaction_data: {
  //   1: "likes",
  //   2: "dislikes",
  //   3: "angry",
  //   4: "hearts"
  // },
  //   loading: false,
  //   selection: 1,
  //   }
  // },
  // mounted() {
  //   const uid = this.userId
  //   Vue.axios.get(`http://10.177.1.179:7081/pb/user/myProfile/${uid}`)
  //     .then((resp) => {
  //       this.userData = resp.data
  //       console.log(resp.data)
  //     })
  //   Vue.axios.get(`http://10.177.1.69:8081/pb/post/getUserPosts/${uid}`)
  //     .then((resp) => {
  //       this.displayPosts = resp.data
  //       console.log(resp.data)
  //     })
  //   Vue.axios.get(`http://10.177.1.69:8081/pb/story/getFriendsStories/${uid}`)
  //     .then((resp) => {
  //       this.stories = resp.data
  //       console.log("LOLLLLL");
  //       console.log(resp.data)
  //     })
  // },
  // methods: {
  //   reserve () {
  //     this.loading = true

  //     setTimeout(() => (this.loading = false), 2000)
  //   },
  //   func: function(val, index){
  //   this.react_data.userId = this.displayPosts[index].postDTO.userDTO.userId
  //   this.react_data.postId = this.displayPosts[index].postDTO.postId
  //   this.react_data.reactionType = val
  //   console.log(this.react_data)
  //   this.axios.post(`http://10.177.1.69:8081/pb/reaction/updateReaction`, this.react_data)
  //     .then((resp) => {
  //       console.log(resp)
  //     })
  //   // console.log(this.curr_reaction !== val )
  //   // console.log(this.displayPosts.)
  //   if(this.curr_reaction !== val){
  //     if(this.curr_reaction !== 0){
  //       this.displayPosts[index].reactionsDTOS[this.curr_reaction-1].count = this.displayPosts[index].reactionsDTOS[this.curr_reaction-1].count-1
  //     }
  //         this.displayPosts[index].reactionsDTOS[val-1].count = this.displayPosts[index].reactionsDTOS[val-1].count+1
  //           // console.log(this.displayPosts[index].reactionsDTOS[this.curr_reaction-1].count)
  //          this.curr_reaction = val
  //     }
  //     else{
  //       this.displayPosts[index].reactionsDTOS[val-1].count = this.displayPosts[index].reactionsDTOS[val-1].count-1
  //       this.curr_reaction = 0
  //     }
  //   },
  //   postData (e) {
  //     this.posts.timestamp = Date.now()
  //     console.log(this.posts.timestamp)
  //     this.axios.post('http://10.177.1.69:8081/pb/post/addPost', this.posts)
  //       .then((resp) => {
  //         console.log(resp.data)
  //         // if (resp.data) {
  //         //   this.$router.push('/home')
  //         // }
  //       })
  //       .catch(error => alert(error))
  //     e.preventDefault()
  //   },
  //   replyComment (comment) {
  //     this.add_comment.userId = this.userId
  //     this.add_comment.postId = comment.postId
  //     this.add_comment.parentCommentId = comment.commentId
  //   console.log(this.add_comment)
  //     Vue.axios.post('http://10.177.1.69:8081/pb/comment/addComment/', this.add_comment)
  //     .then((resp) => {
  //     console.log(resp.data)
  //     // if (resp.data) {
  //     // this.$router.push('/home')
  //     // }
  //     })
  //     .catch(function (error){
  //       console.log(error);
  //     });
  //   },
  // }
}
</script>
<style scoped>
.mx-auto{
  width: 60%;
  margin-top: 50px;
  height: 50%;
}
.pimg{
  height: 20px;
  width: 30px;
}
</style>