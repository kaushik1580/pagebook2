<template>
<div>
  <h2 class="bus" >ADD MODERATORS</h2>
    <v-card  class="frnd" elevation="100" justify="center" outlined max-width="8000" v-for="res in results" :key="res.userId">
      <v-row justify="center">
      <v-avatar size= 100>
        <img :src="res.profileImage" alt="John" class="img">
      </v-avatar>
    </v-row>
      <v-card-title class="text" style="">
        {{res.userName}}
        </v-card-title>
    <v-btn class="follow" rounded color="#f95e49" @click="Add(res.userId)">
        Add
      </v-btn>
    </v-card>
</div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
import jwtdecode from 'jwt-decode'
export default {
  name: 'Request',
  data() {
    return {
      userId: jwtdecode(localStorage.getItem("token")).userId,
      results: undefined,
      addModerator:{
        moderatorId: "",
        businessId: ""
      }
    }
  },
  mounted(){
    // const uid = jwtdecode(localStorage.getItem("token")).userId
    const path = this.$store.state.moderatorId
    console.log("Lol")
      Vue.axios.post(`http://10.177.1.97:8081/search/searchString/${path}`)
        .then((resp) => {
          this.results = resp.data
          console.log(resp.data)
        })
  },
  methods: {
      Add(id){
        console.log("dssd")
          this.addModerator.moderatorId = id
          this.addModerator.businessId = this.userId
          Vue.axios.post('http://10.177.1.179:7081/pb/user/addModerator/', this.addModerator)
          .then((resp) => {
            console.log(resp.data)
          })
          }
  }
}
</script>

<style>
.img{
  border-radius: 20px;
  margin-top: 30%;
}
.frnd{
  margin-top: 50px;
  width: 500px;
  margin-left: 45%;
}
.bus{
  text-align:center;
  margin-left: 450px;

}
.text{
  text-align: center;
  margin-left: 190px;
}
</style>