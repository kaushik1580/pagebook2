<template>
 <div>

<Stories/>
 <!---------------------------------------------------- Add Post --------------------------------------------------------------------->
 <div>
   <span style="float:left">
 <AddPost/>
   </span>
 <!------------------------------------------------------- Add a Story --------------------------------------------------------->
 <span style="float:left;margin-top:20px">
 <AddStory/>
 </span>
 </div>
 <div class="sd">
  <Ads/>
  <div style="float:right;margin-right:40px">
  <Mutuals/>
  </div>
 </div>
 <!------------------------------------------------------ POST CARD --------------------------------------------------------------------->
 <DisplayPost/>
<!-- <v-container class='mx-3'> -->
<!-- </v-container> -->
 </div>
</template>
<script>
// import firebase from 'firebase';
// import Vue from 'vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// import jwtdecode from 'jwt-decode'
import Stories from '../../../src/components/Stories.vue'
import AddPost from '../../../src/components/AddPost.vue'
import AddStory from '../../../src/components/AddStory.vue'
import DisplayPost from '../../../src/components/DisplayPost.vue'
import Ads from '../../../src/components/Ads.vue'
import Mutuals from '../../components/Mutuals.vue'
// Vue.use(VueAxios, axios);
export default {
 components:{
   Stories,
   AddPost,
   AddStory,
   DisplayPost,
   Ads,
   Mutuals
 },
 name: "Home",
//  data(){
//  return {
//   userId: jwtdecode(localStorage.getItem("token")).userId,
//   imageData: null,
//   index: 0,
//   picture: null,
//   uploadValue: 0,
//   add_comment:{
//     "postId" : null,
//     "userId" : this.userId,
//     "commentText" : "",
//     "parentCommentId" : 0
//   },
//  posts: {
//  "userId" :this.userId,
//  "postText" : "",
//  "postUrl" : "",
//  "postType" : 1,
//  "postCategory" : "General",
//  "timestamp" : 1234567891,
//  "sharedPostId" : null
//  },
//  displayPosts: undefined,
//  links: {
//  'hearts': '/hearts',
//  'likes': '/likes',
//  'dislikes': '/dislikes',
//  'angry': '/angry'
//  },
//  curr_reaction: 0,
//  story_data: {
//    'userId': this.userId,
//    'storyUrl': []
//  },
//  react_data: {
//  "postId" : null,
//  "reactionType" : null,
//  "userId" : null
//  },
//  reaction_data: {
//  1: "likes",
//  2: "dislikes",
//  3: "angry",
//  4: "hearts"
//  },
//  items: ['General', 'Sports', 'Fashion', 'Automobile', 'Food', 'Education'],
// }
// },
//  mounted() {
//  const uid = this.userId
//  console.log(uid)
//  Vue.axios.get(`http://10.177.1.69:8081/pb/post/getFriendPosts/${uid}`)
//  .then((resp) => {
//  this.displayPosts = resp.data
//  console.log(resp.data)
//  })
//  Vue.axios.get(`http://10.177.1.69:8081/pb/story/getFriendsStories/${uid}`)
//  .then((resp) => {
//  this.stories = resp.data
//  console.log("LOLLLLL");
//  console.log(resp.data)
//  })
//  },
//  methods: {
//   //  reactTo(){
     
//   //  },
//    toPost(postId){
//      console.log(postId)
//      this.$store.state.postId = postId
//      this.$router.push(this.$router.push({path: `/comdetail/`}))
//    },
//    previewImage(event) {
//       this.uploadValue=0;
//       this.picture=null;
//       this.imageData = event.target.files[0];
//       console.log(this.imageData)
//       this.onUpload();
//     },
//     previewImage1(event) {
//       this.uploadValue=0;
//       this.picture=null;
//       this.imageData = event.target.files[0];
//       console.log(this.imageData)
//       this.onUpload1();
//     },
//     onUpload(){
//       this.picture=null;
//       const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
//       storageRef.on(`state_changed`,snapshot=>{
//         this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
//       }, error=>{console.log(error.message)},
//       ()=>{this.uploadValue=100;
//         storageRef.snapshot.ref.getDownloadURL().then((url)=>{
//           this.picture =url;
//           this.posts.postUrl = url;
//          console.log(this.posts.postUrl);
//         });
//       }
//       );
//     },
//     onUpload1(){
//       this.picture=null;
//       const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
//       storageRef.on(`state_changed`,snapshot=>{
//         this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
//       }, error=>{console.log(error.message)},
//       ()=>{this.uploadValue=100;
//         storageRef.snapshot.ref.getDownloadURL().then((url)=>{
//           this.picture = url;
//           this.story_data.storyUrl.push(url);
//          console.log(this.story_data.storyUrl);
//         });
//       }
//       );
//     },
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
//  this.posts.userId = this.userId
//  if(this.posts.imageData !== ""){
//    this.posts.postType = 1
//  }
//  else{
//    this.posts.postType = 2
//  }
//  console.log(this.posts)
//  let data=this.posts;
//  console.log("URLlllllscsd hcgsdvcdkghvkshfgvkhdfgcvkahds"+this.posts.postUrl)
//  Vue.axios.post('http://10.177.1.69:8081/pb/post/addPost', data)
//  .then((resp) => {
//  console.log(resp.data)
//  // if (resp.data) {
//  // this.$router.push('/home')
//  // }
//  })
// .catch(function (error){
//   console.log(error);
// });
// e.preventDefault();
//  },
//  postStory (e) {
//   console.log(this.story_data)
//   console.log(this.stories)
//   let data=this.story_data;
//   console.log("URLlllllscsd hcgsdvcdkghvkshfgvkhdfgcvkahds"+this.story_data.postUrl)
//   Vue.axios.post('http://10.177.1.69:8081/pb/story/addStory', data)
//   .then((resp) => {
//   console.log(resp.data)
//   // if (resp.data) {
//   // this.$router.push('/home')
//   // }
//   })
//   .catch(function (error){
//     console.log(error);
//   });
//   e.preventDefault();
// },
// postComment (id) {
//   this.add_comment.postId = id
//   this.add_comment.userId = this.userId
//   console.log(this.add_comment)
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

// postShare (post) {
//   this.posts.timestamp = Date.now()
//   this.posts.sharedPostId = post.postId
//   this.posts.postText = post.postText
//   this.posts.postCategory = post.postCategory
//   this.posts.postUrl = post.postUrl
//   Vue.axios.post('http://10.177.1.69:8081/pb/post/addPost', this.posts)
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

//  }
 
 };
</script>
<style>
.my-5{
 margin-left: 2%;
}
.mx-auto{
 width: 50%;
 margin-top: 50px;
 height: 50%;
 float: left;
}
.post{
 width: 55%;
}
.ad{
margin-top: 10px;
height: 100px;
}
.adimg{
 height: 600px;
 width: 1000px;
}
.sd{
  float: right;
  margin-top: 6px;
  width: 45%;
}
</style>