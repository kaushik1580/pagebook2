<template>
    <div>
    <v-card class="mx-auto" max-width="4000" outlined>
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
                <v-btn class="follow" @click="addFriend" rounded color="#f95e49" v-if="!this.userData.isFriend">
                    Follow
                </v-btn>
                <v-btn class="follow" rounded color="#f95e49" v-if="this.userData.isFriend">
                    UN Follow
                </v-btn>
                <div v-if="this.userData.isModerator">
                    <AddPost/>
                </div>
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

import AddPost from '../components/AddPost'

export default {
    name: "NP1",
    components: {
        AddPost
    },
    data(){
        return{
            userId: jwtdecode(localStorage.getItem("token")).userId,
            userData: undefined,
            follow: {
                senderId: "",
                receiverId: "",
                status: "",
            }
        }
    },
    methods: {
        addFriend(){
            this.follow.senderId = this.userId
            this.follow.receiverId = this.$store.state.friendId
            if(this.userData.type === 2){
                this.follow.status = 1
            }
            else{
                this.follow.status = 2
            }
            Vue.axios.post('http://10.177.1.179:7081/pb/user/addFriendRequest/', this.follow)
            .then((resp) => {
                this.userData = resp.data
                console.log(resp.data)
            })
        }
    },
    mounted() {
        const uid = this.userId
        const friendId = this.$store.state.friendId
        console.log("Hello " + "uid - " + uid + " fid - " + friendId)
        Vue.axios.get(`http://10.177.1.179:7081/pb/user/userProfile/${uid}/${friendId}`)
        .then((resp) => {
            this.userData = resp.data
            console.log(resp.data)
        })
    }
}
</script>