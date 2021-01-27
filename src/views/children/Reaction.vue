<template>
<!-------------------------------------------------- Reaction --------------------------------------------------------------------->
  <div>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md6 lg4 v-for="res in results" :key="res.userId">
         <router-link to="/np"> <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="res.profileImage">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ res.userName }}</div>
              <!-- <div class="grey--text">{{  }}</div> -->
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
Vue.use(VueAxios, axios);
export default {
  data() {
    return {
      results: undefined
    }
  },
  mounted(){
    const pid = this.$store.state.postId_react
    const rid = this.$store.state.reactId
    console.log(pid + "    " + rid)
    Vue.axios.get(`http://10.177.1.69:8081/pb/reaction/getReactionDetails/${pid}/${rid}`)
      .then((resp) => {
        this.results = resp.data[0].userDTOS
        console.log(resp.data)
      })
  }
}
</script>
<style >
.row {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    margin: -12px;
    width: 600px;
}
</style>