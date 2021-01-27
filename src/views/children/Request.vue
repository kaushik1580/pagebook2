<template>
  <FriendRequest/>
</template>
<script>
// import Vue from 'vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// import jwtdecode from 'jwt-decode';
// Vue.use(VueAxios, axios);
import FriendRequest from '../../components/FriendRequest'
export default {
  name: 'Request',
  components: {
    FriendRequest
  },
  // data: () => ({
  //   userId: jwtdecode(localStorage.getItem("token")).userId,
    // uid: this.userId,
  //   requests: undefined,
  //   request_resp: {
  //     "requestId": null,
  //     "senderId": null,
  //     "receiverId": null,
  //     "status": null
  //   }
  // }),
  // mounted(){
  //   const uid = this.userId
  //   console.log(uid)
  //   Vue.axios.get(`http://10.177.1.179:7081/pb/user/getFriendRequests/${uid}`)
  //     .then((resp) => {
  //       console.log(resp.data)
  //       this.requests = resp.data
  //     })
  // },
  // methods: {
  //   toProfile(id){
  //     console.log(id)
  //     this.$store.state.friendId = id
  //     this.$router.push(this.$router.push({path: `/np/`}))
  //   },
  //   func: function(val, request){
  //     this.request_resp.requestId = request.requestId
  //     this.request_resp.senderId = request.userId
  //     this.request_resp.receiverId = this.uid
  //     this.request_resp.status = val
  //     console.log(this.request_resp)
  //     Vue.axios.post('http://10.177.1.179:7081/pb/user/updateFriendRequest', this.request_resp)
  //      .then((resp) => {
  //        console.log(resp)
  //      })
  //   }
  // }
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
</style>