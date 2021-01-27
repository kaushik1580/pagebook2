<template>
 <div>
 <v-app>
 <v-navigation-drawer style="background-color:#f2f2f2"
        v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img :src="user.profileImage" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ user.username }}</v-list-item-title>
              <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-btn style="display:block;margin:20px;width:220px;color:white" color="#006499" @click="goToHome"> <v-icon style="margin-right:10px">mdi-home</v-icon>HOME</v-btn>
          <v-btn style="display:block;margin:20px;width:220px;color:white" color="#006499" @click="goToProfile"><i class="fa fa-users" aria-hidden="true" style="margin-right:10px"></i>PROFILE</v-btn>
            <v-btn style="display:block;margin:20px;width:220px;color:white" color="#006499" @click="goToNotification"><i class="fa fa-users" aria-hidden="true" style="margin-right:10px"></i>NOTIFICATION</v-btn>
            <v-btn style="display:block;margin:20px;width:220px;color:white" color="#006499" @click="goToRequest"><i class="fa fa-users" aria-hidden="true" style="margin-right:10px"></i>FRIEND REQUEST</v-btn>
            <v-btn style="display:block;margin:20px;width:220px;color:white" color="#006499" v-if="this.userdetails.type == 2"  @click="goToBusiness"><i class="fa fa-users" aria-hidden="true" style="margin-right:10px"></i>BUSINESS</v-btn>
            <v-btn style="display:block;margin:20px;width:220px;color:white" color="#006499" v-if="this.userdetails.type == 3" @click="goToModerator"><i class="fa fa-users" aria-hidden="true" style="margin-right:10px"></i>MODERATOR</v-btn>
           <v-divider></v-divider>
          
        </v-list>
        </v-navigation-drawer>
        <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="#f2f2f2" dark>
        <v-app-bar-nav-icon color="#006499" @click.stop="drawer = !drawer" />
        <v-toolbar-title style="width: 300px" color="#f95e49" class="ml-0 pl-4"></v-toolbar-title>
        <v-text-field color="#006499" dark hide-details single-line v-model="val" style="border:1px solid #006499"></v-text-field>
      <v-btn icon @click="submit">
        <v-icon style="color:#006499">mdi-magnify</v-icon>
      </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="#006499" style="margin:10px" @click="logoutUser">LOGOUT</v-btn>
      </v-app-bar>
 <v-main style="padding: 0% !important">
 <v-container fluid >
 <v-layout>
 <router-view></router-view>
 </v-layout>
 </v-container>
 </v-main>
 <v-footer app></v-footer>
</v-app>
 </div>
</template>

<script>
import jwtdecode from 'jwt-decode'
import axios from 'axios'
export default {
   data() {
    return {
      val: "",
      drawer: true,
      userdetails: {},
      user: {
        profileImage: null,
        username: null,
        email: null
      }
    }
  },
  methods:{
      submit(){
        console.log(this.val)
        this.$router.push({path: `/search/`+this.val})
      },
      goToHome(){
           console.log("you are already in"+this.$router.currentRoute.path)
        if(this.$router.currentRoute.path !=='/home'){
        this.$router.push("/home");
      }else this.$router.go(this.$router.currentRoute)
    },
        goToProfile(){
           console.log("you are already in"+this.$router.currentRoute.path)
        if(this.$router.currentRoute.path !=='/profile'){
        this.$router.push("/profile");
      }else this.$router.go(this.$router.currentRoute)
    },
    goToNotification(){
       console.log("you are already in"+this.$router.currentRoute.path)
        if(this.$router.currentRoute.path !=='/notification'){
        this.$router.push("/notification");
      }else this.$router.go(this.$router.currentRoute)
    },
     goToRequest(){
        console.log("you are already in"+this.$router.currentRoute.path)
        if(this.$router.currentRoute.path !=='/request'){
        this.$router.push("/request");
      }else this.$router.go(this.$router.currentRoute)
      
    },
     goToBusiness(){
        console.log("you are already in"+this.$router.currentRoute.path)
        if(this.$router.currentRoute.path !=='/business'){
        this.$router.push("/business");
      }else this.$router.go(this.$router.currentRoute)
      
    },
      goToModerator(){
         console.log("you are already in"+this.$router.currentRoute.path)
      if(this.$router.currentRoute.path !=='/moderator'){
        this.$router.push("/moderator");
      } else this.$router.go(this.$router.currentRoute)
    },
     goToSE(){
        console.log("you are already in"+this.$router.currentRoute.path)
      if(this.$router.currentRoute.path !=='/supportengineer'){
        this.$router.push("/supportengineer");
        }else this.$router.go(this.$router.currentRoute)
  },
  logoutUser(){
    localStorage.clear()
    this.$router.push("/login");
  }
},
mounted: function() {
      this.user.email = jwtdecode(localStorage.getItem("token")).email
      this.user.username = jwtdecode(localStorage.getItem("token")).username
      this.user.profileImage = jwtdecode(localStorage.getItem("token")).profileImage
      console.log(this.user)
      axios.get(`http://10.177.1.104:8085/user/findByChannelIdAndUsername/0/${this.user.username}`)
        .then((resp) => {this.userdetails = resp.data
        console.log('userdetails')
        console.log(this.userdetails)})
      
  }
}
</script>