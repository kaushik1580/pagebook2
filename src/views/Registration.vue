<template>
  <div class="Register">
    <div class="wrapper">
      <section class="login-block">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12">
              <form class="md-float-material form-material" @submit.prevent="postData" method="post">
                <div class="auth-box card">
                  <div class="card-block">
                    <h3 class="text-center heading">Register</h3>
                    <div class="form-group form-primary">
                      <input type="text" class="form-control" name="name" v-model="posts.name" placeholder="Name" id="name" maxlength="50" required/>
                    </div>
                    <div class="form-group form-primary">
                      <input type="text" class="form-control" name="username" v-model="posts.username" placeholder="Username" id="username" maxlength="50" required/>
                    </div>
                    <div class="form-group form-primary">
                      <input type="email" class="form-control" name="email" v-model="posts.email" placeholder="Email" id="email" maxlength="50" required/>
                    </div>
                    <div class="form-group form-primary">
                      <input type="text" class="form-control" name="profileImage" v-model="posts.profileImage" placeholder="Profile Image Link" id="link" required/>
                    </div>
                    <div class="form-group form-primary">
                      <input type="password" class="form-control" name="password" v-model="posts.password" placeholder="Password" id="password" maxlength="100" required/>
                    </div>
                    <div class="form-group form-primary">
                      <input type="number" class="form-control" name="mobileNumber" v-model="posts.mobileNumber" placeholder="Mobile Number" id="mobilenumber" maxlength="10" required/>
                    </div>
                    <div class="form-group form-primary">
                      <input type="text" class="form-control" name="dateOfBirth" v-model="posts.dateOfBirth" placeholder="DOB- DD/MM/YYYY" id="dateOfBirth" maxlength="20" required/>
                    </div>
                    <div class="form-group form-primary">
                      <input type="text" class="form-control" name="areaOfInterests" v-model="posts.areaOfInterests" placeholder="Enter Area Of Interest" id="areaOfInterest" maxlength="20" required/>
                    </div>
                    <div class="form-group form-primary">
                      <input type="text" class="form-control" name="bio" v-model="posts.bio" placeholder="BIO" id="bio" maxlength="255" required/>
                    </div>

                    <h6>Select Profile Type</h6>
                    <label class="radio-inline mr-4 radiofont" >
                      <input class="mr-1" type="radio" name="optradio" v-model="posts.type" value = "1"  required checked/>Public
                    </label>
                    <label class="radio-inline mr-4 radiofont">
                      <input class="mr-1" type="radio" name="optradio" v-model="posts.type" value = "2" required />Private
                    </label>
                    <label class="radio-inline mr-4 radiofont">
                      <input class="mr-1" type="radio" name="optradio" v-model="posts.type" value = "3" />Business
                    </label>
                    <hr />

                    <div class="row">
                      <div class="col-md-12">
                        <input type="submit" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20" name="submit" style="margin-left:40%" value="Register"/>
                        <!-- <button type="submit" >Register</button> -->
                        <!-- <button type="submit">SIGNUP</button> -->
                      </div>
                    </div>
                    <p class="text-inverse text-center">
                      Already have an account?
                      <router-link class="nav-item" to="/login">Login</router-link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import jwtdecode from 'jwt-decode'
import {setAuthorizationToken} from '../util/auth'
export default {
  name: "Registration",
  data () {
    return {
      posts: {
        name: null,
        username: null,
        email: null,
        profileImage: null,
        password: null,
        mobileNumber: null,
        dateOfBirth: null,
        areaOfInterests: null,
        type:null,
        channelId: 0,
        master: 'false',
        bio: null,
        
      }
    }
  },
   methods: {
    postData () {
      let data = this.posts;
      console.log(this.posts)
      axios.post('http://10.177.1.104:8085/user/save', data)
        .then((result) => {
          console.log(result.data)
          localStorage.setItem("token" ,result.data.jwt)
          setAuthorizationToken(result.data.jwt)
          const user = {}
          if(result.data.code === 100){
            alert('Email exit already')
          }
          if(result.data.code === 101){
            alert('Username alreadt exit')
          }
          if(result.data.code === 102){
            alert('Password Null')
          }
          if(result.data.code === 103){
            alert('Email format is wrong')
          }
          if(result.data.jwt!=null){
          user.userId = jwtdecode(result.data.jwt).userId
          user.userName = jwtdecode(result.data.jwt).username
          user.profileImage = jwtdecode(result.data.jwt).profileImage
          axios.post("http://10.177.1.179:7081/pb/user/addUserDetails", user)
            .then((resp) => console.log(resp))

          console.log("before condition", this.posts);
          if (this.posts.type == 3){
            const data = {...user, businessID:user.userId, companyName: user.userName };
            console.log("CRM TEsting", data);
            axios.post("http://10.177.2.81:8000/crm/admin/0/create/admin", data)
              .then((resp) => console.log("CRM testing", resp))
              .catch(error => console.log("crm error", error))
          }
          }
        })
        .catch(function(error){
          console.log(error);
        })
        
    }
  }
};
</script>

<style scoped>
.radiofont {
  font-size: 18px;
}
input[type="radio"] {
  width: 15px;
  height: 15px;
}
.wrapper {
  background: #1b3752;
}
body {
  background-color: #f2f7fb;
}
.login-block {
  margin: 30px auto;
  min-height: 93.6vh;
}

.login-block .auth-box {
  margin: 20px auto 0;
  max-width: 600px !important;
}

.card {
  border-radius: 5px;
  -webkit-box-shadow: 0 0 5px 0 rgba(43, 43, 43, 0.1),
    0 11px 6px -7px rgba(43, 43, 43, 0.1);
  box-shadow: 0 0 5px 0 rgba(43, 43, 43, 0.1),
    0 11px 6px -7px rgba(43, 43, 43, 0.1);
  border: none;
  margin-bottom: 30px;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: white;
}

.card .card-block {
  padding: 1.25rem;
}

.f-80 {
  font-size: 80px;
}

.form-group {
  margin-bottom: 1.25em;
}

.form-material .form-control {
  display: inline-block;
  height: 43px;
  width: 100%;
  border: none;
  border-radius: 0;
  font-size: 16px;
  font-weight: 400;
  padding: 9px;
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-bottom: 1px solid #ccc;
}

.btn-md {
  padding: 10px 16px;
  font-size: 15px;
  line-height: 23px;
}

.btn-primary {
  background-color: #4099ff;
  border-color: #4099ff;
  color: #fff;
  cursor: pointer;
  -webkit-transition: all ease-in 0.3s;
  transition: all ease-in 0.3s;
}

.btn {
  border-radius: 2px;
  text-transform: capitalize;
  font-size: 15px;
  padding: 10px 19px;
  cursor: pointer;
}

.m-b-20 {
  margin-bottom: 20px;
}

.btn-md {
  padding: 10px 16px;
  font-size: 15px;
  line-height: 23px;
}

.heading {
  font-size: 21px;
}

#infoMessage p {
  color: red !important;
}

.btn-google {
  color: #545454;
  background-color: #ffffff;
  box-shadow: 0 1px 2px 1px #ddd;
}

.or-container {
  align-items: center;
  color: #ccc;
  display: flex;
  margin: 25px 0;
}

.line-separator {
  background-color: #ccc;
  flex-grow: 5;
  height: 1px;
}

.or-label {
  flex-grow: 1;
  margin: 0 15px;
  text-align: center;
}
</style>