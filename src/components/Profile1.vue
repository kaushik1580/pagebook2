<template>
    <div>
        <v-card class="mx-auto" max-width="5000" outlined>
        <v-list-item three-line>
            <v-list-item-content>
            <v-list-item-title class="headline mb-1">
                {{userData.username}}
            </v-list-item-title>
            <v-list-item-title class="headline mb-1">
                DOB - {{userData.dateOfBirth}}
            </v-list-item-title>
            <v-list-item-title class="headline mb-1">
                BIO- {{userData.bio}}
            </v-list-item-title>
            <v-card-actions>
                <router-link to="/editp">
            <v-btn outlined rounded text>
            Edit Profile
            </v-btn>
                </router-link>
        </v-card-actions>
            </v-list-item-content>
    
            <v-list-item-avatar class="pimg" tile size="150" color="grey">
            <img :src="userData.profileImage" />
            </v-list-item-avatar>
        </v-list-item>
        <router-link to="/friends">
        <v-card-title>Followers</v-card-title></router-link>
        <v-card-text>
            <v-chip-group column >
            <v-chip>{{userData.followerCount}}</v-chip>
            </v-chip-group>
        </v-card-text>
        <router-link to="/followings">
        <v-card-title>Followings</v-card-title></router-link>
        <v-card-text>
            <v-chip-group column >
            <v-chip>{{userData.followingCount}}</v-chip>
            </v-chip-group>
        </v-card-text>
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
    name: "Profile1",
    data(){
        return{
            userId: jwtdecode(localStorage.getItem("token")).userId,
            userData: 1,
        }
    },
    mounted() {
        const uid = this.userId
        Vue.axios.get(`http://10.177.1.179:7081/pb/user/myProfile/${uid}`)
        .then((resp) => {
            this.userData = resp.data
            console.log(resp.data)
        })
    }
}
</script>