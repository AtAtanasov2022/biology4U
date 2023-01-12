import { createStore } from 'vuex'
import axios from 'axios';
import jwt_decode from "jwt-decode"
import router from '@/router';

export default createStore({
  state: {
    userInfo: {} //logged type 
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo;
    }
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    }
  },
  actions: {
    signInUser(context, userInfo) {
      axios.post("http://localhost:5001/api/v1/users/", userInfo).then(response => {
        context.commit('setUserInfo', jwt_decode(response.data.token));
        router.push('/main');
      }).catch(err => {
        console.log(err.message);
      })
    },

    logInUser(context, userInfo) {
      axios.get("http://localhost:5001/api/v1/users/logIn", userInfo).then(response => {
        console.log(response);
        context.commit('setUserInfo', jwt_decode(response.data.token));
        router.push('/main');
      }).catch(err => {
        console.log(err.message);
      })
    }
  },
  modules: {
  }
})
