<template>
    <div>
        <v-dialog width="500">
        <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" color="#006499">
        Add story
        </v-btn>
        </template>
        <v-card>
        <v-card-title>
        <h2>Add a new Post</h2>
        </v-card-title>
        <v-card-text>
        <v-form class="px-3" ref="form" @submit="postStory" method="post">
        <input type="file" @change="previewImage" accept="image/*" >
        <v-spacer></v-spacer>
        <v-btn rounded type="submit" color="#006499">Add Story</v-btn>
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
    name: "AddStory",
    data(){
        return{
            imageData: null,
            index: 0,
            picture: null,
            uploadValue: 0,
            userId: jwtdecode(localStorage.getItem("token")).userId,
            story_data: {
                'userId': this.userId,
                'storyUrl': []
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
          this.story_data.storyUrl.push(url);
         console.log(this.story_data.storyUrl);
        });
      }
      );
    },
    postStory (e) {
        // console.log(this.story_data)
        this.story_data.userId = this.userId
        let data=this.story_data;

        console.log(data)
        Vue.axios.post('http://10.177.1.69:8081/pb/story/addStory', data)
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