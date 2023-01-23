import { createStore } from 'vuex'
// import axios from 'axios';
import jwt_decode from "jwt-decode"
import router from '@/router';
import AuthService from '@/services/auth.service';

export default createStore({
  state: {
    userInfo: {}
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
    signUpUser(context, userInfo) {
      AuthService.register(userInfo).then(response => {
        context.commit('setUserInfo', jwt_decode(response.data.token));
        router.push('/main');
      }).catch(err => {
        console.log(err.message);
      })
    },

    logInUser(context, userInfo) {
      AuthService.login(userInfo).then(response => {
        context.commit('setUserInfo', jwt_decode(response.data.token));
        router.push('/main');
      }).catch(err => {
        console.log(err.message);
      })
    },

    logout(context) {
      AuthService.logout();
      context.commit('deleteUserInfo');
    }, 

    // refreshToken (context) {
      
    // }
  },
  modules: {
  }
})

