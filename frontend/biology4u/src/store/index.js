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
    initialiseStore(state) {
      const userInfo = localStorage.getItem('user');
      if (userInfo) {
        state.userInfo = JSON.parse(userInfo);
      }
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    deleteUserInfo(state) {
      state.userInfo = {};
    }
  },
  actions: {
    signInUser(context, userInfo) {
      axios.post("http://localhost:5001/api/v1/users/", userInfo).then(response => {
        context.commit('setUserInfo', jwt_decode(response.data.token));
        console.log(response.data);
        localStorage.setItem("user", JSON.stringify(jwt_decode(response.data.token)));
        localStorage.setItem("refreshToken", JSON.stringify(response.data.refreshToken));
        router.push('/main');
      }).catch(err => {
        console.log(err.message);
      })
    },

    logInUser(context, userInfo) {
      axios.post("http://localhost:5001/api/v1/users/logIn", userInfo).then(response => {
        console.log(response.data);
        context.commit('setUserInfo', jwt_decode(response.data.token));
        console.log(jwt_decode(response.data.token));
        localStorage.setItem("user", JSON.stringify(jwt_decode(response.data.token)));
        localStorage.setItem("refreshToken", JSON.stringify(response.data.refreshToken));
        router.push('/main');
      }).catch(err => {
        console.log(err.message);
      })
    },

    logout(context) {
      localStorage.removeItem("user");
      localStorage.removeItem("refreshToken");
      context.commit('deleteUserInfo');
    }
  },
  modules: {
  }
})
