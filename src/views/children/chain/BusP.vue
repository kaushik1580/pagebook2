<template>
  <div>
<!---------------------------------------------------- BUSINESS PROFILE ID --------------------------------------------------------------------->
    <div>
    <v-card class="mx-auto" max-width="4000" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            QUINBAY
          </v-list-item-title>
          <v-list-item-title class="headline mb-1">
            kaushik.kumar@quinbay.com
          </v-list-item-title>
          <v-list-item-title class="headline mb-1">
            DOB- 17/05/1998
          </v-list-item-title>
          <v-list-item-title class="headline mb-1">
            BIO- Build to order, future tech platforms
          </v-list-item-title>
          <v-card-actions>
            <router-link to="/editp">
        <v-btn outlined rounded text>
          Edit Profile
        </v-btn>
            </router-link>
      </v-card-actions>
      <div class="ap" style="margin-left:200px">
 <v-dialog width="500">
 <template v-slot:activator="{ on, attrs }">
 <v-btn v-bind="attrs" v-on="on" class="red lighten-1" style="margin:20px">
 Add post
 </v-btn>
 </template>
 <v-card>
 <v-card-title>
 <h2>Add a new Post</h2>
 </v-card-title>
 <v-card-text>
 <v-form class="px-3" ref="form" @submit="postData" method="post">
 <v-textarea v-model="posts.postText" label="Content"></v-textarea>
 <v-file-input label="File input" filled prepend-icon="mdi-camera"></v-file-input>
 <v-row align="center">
 <v-col class="d-flex" cols="12" sm="6">
 <v-select :items="items" label="Categories" v-model="posts.postCategory"></v-select>
 </v-col>
 </v-row>
 <v-spacer></v-spacer>
 <v-btn rounded type="submit" class="success mx-0 mt-3">Add Post</v-btn>
 </v-form>
 </v-card-text>
 </v-card>
 </v-dialog>
 <!-- Add a Story -->
 <v-dialog width="500">
 <!-- <template v-slot:activator="{ on, attrs }">
 <v-btn v-bind="attrs" v-on="on" class="red lighten-1">
 Add story
 </v-btn>
 </template> -->
 <v-card>
 <v-card-title>
 <h2>Add a new Post</h2>
 </v-card-title>
 <v-card-text>
 <v-form class="px-3" ref="form">
 <v-file-input label="Upload Image" filled prepend-icon="mdi-camera"></v-file-input>
 <v-spacer></v-spacer>
 <v-btn rounded class="success mx-0 mt-3">Add Story</v-btn>
 </v-form>
 </v-card-text>
 </v-card>
 </v-dialog>
 </div>
        </v-list-item-content>
  
        <v-list-item-avatar class="pimg" tile size="150" color="grey">
          <img src="https://media-exp1.licdn.com/dms/image/C560BAQFbHuu2Uhy90A/company-logo_200_200/0/1602077877782?e=2159024400&v=beta&t=lS-ryinQPd94dAzqy6G5epqPJqUHjjrLzuB4VNOMjoU" />
        </v-list-item-avatar>
      </v-list-item>
      <router-link to="/search">
      <v-card-title>Total Followers</v-card-title>
      <v-card-text>
        <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column >
          <v-chip>200</v-chip>
        </v-chip-group>
      </v-card-text></router-link>
    </v-card>
    <v-card :loading="loading" class="mx-auto my-12" max-width="600">
      <v-img height="200" src="https://scontent.fmaa1-4.fna.fbcdn.net/v/t1.0-9/81323841_2957494540929619_4102496046096056320_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=VxVM4FzGxRwAX90wRZp&_nc_ht=scontent.fmaa1-4.fna&oh=89339472ec72dfe4661f0b971a7a55d9&oe=602F7C84" float="right"></v-img>
      <v-card-title>Kaushik</v-card-title>
      <v-card-text>
        <v-row align="center" class="mx-0">
        </v-row>
        <div>Dev Intern @Quinbay | Machine Learning enthusiast</div>
      </v-card-text>
      <v-divider class="mx-4"></v-divider>
      <v-card-text class="mx=5">
        <v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>
          <v-chip><v-icon>mdi-heart</v-icon></v-chip>
          <v-chip><v-icon>mdi-thumb-up</v-icon></v-chip>
          <v-chip><v-icon>mdi-thumb-down</v-icon></v-chip>
          <v-chip>mdi-angry</v-chip>
          <v-divider></v-divider>
        </v-chip-group>
      </v-card-text>
    </v-card>
  </div>
  </div>  
</template>
<script>
export default {
  name: 'Profile',
  data () {

  
    return {
      items: ['General', 'Sports', 'Fashion', 'Automobile', 'Food', 'Education'],
     posts: {
    "userId" : "103",
    "postText" : "",
    "postUrl" : "",
    "postType" : 1,
    "postCategory" : "General",
    "timestamp" : 1234567891,
    "sharedPostId" : null
   },
   loading: false,
    selection: 1,
    }
  },

  methods: {
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
    postData (e) {
      this.posts.timestamp = Date.now()
      console.log(this.posts.timestamp)
      this.axios.post('http://10.177.1.69:8081/pb/post/addPost', this.posts)
        .then((resp) => {
          console.log(resp.data)
          // if (resp.data) {
          //   this.$router.push('/home')
          // }
        })
        .catch(error => alert(error))
      e.preventDefault()
    }
  },
}
</script>
<style scoped>
.mx-auto{
  width: 60%;
  margin-top: 50px;
  height: 50%;
}
.pimg{
  height: 20px;
  width: 30px;
}
</style>