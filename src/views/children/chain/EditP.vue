<template>
  <div>
    <!----------------------------------------------------- EDIT PROFILE PAGE --------------------------------------------------------------------->
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="data.bio" label="BIO" style="width:1000px"></v-text-field>
          </v-col>
          <v-form class="px-3" ref="form">
       <!-- <v-file-input label="File input" filled prepend-icon="mdi-camera"></v-file-input> -->
       <v-row align="center">
            <v-col class="d-flex" cols="12" sm="6">
            <v-select :items="items" v-model="data.type" label="Profile Type" style="width:800px"></v-select> <!-- v-model="posts.postCategory"-->
            </v-col>
            </v-row>
          <v-spacer></v-spacer>
           <!-- <v-btn rounded  color="#f95e49">Upload</v-btn>--> </v-form> 
        </v-row>
        <v-card-actions>
        <v-btn @click="edit" outlined rounded text>
          Submit
        </v-btn>
        </v-card-actions>
      </v-container>
    </v-form>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import jwtdecode from 'jwt-decode'
Vue.use(VueAxios, axios);
export default {
  data () {
    return{
      userId: jwtdecode(localStorage.getItem("token")).userId,
      data: {
        channelId: 0,
        userId: "",
        bio: "",
        type: 1
      },
      items: [1, 2],
    }
  },
  methods: {
    edit(){
      this.data.channelId = 0,
      this.data.userId = this.userId
      console.log(this.data)
      Vue.axios.put(`http://10.177.1.104:8085/user/update`, this.data)
        .then((resp) => {
          console.log(resp)
          // console.log(this.data)
        })
    }
  }
}
</script>