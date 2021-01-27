<template>
    <div>
        <v-dialog width="500">
        <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" color="#006499" style="margin:20px">
        Add post
        </v-btn>
        </template>
        <v-card>
        <v-card-title>
        <h2>Add a new Post</h2>
        </v-card-title>
        <v-card-text>
        <v-form class="px-3" ref="form" @submit="postData" method="post">
        <v-textarea v-model="posts.postText" label="Content"></v-textarea>
        <input type="file" @change="previewImage" accept="image/*" >
        <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
        <v-select :items="items" label="Categories" v-model="posts.postCategory"></v-select>
        </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <v-btn rounded type="submit" color="#006499">Add Post</v-btn>
        </v-form>
        </v-card-text>
        </v-card>
        </v-dialog>
    </div>
</template>

<script>
import firebase from 'firebase';
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import jwtdecode from 'jwt-decode'
Vue.use(VueAxios, axios);
export default {
    name: "AddPost",
    data(){
        return{
            imageData: null,
            index: 0,
            picture: null,
            uploadValue: 0,
            userId: jwtdecode(localStorage.getItem("token")).userId,
            items: ['General', 'Sports', 'Fashion', 'Automobile', 'Food', 'Education'],
            posts: {
                "userId" :this.userId,
                "postText" : "",
                "postUrl" : "",
                "postType" : 1,
                "postCategory" : "General",
                "timestamp" : 1234567891,
                "sharedPostId" : null
            },
        }
    },
    methods: {
        previewImage(event) {
      this.uploadValue=0;
      this.picture=null;
      this.imageData = event.target.files[0];
      console.log(this.imageData)
      this.onUpload();
    },
    onUpload(){
      this.picture=null;
      const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture =url;
          this.posts.postUrl = url;
         console.log(this.posts.postUrl);
        });
      }
      );
    },
    postData (e) {
        this.posts.timestamp = Date.now()
        this.posts.userId = this.userId
        if(this.posts.postUrl !== ""){
        this.posts.postType = 1
        }
        else{
        this.posts.postType = 2
        }
        console.log(this.posts)
        let data=this.posts;
        console.log("URLlllllscsd hcgsdvcdkghvkshfgvkhdfgcvkahds"+this.posts.postUrl)
        Vue.axios.post('http://10.177.1.69:8081/pb/post/addPost', data)
        .then((resp) => {
        console.log(resp.data)
        // if (resp.data) {
        // this.$router.push('/home')
        // }
        })
        .catch(function (error){
        console.log(error);
        });
        e.preventDefault();
    },
    }
}
</script>