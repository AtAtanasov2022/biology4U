import { createStore } from 'vuex'
// import axios from 'axios';
import jwt_decode from "jwt-decode"
import router from '@/router';
import AuthService from '@/services/auth.service';
import TopicService from '@/services/topic.service';
// import SubTopicService from '@/services/subTopic.service';

export default createStore({
  state: {
    userInfo: {},
    menuItems: []
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo;
    },
    getMenuItems(state) {
      return state.menuItems;
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
    }, 

    setTopicsAndSubTopics(state, topicsAndSubTopicsInfo) {
      state.menuItems = topicsAndSubTopicsInfo;
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

    async getAllTopicsAndShortSubTopics(context) {
      console.log(context)
      // console.log(await TopicService.getAllTopicsAndShortSubTopics());
      context.commit("setTopicsAndSubTopics", await TopicService.getAllTopicsAndShortSubTopics());
    }

    // refreshToken (context) {

    // }
  },
  modules: {
  }
})

