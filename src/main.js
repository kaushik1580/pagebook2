import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'


Vue.config.productionTip = false

firebase.initializeApp ({
  apiKey: "AIzaSyBdE4v8YEg0QzNMz7xXg_l_i4-oOeY5qvc",
  authDomain: "pagebook-b4377.firebaseapp.com",
  projectId: "pagebook-b4377",
  storageBucket: "pagebook-b4377.appspot.com",
  messagingSenderId: "867502027531",
  appId: "1:867502027531:web:3e7e38fa46d733e3b1a80e",
  measurementId: "G-B3HF19XMCR"
});





new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')