<template>
<!-------------------------------------------------- Search --------------------------------------------------------------------->
  <div>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md6 lg4 v-for="friend in friends" :key="friend.userId">
         <router-link to="/np"> <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="friend.profileImage">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ friend.userName }}</div>
              <!-- <div class="grey--text">{{ person.role }}</div> -->
            </v-card-text>
          </v-card></router-link>
        </v-flex>
      </v-layout>

    </v-container>
    
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import jwtdecode from 'jwt-decode';
Vue.use(VueAxios, axios);

export default {
  data() {
    return {
        userId: jwtdecode(localStorage.getItem("token")).userId,
        friends: undefined
    }
  },
mounted(){
    const uid = this.userId
    Vue.axios.get(`http://10.177.1.179:7081/pb/user/getFollowings/${uid}`)
      .then((resp) => {
        console.log(resp.data)
        this.friends = resp.data
      })
  },
}
</script>