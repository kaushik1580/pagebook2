<template>
    <div class="ad" style="float: right">
    <v-img class="adimg" max-height="800" max-width="400"
    src="https://picsum.photos/id/11/500/300" style="margin:35px;margin-left:600px"></v-img>
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
            // stories: undefined,
        }
    },
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