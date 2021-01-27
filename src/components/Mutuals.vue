<template>
    <div class="mutual">
    <v-card v-for="mutual in mutuals" :key="mutual.userId" elevation="100" justify="center" outlined max-width="1200" height="160" style="width:400px;margin-top:700px;float:left;margin-left:20px;">
        <h4 style="text-align:center">People you may know</h4>
      <v-row justify="center">
      <v-avatar size= 80 style="height:80px;margin-top:20px; min-width: 80px; width: 80px;">
        <img :src="mutual.profileImage">
      </v-avatar>
    </v-row>
    <router-link to="/np">
      <v-card-title class="text">
        {{mutual.userName}}
        </v-card-title>
    </router-link>
    </v-card>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import jwtdecode from 'jwt-decode'
Vue.use(VueAxios, axios);
export default {
    name: "Mutuals",
    data(){
        return{
            userId: jwtdecode(localStorage.getItem("token")).userId,
            mutuals: undefined,
        }
    },
    mounted() {
        const uid = this.userId
        Vue.axios.get(`http://10.177.1.179:7081/pb/user/youMayKnow/${uid}`)
            .then((resp) => {
                this.mutuals = resp.data
                console.log("LOLLLLL");
                console.log(this.userId)
            })
        }
    }
</script>
<style>
.v-card__title {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: 0.0125em;
    line-height: 2rem;
    word-break: break-all;
    margin-left: 100px;
}

</style>