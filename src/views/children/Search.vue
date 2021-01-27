<template>
<!-------------------------------------------------- Search --------------------------------------------------------------------->
  <div class="team">
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md6 lg4 v-for="res in results" :key="res.userId">
         <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="res.profileImage">
              </v-avatar>
            </v-responsive>
            <v-card-text @click="toProfile(res.userId)">
              <div class="subheading">{{ res.userName }}</div>
              <!-- <div class="grey--text">{{  }}</div> -->
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
      results: undefined
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
    const path = this.$route.params.id
    Vue.axios.post(`http://10.177.1.97:8081/search/searchString/${path}`)
      .then((resp) => {
        this.results = resp.data
        console.log(resp.data)
      })
  }
}
</script>