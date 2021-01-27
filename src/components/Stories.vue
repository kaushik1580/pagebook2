<template>
    <div>
    <h1 class="subheading grey--text">Stories</h1>
    <v-container class="my-5">
    <v-layout row wrap>
    <v-flex xs6 sm4 md3 lg1 v-for="story in stories" :key="story.storyId">
    <v-dialog width="800">
    <template v-slot:activator="{ on, attrs }">
    <v-avatar v-bind="attrs" v-on="on" size="80" class="grey lighten-2">
    <img :src="story.storyUrl" alt="name"></v-avatar>
    </template>
    <v-card>
    <v-img :src="story.storyUrl" height="800px"></v-img>
    </v-card>
    </v-dialog>
    </v-flex>
    </v-layout>
    </v-container>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import jwtdecode from 'jwt-decode'
Vue.use(VueAxios, axios);
export default {
    name: "Stories",
    data(){
        return{
            userId: jwtdecode(localStorage.getItem("token")).userId,
            stories: undefined,
        }
    },
    mounted() {
        const uid = this.userId
        Vue.axios.get(`http://10.177.1.69:8081/pb/story/getFriendsStories/${uid}`)
            .then((resp) => {
            this.stories = resp.data
            console.log("LOLLLLL");
            console.log(resp.data)
            })
    }
}
</script>