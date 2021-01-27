<template>
<!-------------------------------------------------- Search --------------------------------------------------------------------->
  <div>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md6 lg4 v-for="friend in friends" :key="friend.userId" >
         <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="friend.profileImage">
              </v-avatar>
            </v-responsive>
            <v-card-text @click="toProfile(friend.userId)">
              <div class="subheading">{{ friend.userName }}</div>
              <!-- <div class="grey--text">{{ person.role }}</div> -->
            </v-card-text>
          </v-card>
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
  methods: {
      toProfile(id){
        console.log(id)
            this.$store.state.friendId = id
            console.log(id)
            this.$router.push(this.$router.push({path: `/np/`}))
        },
  },
mounted(){
    const uid = this.userId
    Vue.axios.get(`http://10.177.1.179:7081/pb/user/getFollowers/${uid}`)
      .then((resp) => {
        console.log(resp.data)
        this.friends = resp.data
      })
  },
}
</script>

<style>
.flex.lg4 {
    flex-basis: 33.3333333333%;
    flex-grow: 0;
    max-width: 700px;
}
.row {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    margin: -12px;
    width: 800px;
}
</style>